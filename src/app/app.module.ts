import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { EntityMapperService } from './mapper/entityMapper.service';
import { DogsService } from './dogs.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [EntityMapperService, HttpClient, DogsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
