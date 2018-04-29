import { Component, NgZone, OnInit } from '@angular/core';
import { SignalService } from '@signal/signal';
import { VgAPI } from '@signal/player/src/core/services/vg-api';
import { AppSettings, AppSettingsService } from './settings';
import { ElectronService } from 'ngx-electron';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
export interface INode {
  id: number;
  source: string;
  poster: string;
  position: string;
}

@Component({
  selector: 'rcvr-player',
  template: `    

    <div class="head " style='display: none;'>
      <h2 class="heading sig-text ui-text">_INTERCEPT</h2>
      <img class="badge" width="50" src="assets/rcvr.png" style="-webkit-app-region: drag">
    </div>

    <div *ngIf="isDev()">
      <p class="status left sig-text ui-text" style="bottom: 80px">state : {{ media.state }}</p>


      <p class="status left sig-text ui-text">status : {{ selectedNode.id }} | {{ selectedNode.source }} | {{ selectedNode.poster }} | {{ selectedNode.position }}</p>
      <p class="status text sig-text ui-text" [ngClass]="selectedNode.id === 0 ? 'left' : 'right'">status : {{status || 'pending ...'}} node : {{ selectedNode.id | json }}</p>
      <p class="time text sig-text ui-text" [ngClass]="selectedNode.id === 0 ? 'right' : 'left'">{{ media?.currentTime }} / {{ media?.duration}}</p>

    </div>
    
    <div *ngIf="isDev()" class="nodes sig-text ui-text">
      

      <!--<li (click)="media?.state === 'paused' ? api.play() : api.pause() ">{{ media?.state === 'paused' ? 'play' : 'pause' }}</li>-->



      <dot (click)="reset()"><i class="icon-control-start icons"></i></dot>

      
      <dot (click)="media?.state === 'paused' ? play() : pause() "><i [ngClass]="media?.state === 'paused' ? 'icon-control-play' : 'icon-control-pause'" class="icons"></i></dot>
      <dot (click)="end()"><i class="icon-control-end icons"></i></dot> 
      <!--<dot (click)="pause()"><i  class="icon-control-pause icons"></i></dot>-->

    </div>
    <intercept-player [video]="selectedNode" (playerReady)="getVideoApi($event)"></intercept-player>
  `,
  styleUrls: ['intercept.sass'],
})
export class RcvrPlayerComponent implements OnInit {

  dev = true;
  msg: any;
  status;
  media;

  // store: Store;

  settings: AppSettings;

  api: VgAPI;

  masterVideo: string = 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/d9de372f3d373d06d4e770e73af44cb1-500000-1439510486-w.mp4';

  selectedNode: INode = { id: null } as INode;

  nodes: Array<INode> = [
    {
      id: 0,
      source: 'assets/media/l.mp4',
      poster: 'assets/media/dots.gif',
      position: 'BW—LT',
    },
    {
      id: 1,
      source: 'assets/media/r.mp4',
      poster: 'assets/media/lost.jpg',
      position: 'BW—RT',
    },
    {
      id: 2,
      source: 'assets/media/0.mp4',
      poster: 'assets/media/bars.png',
      position: 'FW—01',
    },
    {
      id: 3,
      source: 'assets/media/1.mp4',
      poster: 'assets/media/circle.jpg',
      position: 'FW—02',
    },
  ];

  constructor(
    private _ngZone: NgZone,
    // private store:Store,
    private signal: SignalService,
    private electron: ElectronService,
    private _hotkeysService: HotkeysService,
    private settingsService: AppSettingsService,
  ) {
    // this.electron.ipcRenderer.on('send-node', (event, arg) => {
    //   this._ngZone.run(() => {
    //     const reply = `Asynchronous message reply: ${arg} & ${event}`;
    //     this.selectedNode.id = arg;
    //   });
    // });



    this.electron.ipcRenderer.on('send-node', (event, arg) => {
      const reply = `Asynchronous message reply: ${arg} & ${event}`;
      this.selectedNode.id = arg;
    });
    // this.electron.ipcRenderer.on('send-node', (event, arg) => {
    //   this._ngZone.run(() => {
    //     const reply = `Asynchronous message reply: ${arg}`;
    //     this.selectedNode.id = arg;
    //     // console.log('from ipc', arg)
    //   })
    //
    //
    //
    // }


    this._hotkeysService.add(
      new Hotkey('shift+z', (event: KeyboardEvent): boolean => {
        console.log('toggled dev');
        this.dev = !this.dev;
        return false; // Prevent bubbling
      }, undefined, 'Toggle Meta Data')
    );

    this._hotkeysService.add(
      new Hotkey('shift+1', (event: KeyboardEvent): boolean => {
        console.log('switched to 0');
        this.onSelectNode(0);
        return false; // Prevent bubbling
      }, undefined, 'Select First Feed')
    );

    this._hotkeysService.add(
      new Hotkey('shift+2', (event: KeyboardEvent): boolean => {
        console.log('switched to 1');
        this.onSelectNode(1);
        return false; // Prevent bubbling
      }, undefined, 'Select Second Feed')
    );


    this._hotkeysService.add(
      new Hotkey('shift+3', (event: KeyboardEvent): boolean => {
        console.log('switched to 2');
        this.onSelectNode(2);
        return false; // Prevent bubbling
      }, undefined, 'Select Third Feed')
    );

    this._hotkeysService.add(
      new Hotkey('shift+4', (event: KeyboardEvent): boolean => {
        console.log('switched to 3');
        this.onSelectNode(3);
        return false; // Prevent bubbling
      }, undefined, 'Select Fourth Feed')
    );


    this._hotkeysService.add(
      new Hotkey('space', (event: KeyboardEvent): boolean => {
        console.log('Secret message');
        this.togglePlay();
        return false;
  }, undefined, 'Toggle Play'));
  }


  ngOnInit() {
    console.log('outside electron ')
    
    if (this.electron.isElectronApp) {
      console.log('inside electron ')
      // this.electron.ipcRenderer.on('set-node', (event, node) => {
      //   console.log('set-node: ', node)
      // });

      this.electron.ipcRenderer.send('save-index', 'from angular')

      this.electron.ipcRenderer.on('save-index', (event, arg) => {
        console.log('inside ipc renderer ')
        console.log('saving index to ', arg)
      })


      this.electron.ipcRenderer.on('asynchronous-reply', (event, index) => {
        console.log(index) // prints "pong"
          this._ngZone.run(() => {
            const reply = `Asynchronous message reply: ${index}`;
            this.onSelectNode(index)
            // this.selectedNode.id = arg;
            console.log(reply)
          });
      })
      this.electron.ipcRenderer.send('asynchronous-message', 'ping')

  
    }

    // this.settingsService.getSettings().subscribe(settings => {
    //   this.settings = settings;
    //   const node = this.settings.node;
    //   console.log('in settings func');
    //   this.onSelectNode(node);
    // }, () => null);

    // console.log('a wild msg appeared 1')

    console.log('this is a good try!')

    this.signal.getMessage().subscribe(msg => {
      this.msg = '1st ' + msg;
    });

    this.signal.getStatus().subscribe(status => {
      // console.log('status is: ' + status)
      this.status = status;
      if (status === 'play') {
        this.togglePlay()
        // this.media.state === 'paused' ? this.api.play() : this.api.pause();
        // this.media.play();
      }
      if (status === 'pause') {
        this.togglePlay()
        // this.media.state === 'paused' ? this.api.play() : this.api.pause();
        // this.media.pause();
      }
      if (status === 'reset') {
        this.media.seekTime(0);
      }
    });
  }

  isDev() {
    return this.dev;
  }

  getVideoApi(api: VgAPI) {
    console.log('why not us');
    this.api = api;
    this.media = api.getDefaultMedia();
  }

  onSelectNode(index) {
    if (index >= 0) {
      // console.log(`the index is : ${node`);
      if (this.electron.isElectronApp) {
        const msg = `is electron so setting node to : ${index}`;
        console.log(msg);
        this.electron.ipcRenderer.send('set-node', index);
      }
      this.selectedNode = this.nodes[index];
    } else {
      this.selectedNode = { id: null } as INode;
    }
  }
  togglePlay() {
    this.media.state === 'paused' ? this.api.play() : this.api.pause();
  }

  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }

  reset() {
    this.media.pause();
    this.media.seekTime(0);
  }
  end() {
    this.media.pause();
    this.media.seekTime(100, true);
  }

  saveSettings(node): void {
    // console.log('setting to :' + node)
    this.settingsService.saveSettings({ node, isFromLocalStorage: true });
  }

  deleteSettings(): void {
    this.settingsService.deleteSettings();
  }
}
