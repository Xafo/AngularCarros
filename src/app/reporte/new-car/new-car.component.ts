import { Component, OnInit, EventEmitter , Output, Input} from '@angular/core';
import { Car } from '../../../../Server/Model/nCar';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CarrosDispComponent } from '../carros-disp/carros-disp.component';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {


constructor(private apiService: ApiService) { }

  show = true;

  ngOnInit() { };

  onSubmit(nCar) {
    console.log(nCar.value);
  this.apiService.postCar(nCar)
  .subscribe( data => {alert(nCar);
  this.ngOnInit();
  });
  }
}
