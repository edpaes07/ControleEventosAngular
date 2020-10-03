import { Component, OnInit } from '@angular/core';
import { ListaCategoriaService } from '../lista-categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-home-categoria',
  templateUrl: './home-categoria.component.html',
  styleUrls: ['./home-categoria.component.css']
})

export class HomeCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(public listaCategoriaService: ListaCategoriaService) { }

  ngOnInit() {

    this.listaCategoriaService.getAll().subscribe((data: Categoria[])=>{
      console.log(data);
      this.categorias = data;
    })
  }
}
