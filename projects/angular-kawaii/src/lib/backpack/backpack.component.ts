import { Component, OnInit, Input } from '@angular/core';
import {Mood} from '../common/face/moods';
import {paths} from './backpack.paths';

@Component({
  selector: 'Backpack',
  template: `
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      [attr.width]="size * 0.63"
      [attr.height]="size"
      viewBox="0 0 138 218"
    >
      <svg:defs>
        <svg:path id="pocket__shape-path" [attr.d]="paths.pocketShapePath" />
        <svg:path id="pocket__shape__shadow-path" [attr.d]="paths.pocketShapeShadowPath" />
      </svg:defs>
      <svg:g id="kawaii-backpack" transform="translate(0 -1)">
        <svg:g
          id="right-shoulder-strap"
          transform="matrix(-1 0 0 1 125.901 13.054)"
        >
          <svg:path
            id="right-shoulder-strap__back"
            [attr.fill]="color"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <svg:path
            id="right-shoulder-strap__back__shadow"
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.4"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <svg:path
            id="right-shoulder-strap__front"
            [attr.fill]="color"
            d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
          />
        </svg:g>
        <svg:g id="left-shoulder-strap" transform="translate(11.896 13.054)">
          <svg:path
            id="left-shoulder-strap__back"
            [attr.fill]="color"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <svg:path
            id="left-shoulder-strap__back_shadow"
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.4"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <svg:path
            id="left-shoulder-strap__front"
            [attr.fill]="color"
            d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
          />
        </svg:g>
        <svg:g id="hanging-loop" transform="translate(47.585)">
          <svg:path
            id="hanging-loop__back"
            [attr.fill]="color"
            d="M16.853 7.931h9.913L21.81.991z"
          />
          <svg:path
            id="hanging-loop__back_shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.14"
            d="M16.853 7.931h9.913L21.81.991z"
          />
          <svg:path
            id="hanging-loop__shape"
            [attr.fill]="color"
            [attr.d]="paths.hangingLoopShape"
          />
        </svg:g>
        <svg:g id="main-compartment" transform="translate(0 26.617)">
          <svg:path
            id="main-compartment__shape"
            [attr.fill]="color"
            [attr.d]="paths.mainCompartmentShape"
          />
          <svg:path
            id="main-compartment__bottom-stripe"
            fill="#121212"
            fillRule="nonzero"
            [attr.d]="paths.mainCompartmentBottomStripe"
            opacity="0.07"
          />
          <svg:g Face
            [mood]="mood"
            transform="translate(36 70)"
          />
          <svg:path
            id="main-compartment__top"
            fill="#121212"
            fillRule="nonzero"
            [attr.d]="paths.mainCompartmentTop"
            opacity="0.07"
          />
        </svg:g>
        <svg:g id="pocket" transform="translate(12.888 135.981)">
          <svg:mask id="mask-4" fill="#fff">
            <svg:use xlink:href="#pocket__shape-path" />
          </svg:mask>
          <svg:use
            id="pocket__shape"
            [attr.fill]="color"
            xlink:href="#pocket__shape-path"
          />
          <svg:mask id="mask-6" fill="#fff">
            <svg:use xlink:href="#pocket__shape__shadow-path" />
          </svg:mask>
          <svg:use
            id="pocket__shape__shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.14"
            xlink:href="#pocket__shape__shadow-path"
          />
          <svg:g id="Group-6" mask="url(#mask-6)">
            <svg:g transform="translate(0 15.862)">
              <svg:path
                id="Rectangle-7"
                fill="#33363B"
                opacity="0.408"
                d="M0 2.974h113.014v2.974H0z"
              />
              <svg:path
                id="Rectangle-7-Copy"
                fill="#555D67"
                opacity="0.408"
                d="M0 0h113.014v2.974H0z"
              />
              <svg:path
                id="Rectangle-8"
                fill="#6D727A"
                opacity="0.587"
                d="M107.066 0h5.948v5.948h-5.948z"
              />
              <svg:path id="zip" fill="#49505A" [attr.d]="paths.zip" opacity="0.746" />
            </svg:g>
          </svg:g>
          <svg:g id="brand" mask="url(#mask-6)">
            <svg:g transform="translate(78.737 39.368)">
              <svg:path id="Rectangle-6" fill="#FFFDFD" d="M0 0h27.789v18.526H0z" />
              <svg:path
                id="Rectangle-6-Copy"
                fill="#121212"
                opacity="0.298"
                d="M1.158 1.158h25.474v16.211H1.158z"
              />
              <svg:path
                id="brand"
                fill="#FFF"
                d="M2.316 2.316h23.158v13.895H2.316z"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
    </svg>
  `
})
export class BackpackComponent implements OnInit {

  @Input()
  size = 240;

  @Input()
  color = '#FFD882';

  @Input()
  mood: Mood = 'happy';

  paths = paths;

  constructor() { }

  ngOnInit() { }
}