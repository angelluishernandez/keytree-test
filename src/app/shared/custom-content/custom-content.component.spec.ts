import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomContentComponent } from './custom-content.component';

const expectedContent = {
  description: 'Some description',
  image: 'image.png',
  urlLink: 'somelink.com',
  links: [
    {
      label: 'link label 1',
      url: 'url',
      isDownload: false,
      isEmail: false,
    },
    {
      label: 'link label 2',
      url: 'url',
      isDownload: false,
      isEmail: false,
    },
  ],
  hireable: true,
  isRepos: true,
};

describe('CustomContentComponent', () => {
  let component: CustomContentComponent;
  let fixture: ComponentFixture<CustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContentComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                username: '',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as much links as the content has', () => {
    component.configuration = expectedContent;
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.content-links');
    expect(links.length).toBe(2);
  });

  it('should create a button to go for organizations when the parameter isRepos is true', () => {
    component.configuration = expectedContent;
    fixture.detectChanges();
    const repoLink = fixture.nativeElement.querySelectorAll('user-repos-link');
    expect(repoLink).toBeTruthy();
    const repoLinkButton = fixture.nativeElement.querySelector(
      '.content-button'
    );
    expect(repoLinkButton.textContent).toBe('Check user organizations');
  });
});
