import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios!: Usuario[];
  displayedColumns = ['id', 'foto', 'name', 'email', 'contato', 'data', 'action'];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.lista().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
