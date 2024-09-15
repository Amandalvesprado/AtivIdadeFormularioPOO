import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcMediaComponent,
    CalculadoraComponent,
    CadastroClienteComponent,
    ApoliceSeguroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
