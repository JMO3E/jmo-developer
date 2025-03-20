import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  ngOnInit() {
    const options = {
      strings: ['Software Developer', 'IOT Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.iam-element', options);
  }
}
