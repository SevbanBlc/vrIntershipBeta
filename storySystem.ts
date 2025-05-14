import { StoryState, StoryPath, StoryDimension, StoryPart } from './types';

export const storyStates: Record<string, StoryState> = {
  INITIAL: 'initial',
  IN_PROGRESS: 'in_progress',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

export const storyPaths: Record<string, StoryPath> = {
  frontend: {
    id: 'frontend',
    requiredScore: {
      analysis: 25,
      communication: 30
    },
    consequences: {
      success: 'Başarılı bir Frontend Geliştirici olarak kariyerine başlıyorsun!',
      failure: 'Frontend Geliştirici rolü için daha fazla deneyim kazanman gerekiyor.'
    }
  },
  backend: {
    id: 'backend',
    requiredScore: {
      analysis: 35,
      communication: 25
    },
    consequences: {
      success: 'Başarılı bir Backend Geliştirici olarak kariyerine başlıyorsun!',
      failure: 'Backend Geliştirici rolü için daha fazla deneyim kazanman gerekiyor.'
    }
  },
  database: {
    id: 'database',
    requiredScore: {
      analysis: 40,
      communication: 20
    },
    consequences: {
      success: 'Başarılı bir Veritabanı Uzmanı olarak kariyerine başlıyorsun!',
      failure: 'Veritabanı Uzmanı rolü için daha fazla teknik bilgi edinmen gerekiyor.'
    }
  },
  security: {
    id: 'security',
    requiredScore: {
      analysis: 40,
      communication: 25
    },
    consequences: {
      success: 'Başarılı bir Siber Güvenlik Uzmanı olarak kariyerine başlıyorsun!',
      failure: 'Siber Güvenlik Uzmanı rolü için daha fazla analitik beceri geliştirmen gerekiyor.'
    }
  },
  devops: {
    id: 'devops',
    requiredScore: {
      analysis: 35,
      communication: 30
    },
    consequences: {
      success: 'Başarılı bir DevOps Mühendisi olarak kariyerine başlıyorsun!',
      failure: 'DevOps Mühendisi rolü için daha fazla sistem yönetimi deneyimi edinmen gerekiyor.'
    }
  },
  gamedev: {
    id: 'gamedev',
    requiredScore: {
      analysis: 30,
      communication: 30
    },
    consequences: {
      success: 'Başarılı bir Oyun Geliştiricisi olarak kariyerine başlıyorsun!',
      failure: 'Oyun Geliştiricisi rolü için daha fazla yaratıcı ve teknik beceri geliştirmen gerekiyor.'
    }
  },
  datascience: {
    id: 'datascience',
    requiredScore: {
      analysis: 45,
      communication: 25
    },
    consequences: {
      success: 'Başarılı bir Veri Bilimci olarak kariyerine başlıyorsun!',
      failure: 'Veri Bilimci rolü için daha fazla analitik ve istatistiksel beceri geliştirmen gerekiyor.'
    }
  },
  firstday: {
    id: 'firstday',
    requiredScore: {
      analysis: 20,
      communication: 20
    },
    consequences: {
      success: 'İlk gününü başarıyla tamamladın!',
      failure: 'İlk gününde bazı sorunlar yaşadın. Tekrar denemelisin.'
    }
  }
};

export const storyDimensions: Record<string, StoryDimension> = {
  // Frontend dimensions
  frontend_intro: {
    id: 'frontend_intro',
    title: 'Frontend Deneyimi Başlangıç',
    transitions: ['frontend_design', 'frontend_javascript'],
    requirements: null,
    state: storyStates.INITIAL
  },
  frontend_design: {
    id: 'frontend_design',
    title: 'UI Tasarımı',
    transitions: ['frontend_success'],
    requirements: {
      previousDimension: 'frontend_intro',
      minimumScore: {
        analysis: 3
      }
    },
    state: storyStates.IN_PROGRESS
  },
  frontend_javascript: {
    id: 'frontend_javascript',
    title: 'JavaScript Geliştirme',
    transitions: ['frontend_success'],
    requirements: {
      previousDimension: 'frontend_intro'
    },
    state: storyStates.IN_PROGRESS
  },
  
  // Backend dimensions
  backend_intro: {
    id: 'backend_intro',
    title: 'Backend Deneyimi Başlangıç',
    transitions: ['backend_nodejs', 'backend_java'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // Database dimensions
  database_intro: {
    id: 'database_intro',
    title: 'Veritabanı Deneyimi Başlangıç',
    transitions: ['database_optimization', 'database_schema'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // Security dimensions
  security_intro: {
    id: 'security_intro',
    title: 'Güvenlik Deneyimi Başlangıç',
    transitions: ['security_scan', 'security_pentest'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // DevOps dimensions
  devops_intro: {
    id: 'devops_intro',
    title: 'DevOps Deneyimi Başlangıç',
    transitions: ['devops_cicd', 'devops_containers'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // Game Dev dimensions
  gamedev_intro: {
    id: 'gamedev_intro',
    title: 'Oyun Geliştirme Deneyimi Başlangıç',
    transitions: ['gamedev_unity', 'gamedev_unreal'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // Data Science dimensions
  data_lab: {
    id: 'data_lab',
    title: 'Veri Laboratuvarı',
    transitions: ['tool_selection', 'team_interaction'],
    requirements: null,
    state: storyStates.INITIAL
  },
  
  // First Day dimensions
 

export const canTransition = (
  currentDimension: string,
  nextDimension: string,
  scores: { analysis: number; communication: number }
): boolean => {
  const dimension = storyDimensions[nextDimension];
  
  if (!dimension) return false;
  
  if (!dimension.requirements) return true;
  
  if (
    dimension.requirements.previousDimension &&
    dimension.requirements.previousDimension !== currentDimension
  ) {
    return false;
  }
  
  if (dimension.requirements.minimumScore) {
    const { analysis, communication } = dimension.requirements.minimumScore;
    
    if (
      (analysis !== undefined && scores.analysis < analysis) ||
      (communication !== undefined && scores.communication < communication)
    ) {
      return false;
    }
  }
  
  return true;
};

export const getNextStoryPart = (
  storyParts: StoryPart[],
  currentDimension: string
): StoryPart | undefined => {
  return storyParts.find(part => part.dimension === currentDimension);
};