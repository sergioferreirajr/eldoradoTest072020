import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedeviceComponent } from './deletedevice.component';

describe('DeletedeviceComponent', () => {
  let component: DeletedeviceComponent;
  let fixture: ComponentFixture<DeletedeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
