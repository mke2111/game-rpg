import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';


export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 604,
  height: 400,
  // width: 380,
  // height: 300,
  backgroundColor: '#000035',
  scale: {
    zoom: 1.6,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision',
      },
    ],
  },
};