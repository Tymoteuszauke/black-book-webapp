import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { BookDetailComponent } from './book-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BookDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }