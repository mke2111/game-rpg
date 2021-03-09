import 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';


export default {
  type: Phaser.AUTO,
  parent: 'content',
  // width: 524,
  // height: 265,
  width: 550,
  height: 270,
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