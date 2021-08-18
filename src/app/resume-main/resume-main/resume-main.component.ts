import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

export interface PersonalInfoChipItem {
  icon?: string;
  title: string;
  value: string;
  isLink?: boolean;
}

export interface SkillSet {
  type: string;
  skills: string[];
}

export interface WorkExperienceItem{
  duration: string;
  project: string;
  keypoints: string[];
  lastSection?: boolean;
  icon: string;
}

export interface EducationItem{
  education: string;
  place: string;
  score: string;
}

@Component({
  selector: 'app-resume-main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.scss']
})
export class ResumeMainComponent implements OnInit{

  public personalInfoChipItems: PersonalInfoChipItem[] = [];
  public skillSets: SkillSet[] = [];
  public workExperienceItems: WorkExperienceItem[] = [];
  public achievmentItems: string[] = [];
  public educationItems: EducationItem[] = [];
  public aboutMeItems: string[] = [];
  public personalInfoItems: string[] = [];
  public myDomain = 'My Domain';
  public myCompanyAndExperience = 'My Company(X years)';
  public myName = 'My Name';
  public myDesignation = 'My Designation';
  public myRole = 'Full Stack Developer';

  constructor() {
  }

  ngOnInit(): void {
    this.setPersonalInfoChipItems();
    this.setSkillSets();
    this.setWorkExperience();
    this.setAchievementItems();
    this.setEducationItems();
    this.setAboutMeItems();
    this.setPersonalInfoItems();
  }

  print(){
    window.print();
  }

  public setPersonalInfoChipItems() {
    this.personalInfoChipItems = [
      {
        title: 'Mail',
        icon: 'email',
        value: 'email@email.com',
        isLink: true
      },
      {
        title: 'Phone',
        icon: 'phone',
        value: '123456789'
      },
      {
        title: 'City',
        icon: 'location_on',
        value: 'My City'
      },
      {
        title: 'LinkedIn',
        icon: 'perm_identity',
        value: 'www.linkedin.com/1234567890/1234',
        isLink: true
      }
    ];
    this.personalInfoChipItems = [...this.personalInfoChipItems];
  }

  public setSkillSets() {
    this.skillSets = [
      {
        type: 'Web Technologies',
        skills: ['HTML 5',  'jQuery', 'CSS', 'Javascript', 'Typescript', 'JSON', 'REST API']
      },
      {
        type: 'Frameworks',
        skills: ['Angular', 'Ionic 4', 'React']
      },
      {
        type: 'Front End Development',
        skills: ['npm', 'Node', 'Bootstrap', 'Redux','Material', 'rxJS','Karma','Jasmine']
      },
      {
        type: 'Programming Languages',
        skills: ['JAVA', 'Matlab', 'Python', 'C', 'C++']
      },
      {
        type: 'Database & Server Side',
        skills: ['MySQL', 'PHP', 'Laravel']
      },
      {
        type: 'Methods',
        skills: ['Agile', 'Scrum']
      },
      {
        type: 'Software Development Tools',
        skills: ['GIT','IntelliJ', 'Visual Studio']
      }
    ];
    this.skillSets = [...this.skillSets];
  }

  public setWorkExperience() {
    this.workExperienceItems = [
      {
        duration: 'Sept 2020 - Present',
        project: 'My Project 3',
        icon: 'book_online',
        keypoints: [
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3',
          'This line will be a bullet point detailing an aspect of project 3'
        ]
      },
      {
        duration: 'May 2020 - Sept 2020',
        project: 'My Project 2',
        icon: 'list_alt',
        keypoints: [
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
          'This line will be a bullet point detailing an aspect of project 2',
        ]
      },
      {
        duration: 'October 2019 - May 2020',
        project: 'My Project 1',
        icon: 'qr_code',
        keypoints: [
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
          'This line will be a bullet point detailing an aspect of project 1',
        ]
      },
      {
        duration: 'January 2019 - October 2019',
        project: 'My Project 0',
        icon: 'qr_code',
        keypoints: [
          'This line will be a bullet point detailing an aspect of project 0',
          'This line will be a bullet point detailing an aspect of project 0',
          'This line will be a bullet point detailing an aspect of project 0',
          'This line will be a bullet point detailing an aspect of project 0',
          'This line will be a bullet point detailing an aspect of project 0',
        ],
        lastSection: true
      }
    ];
  }

  public setAchievementItems(){
    this.achievmentItems = [
      'This is a bullet point on my achievements',
      'This is a bullet point on my achievements',
      'This is a bullet point on my achievements',
    ];
  }

  public setEducationItems(){
    this.educationItems = [
      {
        education: 'Bachelors in ABCD Engg.',
        place: 'ABCD College of Engineering',
        score: '9/10'
      },
      {
        education: 'Secondary Education',
        place: 'ABCD Intermediate College',
        score: '97/100'
      },
      {
        education: 'Primary Education',
        place: 'ABCD School',
        score: '9/10'
      }
    ];
  }

  public setAboutMeItems(){
    this.aboutMeItems = [
      'This is a bullet point on my hobbies',
      'This is a bullet point on my hobbies',
    ];
  }

  public setPersonalInfoItems(){
    this.personalInfoItems = [
      'Ambitious', 'Strategic', 'Mentoring', 'Troubleshooting', 'Presentation Skills', 'Responsibility', 'Learning Potential', 'Quick Thinking', 'Resourceful', 'Dependable'
    ];
  }

  public navigateToLink(link: string){
    window.open(link);
  }
}
