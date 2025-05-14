import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Redirect } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import supabase from '../supabaseClient';
import { StoryPart, StoryChoice } from '../types';

export default function AdminPage() {
  const { user } = useAuth();
  const [stories, setStories] = useState<Record<string, StoryPart[]>>({});
  const [selectedStory, setSelectedStory] = useState<string>('frontend');
  const [selectedPart, setSelectedPart] = useState<number>(0);
  const [editingPart, setEditingPart] = useState<StoryPart | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', user.id)
        .single();
        
      if (!data?.is_admin) {
        return <Redirect to="/" />;
      }
    };
    
    checkAdmin();
  }, [user]);

  useEffect(() => {
    const fetchStories = async () => {
      const { data: storiesData, error } = await supabase
        .from('stories')
        .select('*');
        
      if (error) {
        console.error('Error fetching stories:', error);
        return;
      }
      
      const groupedStories = storiesData.reduce((acc, story) => {
        if (!acc[story.type]) acc[story.type] = [];
        acc[story.type].push(story);
        return acc;
      }, {} as Record<string, StoryPart[]>);
      
      setStories(groupedStories);
    };
    
    fetchStories();
  }, []);

  const handleSave = async () => {
    if (!editingPart) return;

    try {
      const { error } = await supabase
        .from('stories')
        .upsert({
          type: selectedStory,
          part_number: selectedPart,
          ...editingPart
        });

      if (error) throw error;

      // Refresh stories
      const { data: updatedStories } = await supabase
        .from('stories')
        .select('*')
        .eq('type', selectedStory);

      setStories(prev => ({
        ...prev,
        [selectedStory]: updatedStories || []
      }));

      setEditingPart(null);
    } catch (error) {
      console.error('Error saving story:', error);
    }
  };

  if (!user?.id) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Admin Panel - Hikaye Yönetimi</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedStory} onValueChange={setSelectedStory}>
            <TabsList className="grid grid-cols-7 w-full">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="security">Güvenlik</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="database">Veritabanı</TabsTrigger>
              <TabsTrigger value="gamedev">Oyun</TabsTrigger>
              <TabsTrigger value="datascience">Veri Bilimi</TabsTrigger>
            </TabsList>

            {Object.entries(stories).map(([type, parts]) => (
              <TabsContent key={type} value={type}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Hikaye Bölümleri</h3>
                    {parts.map((part, index) => (
                      <Card 
                        key={index}
                        className={`cursor-pointer ${selectedPart === index ? 'border-purple-500' : ''}`}
                        onClick={() => {
                          setSelectedPart(index);
                          setEditingPart(part);
                        }}
                      >
                        <CardContent className="p-4">
                          <h4 className="font-medium">{part.title}</h4>
                          <p className="text-sm text-gray-600 truncate">{part.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                    <Button 
                      onClick={() => {
                        setEditingPart({
                          title: '',
                          description: '',
                          dimension: `${type}_new`,
                          choices: []
                        });
                        setSelectedPart(parts.length);
                      }}
                    >
                      Yeni Bölüm Ekle
                    </Button>
                  </div>

                  {editingPart && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Bölüm Düzenleme</h3>
                      <div className="space-y-4">
                        <div>
                          <Label>Başlık</Label>
                          <Input
                            value={editingPart.title}
                            onChange={e => setEditingPart({
                              ...editingPart,
                              title: e.target.value
                            })}
                          />
                        </div>
                        <div>
                          <Label>Açıklama</Label>
                          <Textarea
                            value={editingPart.description}
                            onChange={e => setEditingPart({
                              ...editingPart,
                              description: e.target.value
                            })}
                          />
                        </div>
                        <div>
                          <Label>Resim URL</Label>
                          <Input
                            value={editingPart.image || ''}
                            onChange={e => setEditingPart({
                              ...editingPart,
                              image: e.target.value
                            })}
                          />
                        </div>
                        <div>
                          <Label>Seçenekler</Label>
                          {editingPart.choices?.map((choice, index) => (
                            <div key={index} className="space-y-2 mt-2">
                              <Input
                                value={choice.text}
                                onChange={e => {
                                  const newChoices = [...(editingPart.choices || [])];
                                  newChoices[index] = {
                                    ...choice,
                                    text: e.target.value
                                  };
                                  setEditingPart({
                                    ...editingPart,
                                    choices: newChoices
                                  });
                                }}
                                placeholder="Seçenek metni"
                              />
                              <Input
                                value={choice.consequence || ''}
                                onChange={e => {
                                  const newChoices = [...(editingPart.choices || [])];
                                  newChoices[index] = {
                                    ...choice,
                                    consequence: e.target.value
                                  };
                                  setEditingPart({
                                    ...editingPart,
                                    choices: newChoices
                                  });
                                }}
                                placeholder="Sonuç"
                              />
                              <div className="grid grid-cols-2 gap-2">
                                <Input
                                  type="number"
                                  value={choice.score?.analysis || 0}
                                  onChange={e => {
                                    const newChoices = [...(editingPart.choices || [])];
                                    newChoices[index] = {
                                      ...choice,
                                      score: {
                                        ...choice.score,
                                        analysis: parseInt(e.target.value)
                                      }
                                    };
                                    setEditingPart({
                                      ...editingPart,
                                      choices: newChoices
                                    });
                                  }}
                                  placeholder="Analiz puanı"
                                />
                                <Input
                                  type="number"
                                  value={choice.score?.communication || 0}
                                  onChange={e => {
                                    const newChoices = [...(editingPart.choices || [])];
                                    newChoices[index] = {
                                      ...choice,
                                      score: {
                                        ...choice.score,
                                        communication: parseInt(e.target.value)
                                      }
                                    };
                                    setEditingPart({
                                      ...editingPart,
                                      choices: newChoices
                                    });
                                  }}
                                  placeholder="İletişim puanı"
                                />
                              </div>
                              <Button
                                variant="destructive"
                                onClick={() => {
                                  const newChoices = editingPart.choices?.filter((_, i) => i !== index);
                                  setEditingPart({
                                    ...editingPart,
                                    choices: newChoices
                                  });
                                }}
                              >
                                Seçeneği Sil
                              </Button>
                            </div>
                          ))}
                          <Button
                            className="mt-2"
                            onClick={() => {
                              const newChoice: StoryChoice = {
                                text: '',
                                consequence: '',
                                score: {
                                  analysis: 0,
                                  communication: 0
                                }
                              };
                              setEditingPart({
                                ...editingPart,
                                choices: [...(editingPart.choices || []), newChoice]
                              });
                            }}
                          >
                            Seçenek Ekle
                          </Button>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => setEditingPart(null)}
                          >
                            İptal
                          </Button>
                          <Button onClick={handleSave}>
                            Kaydet
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}