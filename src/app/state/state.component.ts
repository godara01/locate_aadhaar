import { Component, OnInit } from '@angular/core';

export interface State {
  value: string;
  viewValue: string;
}
export interface District {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})

export class StateComponent implements OnInit {

  districts: District[] = [
    {value: '0', viewValue: 'Aravali'},
    {value: '1', viewValue: 'Nilgiri'},
    {value: '2', viewValue: 'Vindhyachal'},
    {value: '3', viewValue: 'Kailash'}

  ];

  states: State[] = [
    {value: '0', viewValue: 'Rajasthan'},
    {value: '1', viewValue: 'Delhi'},
    {value: '2', viewValue: 'MP'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
