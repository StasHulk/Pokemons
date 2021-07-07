import { Component } from '@angular/core';
import { PokemonService } from 'src/data-storage/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokemonsSCSS';

  constructor(){
  }
}
