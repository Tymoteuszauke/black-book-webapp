import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './component/app/app.component';
import { BookDetailComponent } from './component/bookDetail/book-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
