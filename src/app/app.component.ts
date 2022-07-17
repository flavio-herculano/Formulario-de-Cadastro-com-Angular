import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  constructor(private cepsService: CepServiceService){}
  
  consultaCep(valor:any, form:any){
    this.cepsService.buscar(valor).subscribe((dados) -> this.populaForm(dados, form))
  }
  populaForm(dados:any, form:any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logadouro,
      bairro: dados.bairro,
      cidade: dados.cidade,
      uf: dados.uf
    })
}

}
