import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Students } from 'src/app/services/students';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule] //add this to use the ionic components
})
export class CardComponent  implements OnInit {
  students = inject(Students).studentList; //inject or get the 'studentList' (array-object from student service) then make it available in "local variable/property/signal" 
  constructor() { }

  ngOnInit() {}

}
