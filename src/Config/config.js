import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin';


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
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  roundPixels: true,
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
    global: [{
      plugin: InputTextPlugin,
      key: 'InputTextPlugin',
      start: true,
    }],
  },
};