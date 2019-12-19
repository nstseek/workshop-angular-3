import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildcompComponent } from 'src/app/components/childcomp/childcomp.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('child', { static: false }) component: ChildcompComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.component.propriedade);
  }
}
