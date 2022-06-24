import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component"
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BookService } from '../../services/book.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Book } from '../../models/book.model';

const listBooks: Book[] = [
    {
        name: '',
        author: '',
        isbn: '',
        price: 15,
        amount: 1
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 8,
        amount: 3
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 20,
        amount: 5
    }
]

describe('Cart component', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    //beforeEach de configuraciones
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CartComponent],
            providers: [BookService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    })

    //Instanciar el componente
    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);  //extraigo el componente
        component = fixture.componentInstance; // instancio el componente
        fixture.detectChanges();   // entra por el ngOnInit
    })

    it('should create', () => {
        expect(component).toBeTruthy() //verifica que el componente se haya instanciado correctamente
        //expect(component).not.toBeTruthy() //para negar la instanciacion del componente
    })

    //     public getTotalPrice(listCartBook: Book[]): number {
    //     let totalPrice = 0;
    //     listCartBook.forEach((book: Book) => {
    //         totalPrice += book.amount * book.price;
    //     });
    //     return totalPrice;
    // }

    it('getTotalPrice returns an amount', () => {
        const total = component.getTotalPrice(listBooks);
        expect(total).toBeGreaterThan(0);
        expect(total).not.toBeNull();
        expect(total).not.toBe(0);
    })
})