
export interface CaseStudy {
  id: string;
  title: string;
  meta: string;
  description: string;
  heroImage: string;
  images: string[];
  pdfLink?: string;
  previewPages?: string[]; // Visual previews of the guidelines document
}

export interface FolderData {
  id: string;
  title: string;
  description: string;
  path: string;
  color: string;
  index: number;
  tabPosition: 'left' | 'center-left' | 'center-right' | 'right';
}
