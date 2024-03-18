import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("Nuevo mensaje recibido. ", payload);
        this.currentMessage.next(payload);
      }
    );

    // Solicitar permiso al inicio de la aplicación
    this.requestPermission();
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log("Token:", token);
      },
      (err) => {
        console.error('Permiso denegado.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
    (payload:any) => {
        console.log("Nuevo mensaje recibido. ", payload);
        this.currentMessage.next(payload);
    })
  }
}
