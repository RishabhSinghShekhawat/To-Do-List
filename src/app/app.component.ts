import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // url="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
   name=""
  number=0;
  priority=""
   numbers:any=[]
   date=''
   a=''
   count=0;
    add()
    {
      var obj={
        status:true,
        name:this.name,
        priority:this.priority,
        date:new Date()
      }
      this.numbers.push(obj);
      this.name="";

    
    }
    delete(i)
    {
      this.numbers.splice(i,1);
    }
    checkstatus(i)
    
    {
      
      this.numbers[i].status=!this.numbers[i].status;
      
    }
    
  
  count2()
  {
    let count=0;
    for(let number of this.numbers)
    {
      if(number.status)
      count++;
    }
    return count;
  };
  
  
}