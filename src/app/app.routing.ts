import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const appRoutes: Routes = [
  {
    path: 'dummy',
    component: DummyComponent

  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);