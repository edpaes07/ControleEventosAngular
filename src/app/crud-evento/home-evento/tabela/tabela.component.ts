import { Evento } from './../../evento';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaDataSource } from './tabela-datasource';
import { CrudEventoService } from '../../crud-evento.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Evento>;
  dataSource: TabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id'];

  currentDate: Date;
  evento: Evento[] = [];

  ngOnInit() {
    this.dataSource = new TabelaDataSource(this.crudEventoService);
    this.currentDate = new Date();
  }

  constructor(public crudEventoService: CrudEventoService) {
  }

  acaoCancelar(idEvento:number){
    this.crudEventoService.cancelarEvento(idEvento)
    .pipe().subscribe();
  }

  acaoIniciar(idEvento:number){
    this.crudEventoService.iniciarEvento(idEvento)
    .pipe().subscribe();
  }

  acaoConcluir(idEvento:number){
    this.crudEventoService.concluirEvento(idEvento)
    .pipe().subscribe();
  }

  getStatus(id){
    if(id === 1){ return 'Inscrições abertas'}
    if(id === 2){ return 'Em andamento'}
    if(id === 3){ return 'Finalizado'}
    if(id === 4){ return 'Cancelado'}
  }

  getCategoria(id){
    if(id === 1) {return 'Backend'}
    if(id === 2) {return 'Frontend'}
    if(id === 3) {return 'Mobile'}
    if(id === 4) {return 'Cloud & DevOps'}
    if(id === 5) {return 'Modern Workplaces'}
    if(id === 6) {return 'UI/UX'}
    if(id === 7) {return 'Data & Analytics'}
    if(id === 8) {return 'Agilidade & Qualidade '}
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
