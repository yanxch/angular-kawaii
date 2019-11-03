import {Component, Input} from '@angular/core';
import {Mood} from '../common/face/moods';
import {paths} from './credit-card.paths';

@Component({
  selector: 'CreditCard',
  template: `
    <svg
      [attr.width]="size * 1.38"
      [attr.height]="size"
      viewBox="0 0 198 143"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <svg:g id="kawaii-creditCard">
        <svg:g id="kawaii-creditCard__body" fillRule="nonzero">
          <svg:path
            [attr.d]="paths.shape"
            id="kawaii-creditCard__shape"
            [attr.fill]="color"
          />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-creditCard__shadow"
            fill="#000"
            opacity=".1"
          />
          <svg:path
            id="kawaii-creditCard__stripe"
            fill="#000"
            d="M0 17h198v27H0z"
          />
        </svg:g>
        <svg:g
          Face
          [mood]="mood"
          transform="translate(66 73)"
          uniqueId="{getUniqueId()}"
        />
      </svg:g>
    </svg>
  `
})
export class CreditCardComponent {
  @Input()
  size = 200;

  @Input()
  color = '#83D1FB';

  @Input()
  mood: Mood = 'sad';

  paths = paths;

  constructor() {}
}
