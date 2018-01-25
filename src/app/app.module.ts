import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpModule} from '@angular/http';
import { hoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    hoverDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
