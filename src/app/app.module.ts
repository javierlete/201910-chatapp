import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalaComponent } from './sala/sala.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SalasComponent } from './salas/salas.component';
import { ChatComponent } from './chat/chat.component';
import { FraseComponent } from './frase/frase.component';
import { NuevaFraseComponent } from './nueva-frase/nueva-frase.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent,
    UsuariosComponent,
    SalasComponent,
    ChatComponent,
    FraseComponent,
    NuevaFraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
