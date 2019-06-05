import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrosModule } from 'src/app/models/Carros';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-carros-disp',
  templateUrl: './carros-disp.component.html',
  styleUrls: ['./carros-disp.component.css']
})
export class CarrosDispComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  cars: CarrosModule;

  ngOnInit() {
    this.getCar();
  }
  getCar(){
    this.apiService.getCar()
    .subscribe((cars: CarrosModule) => (this.cars = cars));
  }
}
