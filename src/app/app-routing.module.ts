import { SorteioComponent } from './sorteio/sorteio.component';
import { InitialComponent } from './initial/initial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tela-inicial', pathMatch: 'full' },
  { path: 'tela-inicial', component: InitialComponent },
  { path: 'tela-sorteio', component: SorteioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
