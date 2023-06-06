import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-manage-cpf',
  templateUrl: './manage-cpf.component.html',
  styleUrls: ['./manage-cpf.component.css']
})
export class ManageCpfComponent {
  protected cpf = "";
  protected valid = false;

  protected isCPF()
  {
    var continua = false;
    var soma1 = 0;
    var aux1 = 10;


    if (this.cpf.length == 11)
    {
      this.valid = true;
    }

    else
    {
      this.valid = false;
    }


    // if (this.cpf.length == 11)
    // {
    //   for (let i = 0; i < 9; i++)
    //   {
    //     var element = this.cpf[i];
    //       soma1 += element * aux1;
    //       aux1--;


    //     var dig1 = 11 - (soma1 % 11)

    //     if (dig1 > 9)
    //     {
    //       dig1 = 0
    //     }

    //     if (dig1 == Number(cpf[9]))
    //     {
    //       continua = true
    //     }
    //   }
    // }


    // if (continua)
    // {
    //   var soma2 = 0;
    //   var aux2 = 11;

    //   for (let i = 0; i < 10; i++)
    //   {
    //     var element = this.cpf[i];
        
    //     soma2 += element * aux2;
    //     aux2--;
    //   }



    // }
   
    
  }

  protected cpfChanged(event: any)
  {
    this.cpf = event;
    this.isCPF()
  }
  


}
