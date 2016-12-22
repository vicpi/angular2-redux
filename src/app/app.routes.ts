import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ProfileComponent } from './components/profile';
import { NoContentComponent } from './components/no-content';
import { CounterComponent } from './components/counter/counter-component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./components/+detail')
      .then((comp: any) => comp.default),
  },
  { path: 'profile/:id',      component: ProfileComponent },
  { path: 'counter', component: CounterComponent },
  { path: '**',    component: NoContentComponent },
];
