import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass = (event) => {
    // console.log(event);
    this.isFavorite = !this.isFavorite;
  }
}
