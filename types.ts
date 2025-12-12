import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  icon?: LucideIcon;
  logo?: string;
  theme: {
    bgGradient: string;
    textColor: string;
    accentColor: string;
    titleColor?: string;
  };
  stats?: {
    label: string;
    value: string;
  }
}