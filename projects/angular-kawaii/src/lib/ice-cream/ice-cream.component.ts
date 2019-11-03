import {Component, Input} from '@angular/core';
import {Mood} from '../common/face/moods';
import {paths} from './ice-cream.paths';

@Component({
  selector: 'IceCream',
  template: `
    <svg
      [attr.width]="size * 0.5"
      [attr.height]="size"
      viewBox="0 0 110 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <svg:g id="kawaii-iceCream">
        <svg:g fillRule="nonzero">
          <svg:path [attr.d]="paths.stick" id="kawaii-iceCream__stick" fill="#FCCB7E" />
          <svg:path [attr.d]="paths.shape" id="kawaii-iceCream__shape" [attr.fill]="color" />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-iceCream__shadow"
            fill="#000000"
            opacity=".1"
          />
        </svg:g>
        <svg:g Face
          [mood]="mood"
          transform="translate(22.000000, 81.000000)"
        />
      </svg:g>
    </svg>
  `
})
export class IceCreamComponent {
  @Input()
  size = 300;

  @Input()
  color = '#FDA7DC';

  @Input()
  mood: Mood = 'blissful';

  paths = paths;

  constructor() {}
}
