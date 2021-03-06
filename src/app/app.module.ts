import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ChatpageComponent } from './component/chatpage/chatpage.component';

@NgModule({
  imports:      [ BrowserModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ChatpageComponent,
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders]
})
export class AppModule { }
