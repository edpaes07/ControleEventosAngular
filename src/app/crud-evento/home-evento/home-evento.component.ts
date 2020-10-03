import { Component, OnInit } from '@angular/core';
import { CrudEventoService } from '../crud-evento.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-home-evento',
  templateUrl: './home-evento.component.html',
  styleUrls: ['./home-evento.component.css']
})

export class HomeEventoComponent implements OnInit {

  evento: Evento[] = [];
  displayedColumns = ['idEvento', 'name'];
  constructor(public crudEventoService: CrudEventoService) { }

  ngOnInit(): void {
    this.crudEventoService.getAll().subscribe((data: Evento[]) => {
      console.log(data);
      this.evento = data;
    });
  }


}
