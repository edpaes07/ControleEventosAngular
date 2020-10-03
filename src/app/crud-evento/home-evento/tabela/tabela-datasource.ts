import { OnInit } from '@angular/core';
import { Evento } from './../../evento';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { CrudEventoService } from '../../crud-evento.service';


export class TabelaDataSource extends DataSource<Evento> {
  data: Evento[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private crudEventoService: CrudEventoService) {
    super();
    this.crudEventoService.getAll().subscribe((data: Evento[]) => {
      this.data = data;
    });
  }

  connect(): Observable<Evento[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Evento[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Evento[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.idEvento, +b.idEvento, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

var delay = 300;
setTimeout(window.onload = function () {
  document.getElementById("evento").click();

}, delay);


