import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'host';
  @ViewChild('placeHolder', { static: true }) container?: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    const m = await import('remote-vite/Button');
    if (this.container) {
      const reactComponent = React.createElement(m.Button);
      const root = createRoot(this.container.nativeElement);
      console.log('rendering');
      root.render(reactComponent);
    }
  }
}
