import { Component, OnInit, EventEmitter , Output, Input} from '@angular/core';
import { Car } from '../../../../Server/Model/nCar';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CarrosDispComponent } from '../carros-disp/carros-disp.component';
//import { alerts } from '../../Services/alerts.service'

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {


constructor(private apiService: ApiService) { }

  a = false;
  show = true;

  ngOnInit() { } ;



  onSubmit(nCar) {
  if(
    nCar.CodigoAresSun === ' ' ||
    nCar.CodMarca === ' ' ||
    nCar.Modelo === ' ' ||
    nCar.Ano === ' ' ||
    nCar.Color === ' ' ||
    nCar.Placa === ' ' ||
    nCar.SerieMotor === ' ' ||
    nCar.VIM === ' ' ||
    nCar.Cilindraje === ' ' ||
    nCar.FechaDeMatricula === ' ' ||
    nCar.CodEnc === ' ' ||
    nCar.KmActual === ' ' ||
    nCar.Ubicacion === ' '
  ) {
    this.a = !this.a;
  } else {
  this.apiService.postCar(nCar)
  .subscribe( data => {alert(nCar);
  this.ngOnInit();
  });
  }//fin del else

}
}
