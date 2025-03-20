import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';

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
    styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private location: Location) {}

  title = 'JMO Developer';

  ngOnInit() {
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
}
