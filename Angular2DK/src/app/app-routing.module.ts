import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from "app/home/home.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { };