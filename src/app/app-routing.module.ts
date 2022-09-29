import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home',component:HomeComponent},
  {path: 'map',component:MapComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
