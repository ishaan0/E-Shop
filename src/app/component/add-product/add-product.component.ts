import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../products/product.model';
import * as productAction from 'src/app/component/products/store/product.actions' ;
import * as fromApp from '../../app.reducer'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.initForm();
    });
  }

  initForm() {
    this.addProductForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // this.productService.addProduct(this.addProductForm.value);

    this.store.dispatch(new productAction.AddProduct(this.addProductForm.value))
    this.onReset();
  }

  onReset() {
    this.initForm();
  }
}
