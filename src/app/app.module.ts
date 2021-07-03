import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DogsService } from './dogs.service'


import { AppComponent } from './app.component';
import { EntityMapperService } from './mapper/entityMapper.service';

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
