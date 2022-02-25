import { Component } from '@angular/core';
import { EmpresaMensajeriaComponent } from 'src/app/abstracta/empresa-mensajeria/empresa-mensajeria.component';
import { EnvioAireComponent } from 'src/app/implementaciones/envio-aire/envio-aire.component';

@Component({
  selector: 'app-euro-transport',
  templateUrl: './euro-transport.component.html',
  styleUrls: ['./euro-transport.component.css']
})
//Refined Abstract
export class EuroTransportComponent extends EmpresaMensajeriaComponent {

  constructor() {
    let envioDefecto = new EnvioAireComponent();
    super(envioDefecto);
  }
}
