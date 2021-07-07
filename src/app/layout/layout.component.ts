import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/data-storage/pokemon-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() urlBg : string;
  @Input() colorBg : string;
  myStyles : object;

  constructor(public pokemonService: PokemonService) { 
    this.title = "My Title";
    this.description = "My Description";
    this.urlBg = "";
    this.colorBg = "";
    this.myStyles = {};
  }

  ngOnInit(): void {
    if(this.urlBg != ""){
      this.myStyles = {
        "background-image": `url(${this.urlBg})`
      }
    }
    else if(this.colorBg != ""){
      this.myStyles = {
        "background-color": this.colorBg
      }
    }
  }

}
