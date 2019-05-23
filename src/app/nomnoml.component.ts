import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as nomnoml from 'nomnoml';

@Component({
  selector: 'nomnoml',
  template: '<canvas id="target-canvas"></canvas>',
  styleUrls: ['./nomnoml.component.css']
})
export class NomnomlComponent implements OnInit, OnChanges {
  @Input('source') source;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const src = changes.source.currentValue;
    this.draw(src);
  }

  draw(src: string): void {
    if (src) {
      const targetCanvas = document.getElementById('target-canvas');
      nomnoml.draw(targetCanvas, src);
    }
  }
}
