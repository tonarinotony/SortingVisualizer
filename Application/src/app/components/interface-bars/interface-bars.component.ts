import { Component, OnInit, Input } from '@angular/core';
import { Bars } from '../../models/bars'

@Component({
  selector: 'app-interface-bars',
  templateUrl: './interface-bars.component.html',
  styleUrls: ['./interface-bars.component.css']
})
export class InterfaceBarsComponent implements OnInit {
  @Input() bars:Bars;


  constructor() { }



  ngOnInit(): void {
  }

  
}
