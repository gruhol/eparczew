import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-category-form',
    template: `
    <div [formGroup]="parentForm">
        <div class="form-group">
            <mat-form-field class="example-full-width">
            <mat-label>Nazwa</mat-label>
            <input matInput placeholder="Podaj nazwę" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)">
                <div *ngIf="name?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minLength']">
                    Nazwa musi miec przynajmniej 4 znaki
                </div>
            </div>
            </mat-form-field>
        </div>

        <div class="form-group">
            <mat-form-field class="example-full-width">
                <mat-label>Opis</mat-label>
                <input matInput placeholder="Podaj opis" formControlName="description">
                <div *ngIf="description?.invalid && (description?.dirty || description?.touched)">
                <div *ngIf="description?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
            </div>
            </mat-form-field>
        </div>

        <div class="form-group">
            <mat-form-field class="example-full-width">
                <mat-label>Przyjazny URL</mat-label>
                <input matInput placeholder="Podaj url" formControlName="slug">
                <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)">
                <div *ngIf="slug?.errors?.['required']">
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

export class AdminCategoryFormComponent{
    
    @Input() parentForm! : FormGroup;

    constructor() {}
    

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get slug() {
        return this.parentForm.get('slug');
    }

}