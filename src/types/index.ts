export interface Project {
  id: number;
  title: string;
  url: string;
  repoUrl: string;
  imageUrl: string;
}

export interface SocialLink {
  icon: any; // FontAwesome icon
  url: string;
  label: string;
}

export interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export interface OrgRole {
    organization: string;
    role: string;
    date: string;
    description: string;
}