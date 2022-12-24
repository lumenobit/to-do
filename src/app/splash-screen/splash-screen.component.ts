import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {

  constructor(
    private router: Router
  ) {
    const splashScreen = localStorage.getItem('splashscreen');
    if (splashScreen) {
      // Directly redirect to sign in page
      this.router.navigate(['login'])
    }
  }

  navigateToApp() {
    localStorage.setItem("splashscreen", "true");
    this.router.navigate(['login'])
  }

}
