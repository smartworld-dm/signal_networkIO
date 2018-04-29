import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { SignalService } from '@signal/signal';
import { VgAPI } from '@signal/player/src/core/services/vg-api';
import { AppSettings, AppSettingsService } from './settings';
import { IPlayable } from '@signal/player/src/core/vg-media/i-playable';

export interface INode {
  id: number;
  source: string;
  poster: string;
  name: string;
}

@Component({
  selector: 'intercept-player',
  template: `    
    
    <signal-player style="width: 100vw; height: 100vh" (onPlayerReady)="onPlayerReady($event)">
      <vg-overlay-play></vg-overlay-play>
      <vg-buffering></vg-buffering>
      
      <vg-scrub-bar >
        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
      </vg-scrub-bar>
      
      <vg-controls>

        <vg-fullscreen></vg-fullscreen>
      </vg-controls>
      <!--<p class="status">status : {{ video.id }} | {{ video.source }} | {{ video.poster }} | {{ video.position }}</p>-->

      <video #masterRef
             [vgMedia]="masterRef"
             [vgMaster]="true"
             id="singleVideo" 
             [poster]="video.poster" 
             preload="auto"
             [src]="video.source">
      </video>
    </signal-player>
  `,
  styleUrls: ['intercept.sass'],
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() video;

  @Input() autoPlay: boolean = false;

  @Input()
  set playResource(_resource: string) {
    this.changeResource(_resource, 'video/mp4');
  }
  @Output() playerReady = new EventEmitter();
  msg: any;
  status;
  // media;

  // settings: AppSettings;
  //
  // selectedNode: INode = { id: 1 } as INode;
  //
  // nodes: Array<INode> = [
  //   {id: 0, source: 'assets/media/l.mp4', poster: 'assets/media/poster.jpg', name: 'Left Node'},
  //   {id: 1, source: 'assets/media/r.mp4', poster: 'assets/media/poster.jpg',name: 'Right Node'},
  //   {id: 2, source: 'http://assets14.ign.com/videos/zencoder/2016/10/19/640/7fbd4dff4a907e2bb94b92c3372d6e40-500000-1476921194-w.mp4', poster: 'assets/media/poster.jpg',name: 'Node Three'},
  //   {id: 3, source: 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/3494db07bf4565c213110558c22da978-500000-1439510425-w.mp4', poster: 'assets/media/poster.jpg',name: 'Node Four'}
  // ];

  sources: Array<any>;

  currentFeed: INode;
  api: VgAPI = null;
  duration = 0;
  current = 0;
  media: IPlayable;
  state: any;

  constructor(
    private cd: ChangeDetectorRef,
    private signal: SignalService,
    private settingsService: AppSettingsService,
  ) {}

  ngOnInit() {
    // this.currentFeed = this.feeds[0];
    this.currentFeed = null;
  }

  ngOnChanges() {
    // console.log('changes!!!!!')
    if (this.api !== null) this.media = this.api.getDefaultMedia();
    this.cd.detectChanges();
  }

  onPlayerReady(api: VgAPI) {
    // console.log('it did call')

    this.media = api.getDefaultMedia();

    this.api = api;

    // this.setTime(60);

    this.playerReady.emit(api);

    // setTimeout(() => {
    //   this.playAfter(api);
    // }, 10000);
    //

    // console.log(this.media, this.api);
  }

  changeResource(source: string, type: string) {
    if (this.api) this.api.pause();
    this.sources = new Array<Object>();
    this.sources.push({
      src: source,
      type: type,
    });
    setTimeout(() => {
      this.api.getDefaultMedia().currentTime = 0;
      if (this.api && this.autoPlay) this.api.play();
    }, 300);
  }

  getApi(): VgAPI {
    return this.api;
  }
}
