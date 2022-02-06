import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBoxComponent } from './shared/app-box/app-box.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { WalletComponent } from './pages/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBoxComponent,
    NotFoundComponent,
    HomeComponent,
    LinksComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
