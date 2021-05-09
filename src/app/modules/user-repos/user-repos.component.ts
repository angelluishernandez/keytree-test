import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpandableItems } from 'src/app/interfaces/expandable-config';
import { UserRepo } from 'src/app/interfaces/user-repo';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
  expandableItems: Array<ExpandableItems> = [];
  expandableDescription = 'User repos';

  userRepos: Array<UserRepo> = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userRepos = this.activatedRoute?.snapshot?.data?.userRepos;
    this.formatUserReposToConfig(this.userRepos);
  }

  /**
   * This function will allow us to configure the expandable
   * component by sending formatted data it can understand
   *
   */

  formatUserReposToConfig(repos: Array<UserRepo>): void {
    repos?.map((repo) => {
      const newRepoConfig: ExpandableItems = {
        name: repo.name,
        description: repo.description,
        counter: {
          number: repo.stargazers_count,
          icon: 'star',
        },
        content: {
          urlLink: repo.html_url,
          createdAt: repo.created_at,
          isRepos: true,
          links: [
            {
              label: 'Download repo',
              url: repo.download_url,
              isDownload: true,
            },
            {
              label: 'Go to repo',
              url: repo.html_url,
            },
            { label: 'Git link', url: repo.git_url },
          ],
        },
      };
      this.expandableItems.push(newRepoConfig);
    });
  }
}
