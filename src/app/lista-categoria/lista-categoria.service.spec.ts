import { TestBed } from '@angular/core/testing';

import { ListaCategoriaService } from './lista-categoria.service';

describe('ListaCategoriaService', () => {
  let service: ListaCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
