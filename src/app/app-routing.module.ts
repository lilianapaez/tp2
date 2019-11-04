import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericLandingComponent } from './views/generic-landing/generic-landing';


const routes: Routes = [
  {
    path: '',
    component: GenericLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
