import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USUARIOS } from '../mock-usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acceso: boolean = false;

  loginForm = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  comprobarLogin(){
    let name = this.loginForm.get('nombre').value;
    let password = this.loginForm.get('pass').value;

    for (let usuario of USUARIOS){
      if(name == usuario.nombre && password == usuario.contraseña){
        this.acceso = true;
      }
    }
    if(this.acceso){
      this.router.navigate(['infoGeneral']);
    } else alert("Usuario o contraseña incorrectos");
  }

}
