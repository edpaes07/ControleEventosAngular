import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.component.html',
  styleUrls: ['./create-evento.component.css']
})
export class CreateEventoComponent implements OnInit {

  constructor() { }

  eventoForm = new FormGroup({
    nome: new FormControl(''),                 //
    idCategoriaEvento: new FormControl(''),    //
    dataHoraInicio: new FormControl(''),      //
    dataHoraFim: new FormControl(''),
    local: new FormControl(''),             //
    descricao: new FormControl(''),          //
    vagas: new FormControl(''),            //
  });


  ngOnInit(): void {
  }
}
