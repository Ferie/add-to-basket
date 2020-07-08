// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { GoBackComponent } from './components/go-back/go-back.component';
// Pipes
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ListingPageComponent,
        DetailsPageComponent,
        ProductCardComponent,
        ProductDetailsComponent,
        HeaderComponent,
        GoBackComponent,
        OrderByPipe
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
