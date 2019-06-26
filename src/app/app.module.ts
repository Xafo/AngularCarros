import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatButtonModule, MatSelectModule,
  MatIconModule, MatToolbar, MatToolbarModule, MatMenu, MatMenuModule,
  MatTableModule, MatDividerModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ApiService } from './api.service';
import { IngresoComponent } from './ingreso/ingreso.component';
import { NewCarComponent } from './reporte/new-car/new-car.component';
import { CarrosDispComponent } from './reporte/carros-disp/carros-disp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReporteComponent,
    IngresoComponent,
    NewCarComponent,
    CarrosDispComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [RouterModule , ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
