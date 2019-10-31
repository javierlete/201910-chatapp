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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
