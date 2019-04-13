import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
// import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-modal-present',
  templateUrl: './modal-present.page.html',
  styleUrls: ['./modal-present.page.scss'],
})
export class ModalPresentPage implements OnInit {
  information:any;
  constructor(public navParams:NavParams,public modal:ModalController,) { }

  ngOnInit() {
    this.information  = this.navParams.get("prop1");
    console.log(this.information);
  }
  dismiss(){
    this.modal.dismiss();
  }

}
