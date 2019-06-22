import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as nomnoml from 'nomnoml';

@Component({
  selector: 'nomnoml',
  template: '<canvas #targetCanvas></canvas>',
  styleUrls: []
})
export class NomnomlComponent implements OnInit, OnChanges {
  @Input('source') source;
  @ViewChild('targetCanvas') targetCanvas: ElementRef;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const src = changes.source.currentValue;
    this.draw(src);
  }

  draw(src: string): void {
    if (src) {
      nomnoml.draw(this.targetCanvas.nativeElement, src);
    }
  }
}
