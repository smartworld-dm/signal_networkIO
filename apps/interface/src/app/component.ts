import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

    <div id="elm-container" style="height: 100%;">
      <div class="style-elements" style="width: 100%; height: 100%;">

        <div class="el root__732912787" style="pointer-events: auto; display: flex; flex-direction: column; height: 100%; padding: 0px 18px; position: relative; left: 0px; top: 0px; box-sizing: border-box;">
          <h2 class="heading">INTERFACE_</h2>

          <div class="el zed__3402792823" style="pointer-events: auto; display: flex; flex-direction: column; flex: 1 1 0px; position: relative; left: 0px; top: 0px; box-sizing: border-box;">
            <navigation></navigation>
            <router-outlet></router-outlet>
            <controls></controls>
          </div>
          <div></div>
          <!--<div><img src="/images/Background/12.jpg" style="height: 1px; left: 100%; opacity: 1e-05; overflow: hidden; position: fixed; top: 100%; transform: translate(-1px, -1px); width: 1px; z-index: -10000;"></div>-->
          <div><img src="/assets/bg2.jpg" style="height: 1px; left: 100%; opacity: 1e-05; overflow: hidden; position: fixed; top: 100%; transform: translate(-1px, -1px); width: 1px; z-index: -10000;"></div>
          <div>
            <div class="el zed__3402792823" style="pointer-events: auto; display: flex; flex-direction: column; position: relative; left: 0px; top: 0px; box-sizing: border-box;">
              <div class="el zed__3402792823" style="display: block; flex-shrink: 1; position: fixed; left: -1px; top: -1px; box-sizing: border-box; animation: none; background-image: url(&quot;/images/Background/7.jpg&quot;); background-size: cover; bottom: -1px; opacity: 1; right: -1px; z-index: -9; background-position: center bottom;"></div>
              <div class="el zed__3402792823" style="display: block; flex-shrink: 1; position: fixed; left: -1px; top: -1px; box-sizing: border-box; animation: fadeIn 2s ease-in 50ms forwards; background-image: url(&quot;/images/Background/12.jpg&quot;); background-size: cover; bottom: -1px; opacity: 0; right: -1px; z-index: -9; background-position: center bottom;"></div>
            </div>
          </div>
          <div></div>
          <div>
            <div class="el overlay__3376308453" style="display: block; width: 100%; height: 100%; position: fixed; left: 0px; top: 0px; box-sizing: border-box; pointer-events: none; z-index: 900;"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

  `,
  styles: [
    `
      .zed__3402792823 {
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
        position: relative;
        left: 0;
        top: 0;
        box-sizing: border-box;
    }
      .heading {
        position: relative;
        text-align: center;
        color: #74FAA2;
        /*background-color: #242424;*/
        /*font-family: Fira Mono;*/
        font-weight: 100;
        font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
        z-index: 1000;
      }
  `]
})
export class AppComponent {



  constructor() {
  }



}
