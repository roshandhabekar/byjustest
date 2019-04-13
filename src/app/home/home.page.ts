import { Component } from '@angular/core';
import { CourseService } from "../course.service";
import { ModalController } from '@ionic/angular';
import { ModalPresentPage } from './modal-present/modal-present.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private CourseListing:any;
  private searchQuery:string;
  private items:any;
  constructor(private courses:CourseService,public modalCtrl:ModalController){

  }
  ngOnInit(){
    this.courses.getListOfCourses().subscribe(data=>{
      this.CourseListing = data;
     this.items = data;
    })
  }
  async showCourseDetails(item:any){
    const modal =  await this.modalCtrl.create({
      component: ModalPresentPage,
      componentProps: {
        'prop1': item
      }
    })
    return await modal.present();
        
  }
  onSearchInput(){
    this.items = this.CourseListing.filter(item => {
      return (item['Course Name'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1) || 
      (item['Provider'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1)  || 
      (item['Parent Subject'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1)||
      (item['Child Subject'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1) ;
    });
  }
}
