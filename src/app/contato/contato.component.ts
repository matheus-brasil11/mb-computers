import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
  }
  
  notificarFormularioEnviado() {
    this.notificacaoService.notificar("O Formulário foi enviado =D")
  }

  enviarFormulario() {
    this.notificarFormularioEnviado()
    this.formContato.reset()
    this.router.navigate(['produtos'])
  }
 
}
