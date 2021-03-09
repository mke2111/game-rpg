// import 'phaser';
import Player from '../Player';
import Enemy from '../Enemy';
import gameMap from '../../assets/character/map.json';
import rpgImage from '../../assets/character/RPG Nature Tileset.png';
import tileImage from '../../assets/images/tiles.png';
import Resource from '../Resource';
import { sendData } from '../ScoreApi';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
    this.enemies = [];
  }

  init(data) {
    this.playerName = data.player;
  }

  preload () {
    // load images
    Player.preload(this);
    Enemy.preload(this);
    Resource.preload(this);
    this.load.image('tiles', tileImage);
    this.load.tilemapTiledJSON('map', gameMap);
  }

  create () {
    this.add.image(380, 300, 'background');


    const map = this.make.tilemap({ key: 'map' });
    this.map = map;
    const tileset = map.addTilesetImage('tiles', 'tiles', 0, 100);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 30, 60);

    // don't go out of the map
    layer1.setCollisionByProperty({ collides: true });
    this.matter.world.convertTilemapLayer(layer1);

    this.map.getObjectLayer('Resources').objects.forEach(resource => new Resource({ scene: this, resource }));
    this.map.getObjectLayer('Enemies').objects.forEach(enemy => this.enemies.push(new Enemy({ scene: this, enemy })));

    this.player = new Player({
      scene: this, x: 100, y: 100, texture: 'female', frame: 'townsfolk_f_idle_2',
    });

    // limit camera to map
    this.cameras.main.setBounds(0, 0, map.widthInPixels + 100, map.heightInPixels + 300);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true; // avoid tile bleed


    this.scoreText = this.add.text(250, 10, '', { fontSize: '22px', fill: '#000' });

    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });
  }

  gameOver() {
    if (this.player.dead || this.enemies.every(enemy => enemy.dead)) {
      const postScore = this.player.totalScore || '0';
      sendData(this.playerName, postScore);
      this.scene.start('Score', { score: this.player.totalScore ? this.player.totalScore : 0, player: this.playerName });
    }
  }

  generateEnemy() {
    // this.map.getObjectLayer('Resources').objects.forEach(resource => new Resource({ scene: this, resource }));
    this.map.getObjectLayer('Enemies').objects.forEach(enemy => this.enemies.push(new Enemy({ scene: this, enemy })));
  }

  update() {
    this.enemies.forEach(enemy => enemy.update());
    this.player.update();
    // this.generateEnemy();
    this.scoreText.setText(`Score: ${this.player.totalScore ? this.player.totalScore : 0}`);
    this.gameOver();
  }
};