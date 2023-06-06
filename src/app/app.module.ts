import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PasswordComponent } from './password/password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { CpfComponent } from './cpf/cpf.component';
import { ManageCpfComponent } from './manage-cpf/manage-cpf.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ComunityPageComponent,
    FeedPageComponent,
    HomePageComponent,
    LoginPageComponent,
    NewAccountPageComponent,
    NotFoundPageComponent,
    RecoverPageComponent,
    UserPageComponent,
    PasswordComponent,
    CreatePasswordComponent,
    CpfComponent,
    ManageCpfComponent,
    CardComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
