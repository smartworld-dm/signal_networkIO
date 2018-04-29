import { Component, OnInit } from '@angular/core';
import { SignalService } from '@signal/signal'

import { VgAPI } from '@signal/player/src/core/services/vg-api'


export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {


  playlist: Array<IMedia> = [
    {
      title: 'Mercurial',
      src: 'assets/media/nike.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Sure Thing',
      src: 'assets/media/sure.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Hate or Glory',
      src: 'assets/media/hate.mp4',
      type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[ this.currentIndex ];
  api: VgAPI;

  constructor() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[ this.currentIndex ];
  }

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }

}
