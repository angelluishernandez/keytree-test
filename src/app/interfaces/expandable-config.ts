import { ContentConfig } from './content-config';

export interface ExpandableItems {
  name: string;
  description?: string;
  counter?: {
    number: number;
    icon: string;
  };
  content: ContentConfig;
}
