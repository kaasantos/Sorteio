import { SorteioComponent } from './sorteio/sorteio.component';
import { InitialComponent } from './initial/initial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'inicio', component: InitialComponent },
  { path: 'sorteio', component: SorteioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
