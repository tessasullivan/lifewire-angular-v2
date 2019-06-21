import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import {MainPageComponent} from './main-page/main-page.component';

const appRoutes: Routes = [
  { 
    path: '',
    component: MainPageComponent
  },
  {
    path: 'dummy',
    component: DummyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);