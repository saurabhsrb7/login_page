import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the path if necessary
import { FormsModule } from '@angular/forms'; // Import FormsModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(RegisterComponent)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(LoginComponent)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(FormsModule)
  .catch(err => console.error(err));

