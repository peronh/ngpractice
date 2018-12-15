import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { NewpipePipe } from './listdemo/newpipe.pipe';
// import {HttpClientModule} from '@angular/common/http';
// import {ImageUploadModule} from 'angular2-image-upload';

@NgModule(<NgModule>{
    declarations: [
        AppComponent,
        ListdemoComponent,
        NewpipePipe,
        // HttpClientModule
        // ImageUploadModule.forRoot()
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
