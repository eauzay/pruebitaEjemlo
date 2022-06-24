import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BookService } from './services/book.service';
import { RolesComponent } from './roles/roles.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
