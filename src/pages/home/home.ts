import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'; /* 1 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,private iab: InAppBrowser /* 2 */) {}
ngOnInit(){

    const browser = this.iab.create('http://www.mairapid.ro/','_self',{location:'no'}); /*3*/

}

}
