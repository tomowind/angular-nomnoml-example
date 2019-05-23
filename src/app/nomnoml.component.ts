import { Component, Input, OnInit } from '@angular/core';
import * as nomnoml from 'nomnoml';

@Component({
  selector: 'nomnoml',
  template: '<canvas id="target-canvas"></canvas>',
  styleUrls: ['./nomnoml.component.css']
})
export class NomnomlComponent implements OnInit {
  @Input('source') source;

  ngOnInit() {
    const targetCanvas = document.getElementById('target-canvas');
    nomnoml.draw(targetCanvas, this.source);
  }
}
