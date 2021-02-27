import 'phaser';
import config from '../Config/config';
 
export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }
 
  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Roy Mukuye', { fontSize: '26px', fill: '#fff' });
    this.infoByText = this.add.text(0, 0, 'This RPG game is created using Phaser-3', { fontSize: '22px', fill: '#f00'});
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
    
    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );
    
    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.infoByText,
      this.zone
    );
    
    this.madeByText.setY(1000);
    this.infoByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });
     
    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.infoByTween = this.tweens.add({
      targets: this.infoByText,
      y: -100,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};