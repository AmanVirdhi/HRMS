import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpfComponent } from './epf.component';

describe('EpfComponent', () => {
  let component: EpfComponent;
  let fixture: ComponentFixture<EpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpfComponent]
    });
    fixture = TestBed.createComponent(EpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
