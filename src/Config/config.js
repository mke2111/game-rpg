import 'phaser';
// import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';


export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  backgroundColor: '#000035',
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  // plugins: {
  //   scene: [
  //     {
  //       plugin: PhaserMatterCollisionPlugin,
  //       key: 'matterCollision',
  //       mapping: 'matterCollision',
  //     },
  //   ],
  // },
};