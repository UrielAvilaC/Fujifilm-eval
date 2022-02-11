import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductViewModel } from 'src/app/interfaces/Product/Product';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, AfterViewInit {
  ProductForm !: ProductFormGroup;
  @Input('id-record') idRecord !: number;
  constructor(private productService: ProductService) {
    this.ProductForm = new ProductFormGroup(<ProductViewModel>{});
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    if (this.idRecord > 0) {
      this.productService.VIEWRECORD(this.idRecord).subscribe(response => {
        if (response && response.Success) {
              this.ProductForm = new ProductFormGroup(response.ObjectResult);
        }
      });
    }
  }

}
export class ProductFormGroup extends FormGroup {
  readonly Id = this.get('Id') as FormControl;
  readonly Code = this.get('Code') as FormControl;
  readonly Name = this.get('Name') as FormControl;
  readonly Price = this.get('Price') as FormControl;
  readonly Estatus = this.get('Estatus') as FormControl;
  readonly Type = this.get('Type') as FormControl;

  constructor(private readonly model: ProductViewModel, private readonly fb = new FormBuilder()) {
    super(fb.group(
      {
        Id: [model?.Id],
        Code: [model?.Code, [Validators.required]],
        Name: [model?.Name, [Validators.required]],
        Price: [model?.Price, [Validators.required]],
        Type: [model?.Type, [Validators.required]]
      }
    ).controls);
  }
}
