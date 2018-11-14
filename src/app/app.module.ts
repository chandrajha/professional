import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ExamTestComponent } from './exam-test/exam-test.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioButton, MatRadioGroup} from '@angular/material';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExamTestComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,

    BrowserModule,MatMenuModule, MatSidenavModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, FormsModule,MatRadioModule,
    RouterModule.forRoot([
      {
        path: '' , component : LoginComponent
      },
      {
        path: 'home' , component : HomeComponent
      },
      {
        path: 'Exam Test' , component : ExamTestComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
