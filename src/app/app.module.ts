import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./features/footer/footer.component";
import { HeaderComponent } from "./features/header/header.component";
import { AboutModule } from './components/about/about.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FooterComponent,
        HeaderComponent,
    ]
})
export class AppModule { }
