import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string ='';
  constructor(private wsService: WebsocketService, private router : Router) { }

  ngOnInit(): void {
  }
  ingresar(){
    //console.log(this.nombre);
    this.wsService.loginWS(this.nombre)
      .then((resp)=>{
        this.router.navigateByUrl('/mensajes');
      })
  }
}
