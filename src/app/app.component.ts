import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    navigator.geolocation.getCurrentPosition(this.showPosition);
    this.weatherService.getWeather().subscribe((res) => {
      console.log(res);
      this.weather = res;
    });

    console.log('Hapo vipi');
  }

  showPosition = (position) => {
    console.log(position);
    localStorage.setItem('position', position);
  }
}
