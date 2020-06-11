import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El título está definido', () => {
    const title = document.getElementById('title').innerHTML;

    expect(title).toBeDefined();
  });

  it('Nombre correcto de título', async(() => {
    const title = document.getElementById('title').innerHTML;

    expect(title).toContain('¡Error!');
  }));

  it('El botón para ir al home está definido', () => {
    const title = document.getElementById('idBtnHome').innerHTML;

    expect(title).toBeDefined();
  });
});
