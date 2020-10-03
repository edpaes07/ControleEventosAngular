import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipanteComponent } from './create-participante.component';

describe('CreateParticipanteComponent', () => {
  let component: CreateParticipanteComponent;
  let fixture: ComponentFixture<CreateParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParticipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
