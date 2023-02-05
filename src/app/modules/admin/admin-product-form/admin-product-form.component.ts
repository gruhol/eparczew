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
            <div *ngIf="productName?.invalid && (productName?.dirty || productName?.touched)">
                <div *ngIf="productName?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="productName?.errors?.['minLength']">
                    Nazwa musi miec przynajmniej 4 znaki
                </div>
            </div>
            </mat-form-field>
        </div>

        <div class="form-group">
            <mat-form-field class="example-full-width">
                <mat-label>Brand</mat-label>
                <input matInput placeholder="Podaj brand" formControlName="idBrand">
                <div *ngIf="idBrand?.invalid && (idBrand?.dirty || idBrand?.touched)">
                <div *ngIf="idBrand?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
            </div>
            </mat-form-field>
            </div>
        <div>
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Zapisz</button>
        </div>
    </div>
    `
})

export class AdminProductFormComponent implements OnInit{
    
    @Input() parentForm! : FormGroup;

    ngOnInit(): void {
    }

    get productName() {
        return this.parentForm.get("productName");
    }

    get idBrand() {
        return this.parentForm.get("idBrand");
    }

}