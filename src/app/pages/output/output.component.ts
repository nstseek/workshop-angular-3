import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  constructor() { }

  logChildValue(data: string) {
    console.log(data);
  }

}
