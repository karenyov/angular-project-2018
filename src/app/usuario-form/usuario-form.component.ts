import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.usuarios = this.usuarioService.listar();
  }

  adicionar(frm: FormControl) {
    this.usuarioService.adicionar(frm.value);
    frm.reset(); //limpa os campos do form
    this.consultar();
  }

  deletar(id) {
    this.usuarioService.deletar(id);
    this.consultar();
  }

}
