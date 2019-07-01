import { Component, OnInit, Input } from '@angular/core';
import { City } from "../city";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  @Input() cities: City[];
  
  constructor() { }

  ngOnInit() {
  }
}
