import { Component } from '@angular/core';
import { CallApiService } from './core/call-api.service';
import { OnInit } from '../../node_modules/@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private callApiService: CallApiService
  ) {

  }

  title = 'Tour of Heroes';

  ngOnInit() {
    console.log(this.callApiService.get());
  }
}
