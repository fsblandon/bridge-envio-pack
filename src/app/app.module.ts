import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmpresaMensajeriaComponent } from './abstracta/empresa-mensajeria/empresa-mensajeria.component';

import { AppComponent } from './app.component';
import { EnvioAireComponent } from './implementaciones/envio-aire/envio-aire.component';
import { EnvioMarComponent } from './implementaciones/envio-mar/envio-mar.component';
import { EuroTransportComponent } from './herencia/euro-transport/euro-transport.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaMensajeriaComponent,
    EnvioAireComponent,
    EnvioMarComponent,
    EuroTransportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
