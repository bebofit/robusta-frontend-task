import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
  }
  title = 'task1';
  constructor( ) { }
  flag = false;
  data = {
    height: 1,
    width: 1
  };
  rows = []
  columns = []
  maincolr = "#fff"

  classtd = `border: 1px solid black;text-align: center; background: ${this.maincolr};`
  gridsize()
  {
    this.flag = true;
    console.log(this.data.height);
    this.rows = Array(this.data.width);
    for (let i = 0; i < this.data.width; i++) {
      this.rows[i] = Array(this.data.height);
      for (let j = 0; j < this.data.height; j++) {
        this.rows[i][j] = this.maincolr;
      }
    }
    // for (let i = 0; i < this.data.width; i++) {
    //   this.rows[i] = `background-color: ${this.maincolr}`
    // }
    // for (let j = 0; j < this.data.height; j++) {

    // }
  }
  oncolorpicked(event: Event, i,j)
  {
  this.rows[i][j] = event.target['value'];


  }

  maincolor( event: Event)
  {
    console.log(event.target['value'] );

    for (let i = 0; i < this.data.width; i++) {
      for (let j = 0; j < this.data.height; j++) {
        this.rows[i][j] = event.target['value'];
      }
    }
  }
}
