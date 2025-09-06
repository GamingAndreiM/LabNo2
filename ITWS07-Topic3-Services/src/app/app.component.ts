import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonIcon, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,IonTitle, IonContent, IonList, IonItem, IonButton, IonMenuButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { book, school } from 'ionicons/icons'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonIcon, IonMenu, IonHeader, IonToolbar,IonTitle, IonContent, IonList, IonItem, IonButton, IonMenuButton, RouterLink], //add IonIcon here to use it all across your project
})
export class AppComponent {
  constructor() {
    addIcons({book, school}) //add this addIcon() inside constructor to load your icons globally... don't forget to import those icons in ionicons/icons and addIcons to ionicons
  }
}
