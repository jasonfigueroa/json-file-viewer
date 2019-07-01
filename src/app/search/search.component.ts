import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() cities: City[];

  @Output() searchSubmitted: EventEmitter<string> = new EventEmitter<string>();


  city: string = '';
  country: string = '';
  errorMessage: string = '';

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  getCities(): void {
    this.cityService.getCityByNameAndCountry(this.city, this.country).subscribe(
      cities => {
        console.log(cities);
        this.cities = cities;
      },
      error => this.errorMessage = <any>error);
      
      this.city = '';
      this.country = '';

      this.searchSubmitted.emit('Search was submitted!');
    }

}
