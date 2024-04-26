import { NgModule } from "@angular/core";
import { SitejobapplicationComponent } from "./sitejobapplication.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        SitejobapplicationComponent

    ],
    imports:[
        CommonModule,
        ReactiveFormsModule

    ],
    exports:[
        SitejobapplicationComponent

    ]
})
export class SitejobapplicationModule {

}