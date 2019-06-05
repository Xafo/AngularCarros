import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  CarrosModule } from '../models/Carros';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {

constructor(private apiService: ApiService) {}

CShowD = true;

CDisp(){
  this.CShowD = !this.CShowD;
}

cars: CarrosModule;
ngOnInit() {

}

}
