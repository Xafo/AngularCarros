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

carros$: CarrosModule[];
constructor(private apiService: ApiService) { }

ngOnInit() {
  return this.apiService.getCarros()
  .subscribe(data => {data=this.carros$ });
}


}
