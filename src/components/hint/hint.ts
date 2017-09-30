import { Component } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';

@Component({
  selector: 'hint',
  templateUrl: 'hint.html'
})
export class HintComponent {

  hintList = [{ name: 'Check Errors', action: 'chkErr' }, { name: 'Next Clue', action: 'nxtClue' }, { name: 'Solve Next', action: 'solveNxt' }, { name: 'Solve Puzzle', action: 'solvePuzzle' }, { name: 'Get More Hints', action: 'getExtraHints' }];
  constructor(private viewCtrl: ViewController,public event: Events) {
    console.log('Hello HintComponent Component');
  }
  hintAction(action: string) {
    if (action === 'getExtraHints') {
        this.viewCtrl.dismiss({action:action,incrHint:1});        
    }
    else{
      this.viewCtrl.dismiss({action:action})
    }
  }

}
