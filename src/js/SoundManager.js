import { Howl, Howler } from "howler";

class SoundManager {
  constructor() {
    this.sounds = {
      pageTransition: new Howl({ src: ['/sounds/page-transition.wav'], volume: 0.5 }),
      menuOpen: new Howl({ src: ['/sounds/menu-open.mp3'], volume: 0.5 }),
      menuClose: new Howl({ src: ['/sounds/menu-close.mp3'], volume: 0.5 }),
      paginationClick: new Howl({ src: ['/sounds/pagination-click.mp3'], volume: 0.5 }),
      darkMode: new Howl({ src: ['/sounds/darkmode.wav'], volume: 0.5 }),
      lightMode: new Howl({ src: ['/sounds/lightmode.wav'], volume: 0.5 }),
      backgroundLight: new Howl({ src: ['/sounds/background-light.mp3'], loop: true, volume: 0.3 }),
      backgroundDark: new Howl({ src: ['/sounds/background-dark.mp3'], loop: true, volume: 0.3 }),
    };

    this.isMuted = false;
    this.currentBackground = null;
  }

  play(name) {
    if (!this.isMuted && this.sounds[name]) {
      this.sounds[name].play();
    }
  }

  switchBackground(mode) {
    if (this.currentBackground) {
      this.currentBackground.fade(this.currentBackground.volume(), 0, 1000);
      setTimeout(() => this.currentBackground.stop(), 1000);
    }
    if (!this.isMuted) {
      if (mode === "dark") {
        this.currentBackground = this.sounds.backgroundDark;
      } else {
        this.currentBackground = this.sounds.backgroundLight;
      }
      this.currentBackground.volume(0);
      this.currentBackground.play();
      this.currentBackground.fade(0, 0.3, 1000);
    }
  }

  stopAllModeSounds() {
    Howler._howls.forEach(howl => {
      if (
        howl._src &&
        (howl._src.includes('darkmode.wav') || howl._src.includes('lightmode.wav'))
      ) {
        howl.stop();
      }
    });
  }
  

  
  muteAll() {
    this.isMuted = true;
    Howler.mute(true);
  }

  unmuteAll() {
    this.isMuted = false;
    Howler.mute(false);
  }
}

export const soundManager = new SoundManager();
