import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteProduct } from 'src/app/core/actions/shopping-actions';
import { Product } from 'src/app/core/model/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{

  dataSource = this.store.select(state => state.products.products);
  displayedColumns: string[] = ['name', 'price', 'action-delete'];
  constructor(private store: Store) { 
  }

  deleteFromShoppingList(element : Product) {
    this.store.dispatch(new DeleteProduct(element));
  }
}
