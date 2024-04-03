import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private Product:ProductService){}
  data:any

  ngOnInit(): void { 
    this.getProducts()
  }

  getProducts(){
    this.Product.getAllProducts().subscribe(res => {
      this.data = res    
    })
  }
}
