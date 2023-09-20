import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { FooterComponent } from './auth/footer/footer.component';
// import { NavbarComponent } from './auth/navbar/navbar.component';
// import { AboutusComponent } from './auth/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,

    // FooterComponent,
    // NavbarComponent,
    // AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    DashboardModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: '#2196f3',
      bgsType: 'ball-spin-clockwise-fade-rotating',
      pbColor: '#2196f3',
      fgsType: 'ball-spin-clockwise-fade-rotating',
      hasProgressBar: false,
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
