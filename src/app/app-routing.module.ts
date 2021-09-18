import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './log-in/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'home', component: MainComponent},
  {path: 'products', component: ProductComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'checkout', component: CartComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    paramsInheritanceStrategy: 'always'
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  currentUser: any;


}
