import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }
