import { NgModule} from '@angular/core';
import {
    MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatOptionModule,
     MatSelectModule
    } 
     from '@angular/material';



@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule
    ]

})
export class MaterialModule{}