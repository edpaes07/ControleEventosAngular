import { TestBed } from '@angular/core/testing';

import { CrudParticipanteService } from './crud-participante.service';

describe('CrudParticipanteService', () => {
  let service: CrudParticipanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudParticipanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
