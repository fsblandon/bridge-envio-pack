import { Component } from '@angular/core';
import { IEnvio } from 'src/app/model/envio.model';

@Component({
  selector: 'app-envio-aire',
  templateUrl: './envio-aire.component.html',
  styleUrls: ['./envio-aire.component.css']
})
//Concrete Implementor A
export class EnvioAireComponent implements IEnvio {

  constructor() { }

  procesarEnvio(): void {
    console.log('El paquete se ha cargado en el avion.');
  }

  enviar(): void {
    console.log('El paquete va volando en el aire.');
  }

  procesarEntrega(): void {
    console.log('El paquete se ha descargado en el aeropuerto.');
  }

}
