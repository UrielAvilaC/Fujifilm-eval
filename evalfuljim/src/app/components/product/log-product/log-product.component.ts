import { Component, Input, OnInit } from '@angular/core';
import { LogProductViewModel } from 'src/app/interfaces/Product/Product';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-log-product',
  templateUrl: './log-product.component.html',
  styleUrls: ['./log-product.component.scss']
})
export class LogProductComponent implements OnInit {
@Input('id-record') idRecord !: number;
rows: LogProductViewModel[] = [];
headElements = [
  "Tipo",
  "Persona Que afecto",
  "Fecha de Afectación",
  "Valores Anteriores",
  "Valores Actuales",
]
  constructor(private productService : ProductService) {

  }

  ngOnInit(): void {
   this.productService.LOG(this.idRecord).subscribe(response=>{
      if(response && response.Success)
      {
        this.rows = [...response.ObjectResult];
      }
    });
  }

}
