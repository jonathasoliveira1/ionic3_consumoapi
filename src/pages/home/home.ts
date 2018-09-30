import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/imgs/bg-1.jpg',
    'assets/imgs/bg-4.jpg'
  ];


  constructor(public navCtrl: NavController) {

  }

  login() {

  }

  facebookLogin() {

  }

  goToHome() {

  }

  goToSignup() {

  }


}