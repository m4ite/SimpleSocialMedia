import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit{

    @Input() breakLineOnInput = true;
    @Output() valueChanged = new EventEmitter<string>();
    
    protected inputStyle = "color: black;"
    protected inputText = "";
    protected initialState = true;


    ngOnInit(): void
    {
      this.updateInput()
    }

    protected updateInput() {
      if (this.initialState) {
        this.inputText = "Escreva sua CPF..."
        this.inputStyle = "color: gray;"
        return
      }
      this.inputStyle = "color: black;"
    }


    protected cpfChanged() {
      this.updateInput()
      this.valueChanged.emit(this.inputText)
    }

    protected cpfClick() {
      if (!this.initialState)
        return
      this.initialState = false;
      this.inputText = "";
      this.updateInput();
    }
  
    protected cpfFocusout() {
      if (this.inputText !== "")
        return
      this.initialState = true
      this.updateInput()
    }
}
