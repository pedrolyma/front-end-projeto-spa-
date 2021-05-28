import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  formulario = this.fb.group({
    name: ['', [Validators.required]],
    email: [''],
    contato: [''],
    data: [''],
    foto: ['']
  });

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<UsuarioCreateComponent>) { }

  ngOnInit(): void {

  }

  createUsuario(): void {
     this.usuarioService.create(this.formulario.value).subscribe(() => {
     this.usuarioService.showMessage('Usuario Criado com Sucesso')
     this.router.navigate(['/usuarios'])
  });
}
  cancel(): void {
     this.router.navigate(['/usuarios']);
  }

}
