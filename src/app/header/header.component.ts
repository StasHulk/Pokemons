import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() { 
    this.title = "My Title!";
    this.description = "My desciption."
  }

  ngOnInit(): void {
  }

}
