import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParticipanteComponent } from './update-participante.component';

describe('UpdateParticipanteComponent', () => {
  let component: UpdateParticipanteComponent;
  let fixture: ComponentFixture<UpdateParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParticipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
