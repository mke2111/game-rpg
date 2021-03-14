import Phaser from 'phaser';
// import config from './Config/config';

export default class PlayerNameScene extends Phaser.Scene {
  constructor() {
    super('PlayerNameScene');
  }

  create() {
    const { width, height } = this.scale;
    this.add.text(width *0.5, height * 0.1, 'Enter your name -- press Save Name \n Play as Guest -- press Guest', {
      fontSize: '18px',
      color: '#fff',
      fontFamily: 'Franklin Gothic Medium',
      fontStyle: 'bolder'
    })
    .setOrigin(0.5);

    // const element = document.getElementById('name-form');
    // element.style.display = 'block';

    // element.addEventListener('click', (event) => {
    //   if (event.target.name === 'saveNameBtn') {
    //     const inputName = document.getElementById('name');

    //     if (inputName.value !== '') {
    //       element.style.display = 'none';
    //       this.scene.start('Game', { player: inputName.value });
    //     } else {
    //       const warning = document.getElementById('warning');
    //       warning.style.display = 'block';

    //       setInterval(() => {
    //         warning.style.display = 'none';
    //       }, 6000);
    //     }
    //   } else if (event.target.name === 'back') {
    //     element.style.display = 'none';
    //     this.scene.start('Game');
    //   }
    // });

    // this.titleText = this.add.text(
    //   (config.width / 8), (config.height / 2) - 200,
    //   'Welcome to SpaceShooter game', { fontSize: '42px', fill: '#ffffff' },
    // );
    // this.enterNamesText = this.add.text(
    //   (config.width / 4), (config.height / 2) - 50,
    //   'Enter your name: ', { fontSize: '32px', fill: '#ffffff' },
    // );
    const wdth = 900;
    const hight = 600;
    this.namesForm = this.add.dom((wdth / 2), (hight / 2) + 50).createFromCache('namesForm');
    this.namesForm.addListener('click');
    this.namesForm.on('click', event => {
      const clickedElement = event.target;
      if (clickedElement.name === 'continueBtn') {
        const enteredNames = document.querySelector('#name').value;
        // if (isNamesValid(enteredNames)) {
          this.sys.game.globals.playerNames = enteredNames;
          this.namesForm.removeListener('click');
          this.scene.start('GameScene');
        // } else {
        //   this.enterNamesText.setText('Your name is required');
        // }
      }
   
 });

    // this.add.text(200, 230, '(You cannot play without a name.)', { fontSize: 10, color: '#000' });
    // const input = this.add.dom(300, 260, 'input', {
    //   type: 'text',
    //   name: 'nameField',
    //   fontSize: '32px',
    //   backgroundColor: '#fff',
    //   required: true,
    // });
    // input.scaleX = 0.5;
    // input.scaleY = 0.6;

    // const playButton = this.add.dom(300, 300, 'button', {
    //   type: 'submit',
    // }, 'Start Game');
    // playButton.addListener('click');
    // playButton.on('click', () => {
    //   if (input.node.value) {
    //     this.scene.start('GameScene', { player: input.node.value });
    //   }
    // });

  }
}
