import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios = [];

  constructor() { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    let dados = [
      {id: 2, nome: "Maria"}, 
      {id: 3, nome: "José"}
    ];
    this.usuarios = dados;
  }

  adicionar(frm: FormControl) {    
    this.usuarios.push(frm.value);
    console.log(this.usuarios);
  }

}
