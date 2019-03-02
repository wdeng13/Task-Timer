import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    MatInputModule
} from '@angular/material';


@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatTabsModule,
        MatProgressBarModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatTabsModule,
        MatProgressBarModule,
        MatInputModule
    ]
})
export class MaterialModule { }