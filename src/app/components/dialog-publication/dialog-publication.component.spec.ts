import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPublicationComponent } from './dialog-publication.component';

describe('DialogPublicationComponent', () => {
  let component: DialogPublicationComponent;
  let fixture: ComponentFixture<DialogPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
