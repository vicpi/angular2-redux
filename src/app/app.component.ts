/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { NgRedux } from 'ng2-redux';
import reducer from './reducers';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./profile', 1]">
          Material UI
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./counter']">
          Ng2Redux
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./github-profile/entry']">
          Github Profile
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public ngRedux: NgRedux,
    public appState: AppState
  ) {
    const initialState = {};
    const middleware = [  ];
    ngRedux.configureStore(reducer, initialState, middleware);
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
