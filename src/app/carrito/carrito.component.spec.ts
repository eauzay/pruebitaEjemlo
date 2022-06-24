import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponent } from './carrito.component';
import { Book } from '../models/book.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const listBooks: Book[] = [
  {
    name: '',
    author: '',
    isbn: '',
    price: 2,
    amount: 5
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 4,
    amount: 2
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 3,
    amount: 7
  }
]
describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalPrice return an amount', () => {
    const total = component.getTotalPrice(listBooks);
    expect(total).toBeGreaterThan(0);
    expect(total).not.toBeNull();
  })


});
