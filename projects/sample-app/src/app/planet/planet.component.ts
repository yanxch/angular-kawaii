import { Component, OnInit, Input } from '@angular/core';

import { paths as facePaths } from '../common/face/face.paths';
import { faceTemplate } from '../common/face/face.component';

@Component({
  selector: 'Planet',
  template: `
    <div style="position: relative;">
      <svg
        [attr.width]="size"
        [attr.height]="size"
        version="1.1"
        viewBox="0 0 134 134"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">

        <defs>
          <path [attr.d]="planetPaths.shape" id="kawaii-planet__shape--path" />
          <path [attr.d]="planetPaths.shadow" id="kawaii-planet__shadow--path" />
        </defs>
        <g id="kawaii-planet">
          <g id="kawaii-planet__body">
            <mask id="mask-2" fill="#fff">
              <use xlink:href="#kawaii-planet__shape--path" />
            </mask>
            <use
              id="kawaii-planet__shape"
              [attr.fill]="color"
              xlink:href="#kawaii-planet__shape--path"
            />
            <mask id="mask-4" fill="#fff">
              <use xlink:href="#kawaii-planet__shadow--path" />
            </mask>
            <use
              id="kawaii-planet__shadow"
              fill="#000000"
              opacity=".1"
              xlink:href="#kawaii-planet__shadow--path"
            />
          </g>
          ${faceTemplate}
        </g>
      </svg>
    </div>
  `,
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  @Input()
  size = 190;

  @Input()
  color = '#FCCB7E';

  @Input()
  mood = 'lovestruck';

  facePaths = facePaths;
  planetPaths = {
    shape:
      'M67 134c37.003 0 67-29.997 67-67S104.003 0 67 0 0 29.997 0 67s29.997 67 67 67z',
    shadow:
      'M61.5 133.777C95.93 130.98 123 102.151 123 67 123 31.849 95.93 3.02 61.5.223A67.906 67.906 0 0 1 67 0c37.003 0 67 29.997 67 67s-29.997 67-67 67c-1.852 0-3.686-.075-5.5-.223z',
  };

  constructor() { }

  ngOnInit() {
  }

}
