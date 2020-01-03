import { Component, OnInit } from '@angular/core';
import { RxServService } from './services/rx-serv.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private service: RxServService) { }

  ngOnInit() {
  }

}
