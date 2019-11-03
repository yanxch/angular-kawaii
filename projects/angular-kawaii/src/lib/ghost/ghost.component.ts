import { Component, OnInit, Input } from '@angular/core';
import { Mood } from '../common/face/moods';
import { paths } from './ghost.paths';

@Component({
  selector: 'Ghost',
  template: `
    <svg
      [attr.width]="size * 0.77"
      [attr.height]="size"
      viewBox="0 0 130 168"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <svg:g id="kawaii-ghost">
        <svg:g id="kawaii-ghost__body">
          <svg:path [attr.d]="paths.shape" id="kawaii-ghost__shape" [attr.fill]="color" />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-ghost__shadow"
            opacity="0.1"
            fill="#000000"
          />
        </svg:g>
        <svg:g Face
          [mood]="mood"
          transform="translate(34 57)"
        />
      </svg:g>
    </svg>
`
})
export class GhostComponent implements OnInit {
  @Input()
  size = 240;

  @Input()
  color = '#E0E4E8';

  @Input()
  mood: Mood = 'blissful';

  paths = paths;

  constructor() {}

  ngOnInit() {}
}
