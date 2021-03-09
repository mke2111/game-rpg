import { retrieveData } from '../ScoreApi';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  init(data) {
    this.finalScore = data.score;
    this.thePlayer = data.player;
  }

  create() {
    this.add.text(150, 20, `Game over, ${this.thePlayer}. \n Score: ${this.finalScore}. \n \n Refresh page to play again.`);
    this.add.text(200, 100, 'Top scores', { color: '#f00', fontSize: '20px' });
    retrieveData().then((data) => {
      const dataStyle = {
        color: '#000',
        fontSize: '18px ',
      };

      data.sort((x, y) => y.score - x.score);
      const space = 20;
      for (let i = 0; i < 10; i += 1) {
        if (data[i] !== undefined) {
          this.add.text(60, 130 + (space * i),
            `${data[i].user} --  ${data[i].score}`,
            dataStyle);
        }
      }
    });
  }
}