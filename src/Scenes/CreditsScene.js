/* eslint-disable no-unused-expressions */
import Phaser from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Roy Mukuye \n \n Github: @mke2111 \n \n Twitter: @Roymkenya \n \n LinkedIn: Roy Mukuye', { fontSize: '26px', fill: '#fff' });
    this.infoByText = this.add.text(0, 0, 'This Hunter game is created using Phaser-3 \n \n Acknowledgements \n \n OpenGameArt \n \n GameDevAcademy \n \n Ourcade channel - Youtube ', { fontSize: '22px', fill: '#f00' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.infoByText,
      this.zone,
    );

    this.madeByText.setY(1000);
    this.infoByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      onComplete() {
        this.destroy;
      },
    });

    this.infoByTween = this.tweens.add({
      targets: this.infoByText,
      y: -100,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: () => {
        this.madeByTween.destroy;
        this.scene.start('Title');
      },
    });
  }
}