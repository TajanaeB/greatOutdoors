import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './log-in/sign-up/sign-up.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { EditProductComponent } from './product/list-products/edit-product/edit-product.component';
import { SideMenuComponent } from './product/side-menu/side-menu.component';


import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    ListProductsComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    SignUpComponent,
    EditProductComponent,
    SideMenuComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
