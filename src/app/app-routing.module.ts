import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbersComponent } from './barbers/barbers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Book Now', component: BarbersComponent },
  
]; // all components is routed here

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
