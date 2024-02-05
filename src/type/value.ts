import { JobType, PartType } from "@type/enums";
import { IconKeyType, KeywordImageType } from "@type/key";

export type PeerGradeTest = {
  text: string;
  icon: IconKeyType;
}

export type PeerTestText = {
  title: string;
  description: string;
}

export type PeerKeywordCard = {
  image: KeywordImageType;
  caption?: string;
  title?: string;
  content: string;
}

export type KeywordResultList = {
  keywords: string[];
  icons: IconKeyType[];
}

export type JobList = {
  key: JobType;
  text: string;
}
export type PartList = {
  key: PartType;
  text: string;
}