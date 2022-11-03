import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct, DeleteProduct } from "../actions/shopping-actions";
import { ShoppingStateModel } from "./shopping-state-model";

@State<ShoppingStateModel>({
    name: 'products',
    defaults: {
        products: [],
    },
})

@Injectable()
export class ShoppingState {
    @Selector()
    static getNbProducts(state: ShoppingStateModel) {
        return state.products.length;
    }
    @Selector()
    static getListProducts(state: ShoppingStateModel) {
        return state.products;
    }

    @Action(AddProduct)
    add(
        { getState, patchState }: StateContext<ShoppingStateModel>,
        { payload }: AddProduct
    ) {
        const state = getState();
        patchState({
            products: [...state.products, payload],
        });
    }

    @Action(DeleteProduct)
    delete(
        { getState, patchState }: StateContext<ShoppingStateModel>,
        { payload }: DeleteProduct
    ) {
        const state = getState();
        patchState({
            products: state.products.filter((t) => t.id !== payload.id),
        });
    }
}