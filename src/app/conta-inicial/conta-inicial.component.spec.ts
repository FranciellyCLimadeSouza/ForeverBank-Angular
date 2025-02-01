import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaInicialComponent } from './conta-inicial.component';

describe('ContaInicialComponent', () => {
  let component: ContaInicialComponent;
  let fixture: ComponentFixture<ContaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
