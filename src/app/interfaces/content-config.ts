export interface ContentConfig {
  description?: string;
  image?: string;
  urlLink: string;
  createdAt?: string;
  updatedAt?: string;
  links?: Array<{
    label: string;
    url: string;
    isDownload?: boolean;
    isEmail?: boolean;
  }>;
  hireable?: boolean;
  isRepos?: boolean;
}
