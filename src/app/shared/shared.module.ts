import { CityPipe } from './city.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe
    ],
    exports: [
        CityPipe, 
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {
}