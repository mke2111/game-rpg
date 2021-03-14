import 'phaser';

import blueButton1 from '../assets/ui/blue_button02.png';
import blueButton2 from '../assets/ui/blue_button03.png';
import phaserLogo from '../assets/nowornever.png';
import box from '../assets/ui/grey_box.png';
import checkedBox from '../assets/ui/blue_boxCheckmark.png';
// import bgMusic from '../assets/TownTheme.ogg';
import tiles from '../assets/images/tiles.png';
import characters from '../assets/images/preload-bar.png';
import background from '../assets/bg.jpg';
 
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('PreloaderScene');
  }

  init () {
    this.readyCount = 0;
  }
 
  preload () {
    // add logo image
    // this.add.image(290, 50, 'logo');
  
    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
  
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: (width / 2),
      y: height / 2 - 50,
      text: 'Hunter Game Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
  
    var percentText = this.make.text({
      x: (width / 2),
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
  
    var assetText = this.make.text({
      x: (width / 2),
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.1);
  
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
  
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
  
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  
    // load assets needed in our game
    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton2);
    this.load.image('phaserLogo', phaserLogo);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox);
    // this.load.image('bgMusic', bgMusic);
    this.load.image('tiles', tiles, 16, 16);
    this.load.image('characters', characters, 16, 16);
    this.load.image('background', background);

  }
   
  ready () {
    this.scene.start('TitleScene');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('TitleScene');
    }
  }
};