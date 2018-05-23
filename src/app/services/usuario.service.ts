import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosUrl = 'http://localhost:8080/usuarios'; //URL PARA REQUISIÇÃO BACKEND
  usuarios = [
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" }
  ];

  constructor(private http: HttpClient) { }

  listar() {
    //return this.http.get<any[]>(this.usuariosUrl); SE TIVESSE USANDO BACKEND ELE FARIA A REQUISIÇÃO AQUII
    return this.usuarios;
  }

  adicionar(usuario: any) {
    //return this.http.post(this.usuariosUrl, item);
    this.usuarios.push(usuario);
  }
}
