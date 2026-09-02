import type { ComponentType } from "react";

export interface ServiceCardProps {

    
  id: number | string;
  icon: ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string }>;
  title: string;
  description: string;
  tags: string[];
  linkUrl: string;
  highlightWords?: string[];

}