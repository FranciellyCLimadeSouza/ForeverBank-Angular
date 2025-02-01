import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravcComponent } from './pravc.component';

describe('PravcComponent', () => {
  let component: PravcComponent;
  let fixture: ComponentFixture<PravcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PravcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PravcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
