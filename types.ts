
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'SDR Agencies' | 'Pipeline Gen' | 'Comparison' | 'Sales Tech' | 'Strategy';
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export type ViewMode = 'list' | 'detail';
