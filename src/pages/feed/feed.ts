import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome:string = "Tiago Souza Araújo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * Soma
   */
  public Soma(n1:number,n2:number): void {
    alert("Valor = " + (n1+n2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    // this.Soma(12,1);
  }

}
