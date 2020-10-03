import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsParticipanteComponent } from './details-participante.component';

describe('DetailsParticipanteComponent', () => {
  let component: DetailsParticipanteComponent;
  let fixture: ComponentFixture<DetailsParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsParticipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
