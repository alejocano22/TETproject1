import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  
  public dataArray: Data[] = [];

  constructor(public dataServices: DataService) { }

  ngOnInit() {
    this.getData();
  }

  public async getData(){
    this.dataArray = await this.dataServices.getData();
    console.log(this.dataArray);
  }

}
