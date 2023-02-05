import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm">
        <div class="form-group">
            <mat-form-field class="example-full-width">
            <mat-label>Nazwa</mat-label>
            <input matInput placeholder="Podaj nazwę" formControlName="productName">
            </mat-form-field>
        </div>

        <div class="form-group">
            <mat-form-field class="example-full-width">
                <mat-label>Brand</mat-label>
                <input matInput placeholder="Podaj brand" formControlName="idBrand">
            </mat-form-field>
            </div>
        <div>
            <button mat-flat-button color="primary">Zapisz</button>
        </div>
    </div>
    `
})

export class AdminProductFormComponent implements OnInit{
    
    @Input() parentForm! : FormGroup;

    ngOnInit(): void {
    }

}