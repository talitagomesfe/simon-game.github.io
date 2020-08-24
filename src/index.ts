const WINNIN_GROUND = 10;
const ACTIVATION_DELAY = 700;

class GameApp {
  public gameRunning: boolean;
    
  gameState: boolean;
  constructor() {
    
  }
}

class GameButton {
  public active: boolean = false;
  public element: HTMLElement;

  constructor(color: string) {
    this.element = document.querySelector(`.game-button_${color}`);
    this.element.addEventListener('mousedown', this.turnOnThenOff.bind(this));
  }
  
  turnOn() {
    this.element.classList.add("game-button--activated");
  }

  turnOff() {
    this.element.classList.remove("game-button--activated");
  }

  turnOnThenOff() {
    this.turnOn();
    setTimeout(() => {
      this.turnOff();
    }, ACTIVATION_DELAY)
    return function(){
    };
  }

}

class GameController {
  gameRunning: boolean = false;

  public gameButtons: GameButton[];
  public gameSequence: GameButton[];
  public playerSequence: GameButton[];
  public colors: string[];
  
  
  constructor() {
    this.gameButtons = []; 
    this.gameRunning = true;
    this.colors = ["pink", "blue", "yellow", "green"];

    for (let x of this.colors) {
      const currentColor = new GameButton(x);
      this.gameButtons.push(currentColor);
    }
      
  }

  // método para pegar um index aleatorio do gameButtons e adicionar no gameSequence TO DO
  // método para executar o turnOnThenOff de todos os buttons do gameSequence (utilizar o ACTIVATION_DELAY)

  // Responsibility:
  // - Random buttom
  // - Add random buttom to gameSequence
  // - Get playerButton
  // - Add playerButtom to playerSequence
  // - Compare gameSquence == playerSequence
  // - Set loseScreen = true
  // - Call Rounds
}

class Rounds {

  public rounds: number;

  constructor() {

  }
  // Responsibility:
  // - Set gameRunning = true/false
  // - Verify if rounds >= winningRound
  // - Set winScreen = true
}



class WinScreen {

  public  winScreen: boolean;

  constructor() {

  }
  // Responsibility:
  // - Set winScreen = false;
  // - Set gameRunning = true/false;
}



class LoseScreen {

  public loseScreen: boolean;

  constructor() {

  }
  // Responsibility:
  // - Set loseScreen = false;
  // - Set gameRunning = true/false;
}

new GameController();