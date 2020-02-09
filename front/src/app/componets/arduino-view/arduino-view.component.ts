import { Component, OnInit } from '@angular/core';
import { arduino } from 'src/app/models/arduino.model';
import { arduinoService as arduinoService } from 'src/app/services/arduino.service';

@Component({
  selector: 'app-arduino-view',
  templateUrl: './arduino-view.component.html',
  styleUrls: ['./arduino-view.component.scss']
})
export class ArduinoViewComponent implements OnInit {

  public arduinoArray: arduino[] = [];

  constructor(public arduinoServices: arduinoService) { }

  ngOnInit() {
    this.arduinoArray = [];
    this.getArduino();
    console.log(this.arduinoArray);
  }

  public async getArduino() {
    this.arduinoServices.getArduino().subscribe((data: any) => {
      this.arduinoArray = data;
    }, error => {
      //this.serviceErrors = error.error.error;
    }, () => { });
  
}

}