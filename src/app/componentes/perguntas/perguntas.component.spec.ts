import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasComponent } from '../perguntas/perguntas.component';

describe('PerguntasComponent', () => {
  let component: PerguntasComponent;
  let fixture: ComponentFixture<PerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
