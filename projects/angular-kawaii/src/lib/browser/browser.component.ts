import { Component, OnInit, Input } from '@angular/core';
import {Mood} from '../common/face/moods';
import {paths} from './browser.paths';

@Component({
  selector: 'Browser',
  template: `
    <svg
      [attr.width]="size * 1.44"
      [attr.height]="size"
      viewBox="0 0 200 139"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <svg:g id="kawaii-browser">
        <svg:g id="kawaii-browser__body" fillRule="nonzero">
          <svg:path [attr.d]="paths.shape" id="kawaii-browser__shape" [attr.fill]="color" />
          <svg:path
            [attr.d]="paths.shadow"
            id="kawaii-browser__shadow"
            fill="#121212"
            opacity=".1"
          />
          <svg:g id="address-bar" transform="translate(.097)">
            <svg:path [attr.d]="paths.addressBar" fill="#111" />
            <svg:ellipse fill="#FFF" cx="168.855" cy="10.901" rx="3.4" ry="3.395" />
            <svg:ellipse fill="#FFF" cx="180.074" cy="10.901" rx="3.4" ry="3.395" />
            <svg:g id="address" transform="translate(12.654 5.47)" fill="#FFF">
              <svg:rect
                x=".277"
                y=".163"
                width="145.775"
                height="10.563"
                rx="5.282"
              />
            </svg:g>
          </svg:g>
        </svg:g>
        <svg:g Face
          [mood]="mood"
          transform="translate(67 63)"
        />
      </svg:g>
    </svg>
  `
})

export class BrowserComponent implements OnInit {
  @Input()
  size = 180;

  @Input()
  color = '#FDA7DC';

  @Input()
  mood: Mood = 'blissful';

  paths = paths;

  constructor() { }

  ngOnInit() { }
}
