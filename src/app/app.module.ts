import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonService } from 'src/data-storage/pokemon-service';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
