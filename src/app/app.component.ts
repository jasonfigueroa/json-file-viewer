import { Component } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'JSON File Viewer';

  public cities: City[] = [];

  onSearchSubmitted(message: string): void {
    console.log(message);
  }

}
