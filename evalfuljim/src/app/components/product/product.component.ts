import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective, ModalModule } from 'angular-bootstrap-md';
import { ProductViewModel } from 'src/app/interfaces/Product/Product';
import { ProductService } from 'src/app/services/Product/product.service';
import { AddComponent } from './add/add.component';
import { SearchProductComponent } from './search-product/search-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild('addProduct') details!: AddComponent;
  @ViewChild('basicModal') basicModal!: ModalDirective;
  @ViewChild('logModal') logModal!: ModalDirective;
  @ViewChild('searchProduct') searchProduct !: SearchProductComponent;
  idRecord = 0;
  rows: ProductViewModel[] = [];
  submmiting = false;
  headElements = [
    "Editar",
    "Eliminar",
    "Historial",
    "Código",
    "Nombre",
    "Precio",
    "Tipo",
    "Estatus"
  ]
  constructor(private productService: ProductService, private router: Router) { }
  ngAfterViewInit(): void {
this.loadData();
  }
loadData()
{
  this.productService.SELECT(this.searchProduct?.SearrchFormProduct?.value).subscribe(response => {
    if (response && response.Success) {
          this.rows = [...response.ObjectResult];
    }
  });
}
  ngOnInit(): void {

  }
  onSearch()
  {
    this.loadData();
  }
  editRow(id: number) {
    this.idRecord = id;
    this.basicModal.show();
  }
  deleteRow(id: number) {
    this.productService.DELETE(id).subscribe(response=>{
if(response.Success)
    {
      alert("Eliminado Correcamente");
      this.loadData();
    }
    });
  }
  logRow(id: number) {
    this.idRecord = id;
    this.logModal.show();
  }
  onSubmit() {
    if (!this.submmiting && this.details.ProductForm.valid) {
      this.submmiting = true;
      this.productService.SAVE(this.details.ProductForm.value).subscribe(respose => {

        if (respose && respose == true) {
          alert('Guardado Correctamente');
          this.basicModal.hide();
          this.loadData();
        } if (respose == "Reload") {
          this.router.navigateByUrl('login');
        }
        this.submmiting = false;
      });
    }
  }
}
