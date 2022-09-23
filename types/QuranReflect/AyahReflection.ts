import ReflectionFilter from './ReflectionFilter';
import TrimmedCitationTexts from './TrimmedCitationTexts';

type AyahReflection = {
  id: number;
  body: string;
  likes: number;
  commentsCount: number;
  draft: boolean;
  publishedAt: string;
  createdAt: string;
  global: boolean;
  verified: boolean;
  hidden: boolean;
  editable: boolean;
  deletable: boolean;
  reportable: boolean;
  restorable: boolean;
  author: {
    id: number;
    username: string;
    name: string;
    verified: boolean;
    profileImg: string;
    followed: boolean;
    userType: string;
    originalProfileImg: string;
    displayName: string;
  };
  roomId?: number;
  group?: string;
  groupLink?: string;
  language: string;
  trimmedCitationTexts: TrimmedCitationTexts;
  filters: ReflectionFilter[];
};

export default AyahReflection;
