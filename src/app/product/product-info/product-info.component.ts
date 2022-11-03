import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { CatalogueService } from 'src/app/core/service/catalogue/catalogue.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product | undefined;
  constructor(private productService: CatalogueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      data => {
        this.product = data.find(p => p.id == this.route.snapshot.params['id']);
      }
    );
  }

}
