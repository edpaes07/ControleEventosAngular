import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCategoriaComponent } from './details-categoria.component';

describe('DetailsCategoriaComponent', () => {
  let component: DetailsCategoriaComponent;
  let fixture: ComponentFixture<DetailsCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
