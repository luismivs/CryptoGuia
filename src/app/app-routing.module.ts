import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { ValorActualComponent } from './valor-actual/valor-actual.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'infoGeneral', component: InfoGeneralComponent },
  { path: 'valorActual', component: ValorActualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
