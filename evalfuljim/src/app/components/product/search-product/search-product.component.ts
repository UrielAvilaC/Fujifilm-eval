import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { estatus } from 'src/app/interfaces/Common/Estatus';
import { SelectListItem } from 'src/app/interfaces/Common/SelectListItem';
import { ProductViewModel } from 'src/app/interfaces/Product/Product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
SearrchFormProduct !:  SearchProductFormGroup;
EstatusItems : SelectListItem[] =[
  <SelectListItem>{code:"1" ,text :"Activo"},
  <SelectListItem>{code:"3" ,text :"Cancelado"},
]
  constructor() {
    this.SearrchFormProduct = new SearchProductFormGroup(<ProductViewModel>{})
   }

  ngOnInit(): void {
  }

}
export class SearchProductFormGroup extends FormGroup {
  readonly Code = this.get('Code') as FormControl;
  readonly Name = this.get('Name') as FormControl;
   idEstatus = this.get('idEstatus') as FormControl;
  readonly Type = this.get('Type') as FormControl;

  constructor(private readonly model: ProductViewModel, private readonly fb = new FormBuilder()) {
    super(fb.group(
      {
        Code: [model?.Code],
        Name: [model?.Name],
        Price: [model?.Price],
        Type: [model?.Type],
        idEstatus :[model?.idEstatus ?? "1"]
      }
    ).controls);
  }
}
