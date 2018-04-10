import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  fakeData: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewWillLoad() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(res =>{
            setTimeout(() => {
              this.users = res;
            }, 1500);
        })

  }
}
