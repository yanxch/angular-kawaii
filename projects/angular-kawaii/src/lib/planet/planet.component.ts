import { Component, OnInit, Input } from '@angular/core';

import { paths as planetPaths } from './planet.paths';
import {Mood} from '../common/face/moods';

@Component({
  selector: 'Planet',
  template: `
      <svg
        [attr.width]="size"
        [attr.height]="size"
        version="1.1"
        viewBox="0 0 134 134"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">

        <svg:defs>
          <svg:path [attr.d]="planetPaths.shape" id="kawaii-planet__shape--path" />
          <svg:path [attr.d]="planetPaths.shadow" id="kawaii-planet__shadow--path" />
        </svg:defs>
        <svg:g id="kawaii-planet">
          <svg:g id="kawaii-planet__body">
            <svg:mask id="mask-2" fill="#fff">
              <svg:use xlink:href="#kawaii-planet__shape--path" />
            </svg:mask>
            <svg:use
              id="kawaii-planet__shape"
              [attr.fill]="color"
              xlink:href="#kawaii-planet__shape--path"
            />
            <svg:mask id="mask-4" fill="#fff">
              <svg:use xlink:href="#kawaii-planet__shadow--path" />
            </svg:mask>
            <svg:use
              id="kawaii-planet__shadow"
              fill="#000000"
              opacity=".1"
              xlink:href="#kawaii-planet__shadow--path"
            />
          </svg:g>
          <svg:g Face [mood]="mood" transform="translate(34 57)"></svg:g>
        </svg:g>
      </svg>
  `
})
export class PlanetComponent implements OnInit {
// #83D1FB
// #E0E4E8
// #FDA7DC
// #A6E191
// #FCCB7E

  @Input()
  size = 190;

  @Input()
  color = '#A6E191';

  @Input()
  mood: Mood = 'happy';

  planetPaths = planetPaths;

  constructor() { }

  ngOnInit() {
  }

}
