import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('TitleScene');
  }

 
  create () {
    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2  - 70, 'blueButton1', 'blueButton2', 'Play', 'GameScene');
    
    // Options
    // this.optionsButton = new Button(this, config.width/2, config.height/2 + 20, 'blueButton1', 'blueButton2', 'Options', 'OptionsScene');
    
    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height/2  + 100, 'blueButton1', 'blueButton2', 'Credits', 'CreditsScene');
    
    this.model = this.sys.game.globals.model;
    // if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
    //   this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
    //   this.bgMusic.play();
    //   this.model.bgMusicPlaying = true;
    //   this.sys.game.globals.bgMusic = this.bgMusic; 
    // }
  }
};