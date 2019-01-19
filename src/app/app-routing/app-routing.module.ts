import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {LayoutComponent} from '../layout/layout.component';
import {MainpaneComponent} from '../mainpane/mainpane.component';
export const routes: Routes = [
  // {path: '/', component: AppComponent },
  {path: 'main', component: MainpaneComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
