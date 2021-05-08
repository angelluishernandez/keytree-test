export interface UserRepo {
  clone_url: string;
  download_url: string;
  description: string;
  private: boolean;
  created_at: string;
  updated_at: string;
  html_url: string;
  stargazers_count: number;
  name: string;
  git_url: string;
}
