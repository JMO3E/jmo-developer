import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private location: Location
  ) {}

  title = 'JMO Developer';

  ngOnInit() {
    this.updateMetaTags();

    this.resetUrlOnReload();
  }

  resetUrlOnReload() {
    const navigationEntries = performance.getEntriesByType(
      'navigation'
    ) as PerformanceNavigationTiming[];
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === 'reload'
    ) {
      // Page was reloaded
      this.location.replaceState('/#Home');
    }
  }

  updateMetaTags() {
    this.titleService.setTitle('JMO Developer');

    // Standard Meta Tags
    this.meta.addTag({
      name: 'description',
      content:
        'Welcome to JMO Developer, here you will find information about my skills, projects and achievements.',
    });

    this.meta.addTag({
      name: 'keywords',
      content:
        'JMO, JMO Developer, Developer, Angular, Puerto Rico, PR, Joseph Marrero, Joseph',
    });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'JMO Developer' });

    this.meta.addTag({
      property: 'og:description',
      content:
        'Welcome to JMO Developer, here you will find information about my skills, projects and achievements.',
    });

    this.meta.addTag({
      property: 'og:image',
      content: '../assets/jmo-v2-m.png',
    });
  }
}
