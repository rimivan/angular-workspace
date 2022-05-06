import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works from {{from}}!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  @Input() from: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
