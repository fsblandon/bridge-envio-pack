import { Component, Inject } from '@angular/core';
import { IEnvio } from 'src/app/model/envio.model';

@Component({
  selector: 'app-empresa-mensajeria',
  templateUrl: './empresa-mensajeria.component.html',
  styleUrls: ['./empresa-mensajeria.component.scss']
})
//Abstract
export class EmpresaMensajeriaComponent {

  protected envio: IEnvio;

  constructor(@Inject(null) public _envio: IEnvio) {
    this.envio = _envio;
  }

  recogerPaquete(): void {
    console.log('Se ha recogido paquete.');
    this.envio.procesarEnvio();
  }

  enviarPaquete(): void {
    this.envio.enviar();
  }

  entregarPaquete(): void {
    this.envio.procesarEntrega();
    console.log('Se ha entregado el paquete.');
  }

  setEnvio(envio: IEnvio) {
    this.envio = envio;
  }

  getEnvio() {
    return this.envio;
  }

}
