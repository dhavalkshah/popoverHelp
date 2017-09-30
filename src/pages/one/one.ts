import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { HintComponent } from '../../components/hint/hint';

@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public hintCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }
  checkHints(evt: any) {
    let hintPresenter = this.hintCtrl.create(HintComponent);
    hintPresenter.present({ ev: evt });
    hintPresenter.onDidDismiss((data) => {
      console.log(data);
    })
  }

}
