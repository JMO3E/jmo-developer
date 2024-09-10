import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  ngOnInit() {
    const options = {
      strings: ['Software Developer', 'Game Developer', 'Data Enthusiast'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed('.iam-element', options);
  }
}
