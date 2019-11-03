# AngularKawaii

<div align="center" markdown="1">
  <img src="https://raw.githubusercontent.com/miukimiu/react-kawaii/master/docs/images/react-kawaii-logo%402x.png" width="450">
</div>

This is the Angular port of the awesome [react-kawaii](https://github.com/miukimiu/react-kawaii) component library.
All credits goes to [Elizabet Oliveira](https://github.com/miukimiu).


## Example

# ![React Kawaii Example](https://github.com/miukimiu/react-kawaii/blob/master/docs/images/react-kawaii-example.gif?raw=true)

# Contribute

Contributions are more than welcome. You can take an existing component from the react-kawaii project and port it to Angular. 
It is basically a copy & paste, with some exceptions:
* We need to add a svg prefix so that the Angular compiler knows that we'r rendering a SVG. So `<g ...></g>` turns into `<svg:g ..></svg:g>`.
* We need to tell Angular that we are using attribute bindings instead of the default property binding. So `<svg:g [d]="paths" ...>` 
  has to be `<svg:g [attr.d]="paths"...>`
* We can't use component selectors if we are splitting our kawaiis into multiple components. SVG does not like that.
  We have to use atttribute selectors for that.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

# Run

```
// 1.)
npm install angular-kawaii

// 2.) Import the AngularKawaiiModule

import { AngularKawaiiModule } from 'angular-kawaii';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularKawaiiModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}

// 3.) Usage

<Planet mood="happy" color="#A6E191"></Planet>

```

