import 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';


export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 524,
  height: 265,
  backgroundColor: '#000035',
  scale: {
    zoom: 1.7,
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