
import { FolderData, CaseStudy } from './types';

/**
 * 🛠️ ASSET CONFIGURATION:
 * Images are now loaded relatively from the /assets folder.
 * Simply ensure your GitHub repository has a folder named 'assets' 
 * containing your image files (e.g., assets/hero-wezzcoast.jpg).
 */
const ASSETS_URL = './assets';

export const FOLDERS: FolderData[] = [
  {
    id: 'f1',
    title: 'Graphic Design',
    description: 'Selected branding work and visual systems.',
    path: '/graphic-design',
    color: 'bg-f1 text-white',
    index: 1,
    tabPosition: 'left'
  },
  {
    id: 'f2',
    title: 'Sketches',
    description: 'Stories which couldn’t be told in words.',
    path: '/sketches',
    color: 'bg-f2 text-white',
    index: 2,
    tabPosition: 'center-left'
  },
  {
    id: 'f3',
    title: 'Poetry',
    description: 'From deepest thoughts to the simplest of lines.',
    path: '/poetry',
    color: 'bg-f3 text-primary-text',
    index: 3,
    tabPosition: 'center-right'
  },
  {
    id: 'f4',
    title: 'Experiments',
    description: 'Electronics and Computers things.',
    path: '/experiments',
    color: 'bg-f4 text-white',
    index: 4,
    tabPosition: 'right'
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'admin-wood': {
    id: 'admin-wood',
    title: 'Admin Wood',
    meta: 'Brand Identity · Visual Language',
    description: 'A study in organic textures and minimalist typography for a premium woodworking studio.',
    heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1974&auto=format&fit=crop'
    ],
    previewPages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop'
    ],
    pdfLink: '#'
  },
  'wezzcoast': {
    id: 'wezzcoast',
    title: 'Wezzcoast Socials',
    meta: 'Social Branding · Strategy',
    description: 'Defining the visual rhythm and tone for an emerging coastal lifestyle brand across social platforms.',
    heroImage: `${ASSETS_URL}/hero-wezzcoast.jpg`, 
    images: [
      `${ASSETS_URL}/design-portrait-1.jpg`,
      `${ASSETS_URL}/design-portrait-2.jpg`,
      `${ASSETS_URL}/design-portrait-3.jpg`,
      `${ASSETS_URL}/design-portrait-4.jpg`
    ],
    previewPages: [
      `${ASSETS_URL}/guidelines-page-1.jpg`,
      `${ASSETS_URL}/guidelines-page-2.jpg`,
      `${ASSETS_URL}/guidelines-page-3.jpg`,
      `${ASSETS_URL}/guidelines-page-4.jpg`,
      `${ASSETS_URL}/guidelines-page-5.jpg`
    ],
    pdfLink: `${ASSETS_URL}/wezzcoast-full-guidelines.pdf`
  }
};
