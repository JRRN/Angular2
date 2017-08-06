import { StarComponent } from '../shared/star.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [StarComponent],
    imports: [CommonModule],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]
})
export class SharedModule { }