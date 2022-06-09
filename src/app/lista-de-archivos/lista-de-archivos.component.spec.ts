import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeArchivosComponent } from './lista-de-archivos.component';

describe('ListaDeArchivosComponent', () => {
  let component: ListaDeArchivosComponent;
  let fixture: ComponentFixture<ListaDeArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeArchivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
