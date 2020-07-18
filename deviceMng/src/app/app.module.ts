import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceModule } from './device/device.module';
import { CategoryModule } from './category/category.module';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ParametersService } from './services/parameters.service';
import { AuthorModule } from './author/author.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeviceModule,
    CategoryModule,
    HomeModule,
    HttpClientModule,
    AuthorModule,
    AppRoutingModule
  ],
  providers: [DataService, ParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
