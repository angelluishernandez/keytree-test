import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpandableItems } from 'src/app/interfaces/expandable-config';
import { UserData } from 'src/app/interfaces/user-data';
import { UserOrganition } from 'src/app/interfaces/user-organition';

@Component({
  selector: 'app-user-orgs',
  templateUrl: './user-orgs.component.html',
  styleUrls: ['./user-orgs.component.scss'],
})
export class UserOrgsComponent implements OnInit {
  userData: UserData;
  userOrgs: Array<UserOrganition> = [];
  expandableItemsOrgs: Array<ExpandableItems> = [];
  expandableItemsUser: ExpandableItems | undefined;
  expandableDescriptionOrgs = 'User organizations';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.userData = this.activatedRoute?.snapshot?.data?.payload?.userData;
    this.userOrgs = this.activatedRoute?.snapshot?.data?.payload?.userOrgs;

    this.formatOrgsToConfig(this.userOrgs);
    this.formatUserDataToConfig();
  }

  /**
   * This function will allow us to configure the expandable
   * component by sending formatted data it can understand
   *
   */

  formatOrgsToConfig(orgs: Array<UserOrganition>): void {
    orgs?.map((org) => {
      const newOrgConfig: ExpandableItems = {
        name: org.login,
        description: org.description,
        content: {
          urlLink: org.url,
          image: org.avatar_url,
        },
      };
      this.expandableItemsOrgs.push(newOrgConfig);
    });
  }

  /**
   *
   */

  formatUserDataToConfig(): void {
    this.expandableItemsUser = {
      counter: {
        icon: 'group_add',
        number: this.userData?.followers,
      },
      name: this.userData?.login,
      content: {
        description: this.userData?.bio,
        urlLink: this.userData?.html_url,
        image: this.userData?.avatar_url,
        hireable: this.userData?.hireable,
        links: [
          {
            label: 'Blog',
            url: this.userData?.blog,
          },
          {
            label: 'Github',
            url: this.userData?.html_url,
          },
          {
            label: 'Email',
            url: this.userData?.email,
            isEmail: true,
          },
        ],
      },
    };
  }
}
