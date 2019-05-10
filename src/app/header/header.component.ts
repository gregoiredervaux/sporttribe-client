import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  OptionsShowed = false;

  constructor() {
  }

  ngOnInit() {
  }

  SwitchOptions() {
    this.OptionsShowed = !this.OptionsShowed;
  }
}
