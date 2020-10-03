import { TestBed } from '@angular/core/testing';

import { CrudEventoService } from './crud-evento.service';

describe('CrudEventoService', () => {
  let service: CrudEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
