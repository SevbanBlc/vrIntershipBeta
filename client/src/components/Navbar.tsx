import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Loader2, LogOut } from 'lucide-react';

export function Navbar() {
  const { user, logoutMutation } = useAuth();

  if (!user) return null;

  return (
    <div className="w-full bg-white shadow-sm py-3 px-5 flex justify-between items-center">
      <div className="font-bold text-lg text-gray-800">VRIntership <sub>Beta<sub/></div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600">
          {user.name || user.username}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          {logoutMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Çıkış yapılıyor
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Çıkış Yap
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
