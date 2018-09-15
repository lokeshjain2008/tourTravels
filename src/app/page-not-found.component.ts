import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="container text-center">
  <h1>
    :( Page not found!
  </h1>
  <a href="/">
    Go to Home page.
  </a>
</div>
  `,
  styles: [
    ``,
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
