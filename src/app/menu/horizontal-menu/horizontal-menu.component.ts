import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommonService } from 'src/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent {
  menuItems:any;
  userLogged:any;
  constructor(
    private menuService: MenuService,
    public commonService: CommonService,
    private router:Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login']);
  }
  onClick(data:any){
    
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.menuItems = [{
          displayName: 'Login',
          iconName: 'close',
          children: []
        },
        {
          displayName: 'First',
          iconName: 'close',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'become-angular-tailer'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
          ]
        },
        {
          displayName: 'Second',
          iconName: 'close',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'become-angular-tailer'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
          ]
        },
        {
          displayName: 'Third',
          iconName: 'close',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'become-angular-tailer'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
          ]
        },
        {
          displayName: 'Maleficent',
          disabled: true,
          iconName: 'close',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'become-angular-tailer'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
          ]
        }
    
      ];
    });
  }
}
