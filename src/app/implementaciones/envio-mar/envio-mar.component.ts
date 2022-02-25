import { Component } from '@angular/core';
import { IEnvio } from 'src/app/model/envio.model';

@Component({
  selector: 'app-envio-mar',
  templateUrl: './envio-mar.component.html',
  styleUrls: ['./envio-mar.component.css']
})
//Concrete Implementor B
export class EnvioMarComponent implements IEnvio {

  constructor() { }

  procesarEnvio(): void {
    console.log('El paquete se ha cargado en el barco.');
  }

  enviar(): void {
    console.log('El paquete va navegando por el mar.');
  }

  procesarEntrega(): void {
    console.log('El paquete se ha descargado en el puerto.');
  }

}
