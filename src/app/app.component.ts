import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('box') inputBox: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Why setTimeout? See
    // https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.renderer.setProperty(
        this.inputBox.nativeElement,
        'value',
        '[nomnoml] is -> [awesome]'
      );
    });
  }
}
