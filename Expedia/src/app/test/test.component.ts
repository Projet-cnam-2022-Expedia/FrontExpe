import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './test.component.html',
  styleUrls: [ './test.component.css']
})
export class TestComponent {
  searchText: any;
  names = ['Adil', 'John',
    'Jinku', 'Steve',
    'Sam', 'Zeed',
    'Abraham', 'Heldon'
  ];
}
