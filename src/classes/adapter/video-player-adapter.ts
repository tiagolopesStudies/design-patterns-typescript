import { AudioPlayer } from './audio-player'
import { VideoPlayer } from './video-player'

export class VideoPlayerAdapter extends AudioPlayer {
  private videoPlayer: VideoPlayer

  constructor() {
    super()
    this.videoPlayer = new VideoPlayer()
  }

  playMedia(filename: string): void {
    console.log('Adapter converting audio play request to video play request.')
    this.videoPlayer.playMedia(filename)
  }
}
