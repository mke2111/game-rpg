import 'phaser';
import Button from '../Objects/Button';
 
export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('OptionsScene');
  }
 
  create () {
  //   this.model = this.sys.game.globals.model;
    
  //   this.text = this.add.text(250, 30, 'Options', { fontSize: 32 });
  //   this.musicButton = this.add.image(200, 90, 'checkedBox');
  //   this.musicText = this.add.text(250, 75, 'Music Enabled', { fontSize: 24 });
    
  //   this.soundButton = this.add.image(200, 170, 'checkedBox');
  //   this.soundText = this.add.text(250, 150, 'Sound Enabled', { fontSize: 24 });
    
  //   this.musicButton.setInteractive();
  //   this.soundButton.setInteractive();
    
  //   this.musicButton.on('pointerdown', function () {
  //     this.model.musicOn = !this.model.musicOn;
  //     this.updateAudio();
  //   }.bind(this));
    
  //   this.soundButton.on('pointerdown', function () { 	
  //     this.model.soundOn = !this.model.soundOn;
  //     this.updateAudio();
  //   }.bind(this));

  //   this.menuButton = new Button(this, 350, 220, 'blueButton1', 'blueButton2', 'Back', 'TitleScene');
    
  //   this.updateAudio();
  // }

  // updateAudio() {      
  //   if (this.model.musicOn === false) {
  //     this.musicButton.setTexture('box');
  //     this.sys.game.globals.bgMusic.stop();
  //     this.model.bgMusicPlaying = false;
  //   } else {
  //     this.musicButton.setTexture('checkedBox');
  //     if (this.model.bgMusicPlaying === false) {
  //       this.sys.game.globals.bgMusic.play();
  //       this.model.bgMusicPlaying = true;
  //     }
  //   }
     
  //   if (this.model.soundOn === false) {
  //     this.soundButton.setTexture('box');
  //   } else {
  //     this.soundButton.setTexture('checkedBox');
  //   }
  }
};