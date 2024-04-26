import { NgModule } from "@angular/core";
import { SitecontactformComponent } from "./sitecontactform.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        SitecontactformComponent

    ],
    imports:[
        CommonModule,
        ReactiveFormsModule

    ],
    exports:[
        SitecontactformComponent

    ]
})
export class SitecontactformModule{}