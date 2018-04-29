import { Component, OnInit } from '@angular/core';
import { SignalService } from "@signal/signal";
import { VgAPI } from "@signal/player/src/core/services/vg-api";

@Component({
  selector: 'controls',
  templateUrl: './controls.html',
  styleUrls: ['./controls.scss']
})
export class ControlsComponent implements OnInit {
  status
  media

  constructor(private signal: SignalService) { }

  ngOnInit() {
    this.signal.getStatus().subscribe(status => {
      console.log('status is: ' + status)
      this.status = status
      if (status === 'play') {
        this.media.play()
      }
      if (status === 'pause') {
        this.media.pause()
      }
      if (status === 'reset') {
        this.media.seekTime(0)
      }
    })
  }

  sendStatus(status) {
    this.signal.sendStatus(status)
  }

  onPlayerReady(api: VgAPI) {
    this.media = api.getDefaultMedia()
  }

}
