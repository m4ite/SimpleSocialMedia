import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCpfComponent } from './manage-cpf.component';

describe('ManageCpfComponent', () => {
  let component: ManageCpfComponent;
  let fixture: ComponentFixture<ManageCpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCpfComponent]
    });
    fixture = TestBed.createComponent(ManageCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
