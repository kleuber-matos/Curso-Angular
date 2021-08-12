import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReuniaoService } from './reuniao.service';

import { ReuniaoComponent } from './reuniao.component';

describe('ReuniaoComponent', () => {
  let component: ReuniaoComponent;
  let fixture: ComponentFixture<ReuniaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuniaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
