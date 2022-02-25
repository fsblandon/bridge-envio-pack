import { Component, OnInit } from '@angular/core';
import { EmpresaMensajeriaComponent } from './abstracta/empresa-mensajeria/empresa-mensajeria.component';
import { EuroTransportComponent } from './herencia/euro-transport/euro-transport.component';
import { EnvioAireComponent } from './implementaciones/envio-aire/envio-aire.component';
import { EnvioMarComponent } from './implementaciones/envio-mar/envio-mar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'envio-pack-bridge';

  //Empresa del mensajero
  mensajero: EmpresaMensajeriaComponent = new EuroTransportComponent();

  ngOnInit(): void {
    //Enviamos via por defecto -> AEREA
    this.mensajero.recogerPaquete()
    this.mensajero.enviarPaquete();
    this.mensajero.entregarPaquete();

    //ahora le decimos a la empresa que lo envie via MAR
    this.mensajero.setEnvio(new EnvioMarComponent());

    this.mensajero.recogerPaquete();
    this.mensajero.enviarPaquete();
    this.mensajero.entregarPaquete();
  }

}
