import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging'; // Importa el módulo de mensajería de AngularFire
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { MessagingService } from './services/messaging.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"push-example-7a47b","appId":"1:356240633626:web:e1eb643bde617982cfc6a3","storageBucket":"push-example-7a47b.appspot.com","apiKey":"AIzaSyAM1UoCBqsJVWCKiIGzkseKRX_VZs9VkpY","authDomain":"push-example-7a47b.firebaseapp.com","messagingSenderId":"356240633626"})),
    provideMessaging(() => getMessaging()) // Asegúrate de importar el módulo de mensajería de AngularFire aquí
  ],
  providers: [MessagingService], // Asegúrate de proporcionar el servicio MessagingService
  bootstrap: [AppComponent]
})
export class AppModule { }
