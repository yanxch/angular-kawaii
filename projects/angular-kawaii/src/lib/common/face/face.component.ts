import { Component, Input } from '@angular/core';
import { paths as facePaths } from './face.paths';
import { Mood } from './moods';

@Component({
  selector: "[Face]",
  template: `
    <svg:g id="kawaii-face">
      <svg:defs>
        <svg:path [attr.d]="facePaths.defs" id="kawaii-face__path-1"></svg:path>
      </svg:defs>
      <svg:g id="kawaii-face__mouth" transform="translate(18.000000, 16.000000)">
        <svg:g
          *ngIf="
            mood === 'blissful' || mood === 'lovestruck' || mood === 'excited'
          "
          id="kawaii-face__mouth__joy"
          transform="translate(0.000000, 1.000000)">
          <svg:mask id="kawaii-face__mask-2" fill="white">
            <svg:use xlink:href="#kawaii-face__path-1"></svg:use>
          </svg:mask>
          <svg:use
            id="Combined-Shape"
            fill="#000000"
            xlink:href="#kawaii-face__path-1">
          </svg:use>
          <svg:path
            [attr.d]="facePaths.tongue"
            id="kawaii-face__tongue"
            fill="#E74144"
            mask="#kawaii-face__mask-2"
            transform="translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)">
          </svg:path>
        </svg:g>

        <svg:path
          *ngIf="mood === 'happy'"
          [attr.d]="facePaths.happy"
          id="kawaii-face__mouth__happy"
          fill="#000000">
        </svg:path>

        <svg:ellipse
          *ngIf="mood === 'shocked'"
          id="kawaii-face__mouth__shocked"
          cx="15"
          cy="14"
          rx="9"
          ry="10"
          fill="#000000">
        </svg:ellipse>

        <svg:path
          *ngIf="mood === 'sad' || mood === 'ko'"
          [attr.d]="facePaths.sad"
          id="kawaii-face__mouth__sad"
          fill="#000000"
          transform="translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
        ></svg:path>
      </svg:g>
      <svg:g
        id="kawaii-face__blush"
        transform="translate(0.000000, 15.000000)"
        fill="#000000"
        opacity="0.2">
        <svg:circle id="Oval" cx="3" cy="3" r="3"></svg:circle>
        <svg:circle id="Oval" cx="63" cy="3" r="3"></svg:circle>
      </svg:g>
      <svg:g
        id="kawaii-face__eyes"
        transform="translate(2.000000, 0.000000)"
        fill="#000000">
        <svg:g
          *ngIf="mood === 'blissful'"
          id="kawaii-face__eyes__arc"
          transform="translate(1.000000, 0.000000)">
          <svg:path [attr.d]="facePaths.bliss1" id="Fill-5"></svg:path>
          <svg:path [attr.d]="facePaths.bliss2" id="Fill-5"></svg:path>
        </svg:g>

        <svg:g
          *ngIf="
            mood === 'happy' ||
            mood === 'sad' ||
            mood === 'shocked' ||
            mood === 'excited'
          "
          id="kawaii-face__eyes__circle"
          transform="translate(1.000000, 2.000000)">
          <svg:circle id="Oval-3" cx="4.5" cy="4.5" r="4.5"></svg:circle>
          <svg:circle id="Oval-3" cx="56.5" cy="4.5" r="4.5"></svg:circle>
        </svg:g>

        <svg:g
          *ngIf="mood === 'lovestruck'"
          id="kawaii-face__eyes__heart"
          transform="translate(0.000000, 2.000000)"
          fillRule="nonzero">
          <svg:path [attr.d]="facePaths.lovestruck1" id="Shape"></svg:path>
          <svg:path [attr.d]="facePaths.lovestruck2" id="Shape"></svg:path>
        </svg:g>

        <svg:g
          *ngIf="mood === 'ko'"
          id="kawaii-face__eyes__ko"
          transform="translate(1.500000, 1.000000)"
          fillRule="nonzero">
          <svg:path [attr.d]="facePaths.ko1" id="Cross"></svg:path>
          <svg:path [attr.d]="facePaths.ko2" id="Cross"></svg:path>
        </svg:g>
      </svg:g>
    </svg:g>
  `
})
export class FaceComponent {
  @Input()
  mood: Mood;

  facePaths = facePaths;
}

