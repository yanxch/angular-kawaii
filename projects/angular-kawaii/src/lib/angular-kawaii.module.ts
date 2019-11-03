import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FaceComponent} from './common/face/face.component';
import {GhostComponent} from './ghost/ghost.component';
import {IceCreamComponent} from './ice-cream/ice-cream.component';
import {MugComponent} from './mug/mug.component';
import {PlanetComponent} from './planet/planet.component';
import {SpeechBubbleComponent} from './speech-bubble/speech-bubble.component';
import {FileComponent} from './file/file.component';
import {CreditCardComponent} from './credit-card/credit-card.component';
import {CatComponent} from './cat/cat.component';
import {BrowserComponent} from './browser/browser.component';
import {BackpackComponent} from './backpack/backpack.component';

const declarations = [
  FaceComponent,
  PlanetComponent,
  MugComponent,
  SpeechBubbleComponent,
  IceCreamComponent,
  GhostComponent,
  FileComponent,
  CreditCardComponent,
  CatComponent,
  BrowserComponent,
  BackpackComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class AngularKawaiiModule { }
