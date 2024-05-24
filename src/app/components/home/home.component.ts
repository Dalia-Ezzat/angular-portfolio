import { Component } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  ngOnInit() {
    var typed = new Typed(" #element  " , {
      strings: [  "  Front-end Developer. "  ],
      typeSpeed:50,
      loop: true,
      backDelay: 120,
      backSpeed:60,
    }
    );

  }


}
