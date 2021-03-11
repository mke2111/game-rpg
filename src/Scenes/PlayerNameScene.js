import Phaser from 'phaser';
import config from '../Config/config';


export default class PlayerNameScene extends Phaser.Scene {
  constructor() {
    super('PlayerName');
  }

  create() {
    const { width, height } = this.scale;
    this.add.text(width *0.5, height * 0.1, 'Register', {
      fontSize: '58px',
      color: '#ff00e5',
      fontFamily: 'Franklin Gothic Medium',
      fontStyle: 'bolder'
    })
    .setOrigin(0.5);

    const element = document.getElementById('name-form');
    element.style.display = 'block';

    element.addEventListener('click', (event) => {
      if (event.target.name === 'saveNameBtn') {
        const inputName = document.getElementById('name');


        if (inputName.value !== '') {
          element.style.display = 'none';
          this.scene.start('Title', { player: inputName.value });
        }
      } else if (event.target.name === 'back') {
        element.style.display = 'none';
        this.scene.start('Title');
      }
    });
  }
}
