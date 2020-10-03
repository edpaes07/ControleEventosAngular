import { Component, OnInit } from '@angular/core';
import { CrudParticipanteService } from '../crud-participante.service';
import { Participante } from '../participante';

@Component({
  selector: 'app-home-participante',
  templateUrl: './home-participante.component.html',
  styleUrls: ['./home-participante.component.css']
})
export class HomeParticipanteComponent implements OnInit {

  participantes: Participante[];

  constructor(public crudService: CrudParticipanteService) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Participante[]) =>{
      console.log(data);
      this.participantes = data;
    })
  }

}
