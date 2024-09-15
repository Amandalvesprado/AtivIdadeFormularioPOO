import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  clientes: Cliente[] = []; 
  cliente: Cliente = new Cliente(0, '', '', 0); 


  cadastrarCliente() {
    const novoCliente = { ...this.cliente };
    this.clientes.push(novoCliente);

    console.log('Cliente cadastrado:', novoCliente); 
    this.limparFormulario(); 
  }

  limparFormulario() {
    this.cliente = new Cliente(0, '', '', 0); 
  }
}
