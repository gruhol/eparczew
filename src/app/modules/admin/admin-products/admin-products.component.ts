import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { startWith, switchMap } from 'rxjs';
import { AdminConfirmDialogService } from '../admin-confirm-dialog.service';
import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './adminProducts';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["id", "name", "brand", "actions"]
  totalElements: number = 0;
  data: AdminProduct[] = []

  constructor(
    private adminProductService: AdminProductService,
    private dialogService: AdminConfirmDialogService
  ) {}
  
  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize)
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }

  confirmDelete(element: AdminProduct) {
    this.dialogService.openConfirmDialog("Czy chcesz usunąc produkt?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminProductService.delete(element.idProduct)
          .subscribe(() => {
            this.data.forEach((value, index) => {
              if(element = value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
          })
        }
      });
  }

}
