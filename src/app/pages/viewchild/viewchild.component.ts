import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildcompComponent } from 'src/app/components/childcomp/childcomp.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('child', { static: false }) component: ChildcompComponent;

  ngAfterViewInit() {
    console.log(this.component.propriedade);
  }
}
