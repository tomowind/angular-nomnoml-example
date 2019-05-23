import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<nomnoml [source]="source"></nomnoml>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  source: string;

  ngOnInit() {
    this.source = '[nomnoml] is -> [awesome]';
  }
}
