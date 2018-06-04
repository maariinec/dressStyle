import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ArticleModeComponent } from './content/article-mode/article-mode.component';
import { CompteComponent } from './compte/compte.component';
import { DressingComponent } from './dressing/dressing.component';
import { FavorisComponent } from './content/favoris/favoris.component';
import { ManqueIdeeComponent } from './content/manque-idee/manque-idee.component';
import { DressingService } from './dressing.service';
import { DeleteService } from './delete.service';
import { EditService } from './edit.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ContentComponent,
    ArticleModeComponent,
    CompteComponent,
    DressingComponent,
    FavorisComponent,
    ManqueIdeeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService, DressingService, DeleteService, EditService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
