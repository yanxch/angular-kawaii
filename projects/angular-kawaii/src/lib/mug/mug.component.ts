import {Component, Input} from '@angular/core';
import {Mood} from '../common/face/moods';
import {paths} from './mug.paths';

@Component({
  selector: 'Mug',
  template: `
    <svg
      [attr.width]="size * 1.5"
      [attr.height]="size"
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <svg:g id="kawaii-mug">
        <svg:g id="kawaii-mug__body" fillRule="nonzero">
          <svg:path [attr.d]="paths.shape" id="kawaii-mug__shape" [attr.fill]="color" />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </svg:g>
        <svg:g Face
          [mood]="mood"
          transform="translate(71 42)"
        />
      </svg:g>
    </svg>
  `
})
export class MugComponent {
  @Input()
  size = 190;

  @Input()
  color: string;

  @Input()
  mood: Mood;

  paths = paths;
}
