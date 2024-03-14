import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "../../components/profile/profile.component";


export const ProfileRoutingModule: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutingModule),
  ],
})
export class ProfileModule {
}
