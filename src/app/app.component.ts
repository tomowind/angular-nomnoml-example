import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as nomnoml from 'nomnoml';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('targetCanvas') targetCanvas: ElementRef;

  inputCtrl = new FormControl('');

  constructor() {}

  ngOnInit() {
    // draw initially
    const source1 = Array(20)
      .fill(1)
      .map((x, y) => x + y)
      .map(i => `[nomnoml${i}] ls -> [awesome${i}]`)
      .join('\n');
    this.inputCtrl.setValue(source1);
    nomnoml.draw(this.targetCanvas.nativeElement, source1);

    // subscribe future changes
    this.inputCtrl.valueChanges.subscribe(source => {
      nomnoml.draw(this.targetCanvas.nativeElement, source);
    });
  }
}
