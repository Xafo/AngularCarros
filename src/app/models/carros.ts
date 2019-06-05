export class CarrosModule
{
CodigoAresSun: string;
CodMarca: number;
Modelo: string;
Ano: number;
Color: string;
Placa: string;
SerieMotor: string;
VIM: string;
Cilindraje: string;
FechaDeMatricula: string;
CodEnc: string;
KmActual: string;
Ubicacion: string;

constructor(CodigoAresSun: string,CodMarca: number,Modelo: string,Ano: number, Color: string, Placa: string,SerieMotor: string,VIM: string,Cilindraje: string,FechaDeMatricula: string,CodEnc: string,KmActual: string,Ubicacion: string){
    this.CodigoAresSun = CodigoAresSun;
    this.CodMarca = CodMarca;
    this.Modelo = Modelo;
    this.Ano = Ano;
    this.Color = Color;
    this.Placa = Placa;
    this.SerieMotor = SerieMotor;
    this.VIM = VIM;
    this.Cilindraje = Cilindraje;
    this.FechaDeMatricula = FechaDeMatricula;
    this.CodEnc = CodEnc;
    this.KmActual = KmActual;
    this.Ubicacion = Ubicacion;
  }
}
