import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderService } from '../services/order.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewOrdersComponent } from './view-orders.component';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[OrderService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
