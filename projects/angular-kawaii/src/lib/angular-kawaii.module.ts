import { NgModule } from '@angular/core';
import {PlanetComponent} from './planet/planet.component';
import {FaceComponent} from './common/face/face.component';
import {CommonModule} from '@angular/common';

const declarations = [
  FaceComponent,
  PlanetComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class AngularKawaiiModule { }
