import 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';


export default {
  type: Phaser.AUTO,
  parent: 'content',
  // width: 650,
  // height: 350,
  width: 512,
  height: 384,
  backgroundColor: '#000035',
  scale: {
    zoom: 1.5,
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