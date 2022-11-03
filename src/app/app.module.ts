import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ChipActivateDirective } from './core/directive/chip-activate/chip-activate.directive';
import { InputLettersDirective } from './core/directive/input-letters/input-letters.directive';
import { InputNumbersDirective } from './core/directive/input-numbers/input-numbers.directive';
import { PhoneNumberPipe } from './core/pipe/phone-number/phone-number.pipe';
import { ProductCategoryPipe } from './core/pipe/product-category/product-category.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';


const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClientInfoComponent,
    InputNumbersDirective,
    InputLettersDirective,
    PhoneNumberPipe,
    CatalogueComponent,
    ProductCategoryPipe,
    ChipActivateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    AngularMaterialModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
