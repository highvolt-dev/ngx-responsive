import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveModule, IResponsiveConfig } from '@viablelogic/ngx-responsive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 575 },
    sm: { min: 576, max: 767 },
    md: { min: 768, max: 991 },
    lg: { min: 992, max: 1199 },
    xl: { min: 1200, max: 1399 },
    xxl: { min: 1400 },
  },
  debounceTime: 100
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
