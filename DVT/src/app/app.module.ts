import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MusicCartComponent } from './components/music-cart/music-cart.component';
import { ProductListComponent } from './components/music-cart/product-list/product-list.component';
import { FilterComponent } from './components/music-cart/filter/filter.component';
import { ProductItemComponent } from './components/music-cart/product-list/product-item/product-item.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {ModalServiceModule} from './services/modal-service.module';
import {MyModalComponent} from './my-modalcomponent';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MusicCartComponent,
    ProductListComponent,
    FilterComponent,
    ProductItemComponent,
    MyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
