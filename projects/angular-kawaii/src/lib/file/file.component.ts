import { Component, Input, OnInit } from '@angular/core';
import { Mood } from '../common/face/moods';
import { paths } from './file.paths';

@Component({
  selector: 'File',
  template: `
    <svg
      [attr.width]="size * 0.68"
      [attr.height]="size"
      viewBox="0 0 105 153"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <svg:g id="kawaii-file">
        <svg:g id="kawaii-file__body" fillRule="nonzero">
          <svg:path [attr.d]="paths.shape" id="kawaii-file__shape" [attr.fill]="color" />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-file__shadow"
            fill="#000"
            opacity=".1"
          />
          <svg:path
            id="kawaii-file__fold"
            fill="#000"
            opacity=".2"
            d="M70.1445,0 L70.1445,22.641 C70.1445,29.387 75.6135,34.855 82.3595,34.855 L104.9995,34.855 L70.1445,0"
          />
        </svg:g>
        <svg:g Face
          [mood]="mood"
          transform="translate(20 66)"/>
      </svg:g>
    </svg>
  `
})
export class FileComponent implements OnInit {
  @Input()
  size = 200;

  @Input()
  color = '#83D1FB';

  @Input()
  mood: Mood = 'ko';

  paths = paths;

  constructor() {}

  ngOnInit() {}
}
