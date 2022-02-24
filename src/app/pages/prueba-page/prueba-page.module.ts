import { NgModule } from '@angular/core';
import  {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { PruebaPageComponent } from './prueba-page.component';

@NgModule({
    declarations: [PruebaPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class PruebaPageModule {

}