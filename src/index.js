import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import PlayerNameScene from './Scenes/PlayerNameScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import ScoreScene from './Scenes/ScoreScene';
import Model from './Model';

class Game extends Phaser.Game {
  constructor () {
    super(config);

    const model = new Model();
    this.globals = { model };

    this.scene.add('Boot', BootScene);
    this.scene.add('PreloaderScene', PreloaderScene);
    this.scene.add('TitleScene', TitleScene);
    this.scene.add('PlayerNameScene', PlayerNameScene);
    this.scene.add('OptionsScene', OptionsScene);
    this.scene.add('CreditsScene', CreditsScene);
    this.scene.add('GameScene', GameScene);
    this.scene.add('ScoreScene', ScoreScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();