import { Component, OnInit } from '@angular/core'
import { SignalService } from '@signal/signal'
import { VgAPI } from '@signal/player/src/core/services/vg-api'

@Component({
	selector: 'ctrl-player',
	template: `
    <div  style="text-align:center">
      <h2 class="heading">CTRL_ | status : paused</h2>
      <img class="on-top" width="150" src="assets/ctrl.png">
      <div>
        <!--<input class="heading" type="text" #msgInput name="" value="">-->
        <!--<button class="heading" (click)="sendMsg(msgInput.value)">Send</button>-->
        <!--<br>-->
        <button class="heading huge play" (click)="sendStatus('play')">play</button>
        <button class="heading huge pause" (click)="sendStatus('pause')">pause</button>
        <button class="heading huge reset" (click)="sendStatus('reset')">reset</button>

        <p class="heading" style="z-index:1001;">the status is: {{status}}</p>
      </div>
    </div>


    <signal-player style="width: 100vw; height: 100vh" (onPlayerReady)="onPlayerReady($event)">
      <vg-overlay-play></vg-overlay-play>
      <vg-buffering></vg-buffering>

      <vg-scrub-bar >
        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
      </vg-scrub-bar>

      <video [vgMedia]="media" #media id="singleVideo" preload="auto">
        <source src="assets/media/dual.mp4" type="video/mp4">
      </video>
    </signal-player>
  `,
	styleUrls: ['ctrl-player.scss']
})
export class CtrlPlayerComponent implements OnInit {
	msg: any
	status
	media

	constructor(private signal: SignalService) {}

	ngOnInit() {
		console.log('a wild msg appeared 1')
		this.signal.getMessage().subscribe(msg => {
			console.log('a wild msg appeared 2 ')
			this.msg = '1st ' + msg
		})

		this.signal.getStatus().subscribe(status => {
			console.log('status is: ' + status)
			this.status = status
			if (status === 'play') {
				//this.media.play()
			}
			if (status === 'pause') {
				//this.media.pause()
			}
			if (status === 'reset') {
				//this.media.seekTime(0)
			}
		})
	}

	sendMsg(msg) {
		console.log('msg', msg)
		this.signal.sendMessage(msg)
	}

	sendStatus(status) {
		this.signal.sendStatus(status)
	}

	onPlayerReady(api: VgAPI) {
		this.media = api.getDefaultMedia()
	}
}
