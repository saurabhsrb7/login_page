// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // Import FormsModule
// import { RouterModule } from '@angular/router';
// import { RegisterComponent } from './register/register.component'; // Import your component
// import { LoginComponent } from './login/login.component'; // Import other components if necessary
// import { AppComponent } from './app.component'; // Import your root component
// import { appRoutes } from './app.routes';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     RegisterComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     HttpClient,
//     FormsModule,
//     RouterModule.forRoot(appRoutes)
//   ],
//   providers: [HttpClientModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule {
  // Add an ngDoBootstrap method
  ngDoBootstrap() {}
}

