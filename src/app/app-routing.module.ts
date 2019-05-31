import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/Home.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'reportes', component: ReporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
