import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ProfileComponent } from './components/profile';
import { NoContentComponent } from './components/no-content';
import { CounterComponent } from './components/counter/counter-component';

import { DataResolver } from './app.resolver';
import {GithubProfileEntryComponent} from "./components/github-profile-entry/github-profile-entry.component";


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./components/+detail')
      .then((comp: any) => comp.default),
  },
  { path: 'profile/:id',      component: ProfileComponent },
  { path: 'github-profile/entry', component: GithubProfileEntryComponent},
  { path: 'counter', component: CounterComponent },
  { path: '**',    component: NoContentComponent },
];
