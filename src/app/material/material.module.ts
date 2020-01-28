import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatToolbarModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatToolbarModule,
]

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})

export class MaterialModule { }
