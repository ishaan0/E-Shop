import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./component/add-product/add-product.component";
import { AuthComponent } from "./component/auth/auth.component";
import { AuthGuard } from "./component/auth/auth.guard";
import { CartComponent } from "./component/cart/cart.component";
import { ProductsComponent } from "./component/products/products.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductsComponent, canActivate : [AuthGuard] },
  { path: 'add-product', component: AddProductComponent,  canActivate : [AuthGuard] },
  { path: 'cart', component: CartComponent,  canActivate : [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
