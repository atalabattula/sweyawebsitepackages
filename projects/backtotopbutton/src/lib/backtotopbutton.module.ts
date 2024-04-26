import { NgModule } from "@angular/core";
import { BacktotopbuttonComponent } from "./backtotopbutton.component";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations:[
        BacktotopbuttonComponent

    ],
    imports:[
        MatIconModule
    ],
    exports:[
        BacktotopbuttonComponent
        

    ]
})
export class BacktotopbuttonModule{}