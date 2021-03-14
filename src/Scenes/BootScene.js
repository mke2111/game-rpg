import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/nowornever.png');
    this.load.image('preloaderBar', 'assets/images/preload-bar.png');
  }

  create () {
    this.scene.start('PreloaderScene');
  }
};