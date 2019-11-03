import { Component, Input } from '@angular/core';
import { Mood } from '../common/face/moods';
import { paths } from './speech-bubble.paths';

@Component({
  selector: 'SpeechBubble',
  template: `
    <svg
      [attr.width]="size * 1.3"
      [attr.height]="size"
      viewBox="0 0 186 143"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <svg:g id="Kawaii-Builder" fill="none" fillRule="evenodd">
        <svg:g id="Kawaii-speechBubble" transform="translate(-27 -57)">
          <svg:g id="kawaii-speechBubble" transform="translate(27 57)">
            <svg:path
              [attr.d]="paths.body"
              id="kawaii-speechBubble_body"
              [attr.fill]="color"
              fillRule="nonzero"
            />
            <svg:path
              [attr.d]="paths.shadow"
              id="kawaii-speechBubble_shadow"
              fill="#121212"
              fillRule="nonzero"
              opacity="0.07"
            />
            <svg:g Face [mood]="mood" transform="translate(60 46)" />
          </svg:g>
        </svg:g>
      </svg:g>
    </svg>
  `
})
export class SpeechBubbleComponent {
  @Input()
  size = 220;

  @Input()
  color = '#83D1FB';

  @Input()
  mood: Mood = 'happy';

  paths = paths;

  constructor() {}
}
