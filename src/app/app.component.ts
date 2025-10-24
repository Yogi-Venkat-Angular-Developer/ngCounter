import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incDec';
  name = "Angular 16 & 17"
  img = "https://cdn.imgbin.com/12/16/4/imgbin-angular-logo-red-and-white-letter-a-logo-r33rdU6ZgjMm1njGNw6sFsV5b.jpg";
  topic = "Property-Binding"
  proImg = "https://www.ifourtechnolab.com/pics/What-is-Property-binding-and-how-to-implement-it-in-Angular.webp"
  isAvaliable = false;
  isEven = true;
  count : number = 0;

checkEvenOdd(){
  if(this.count % 2 == 1){
    this.isEven = false
  }else{
    this.isEven = true
  }
}

  inc(){
    if(this.count >= 10){
      this.isAvaliable = true;
    }else{
      this.count++
    }
}
  dec(){
    if(this.count <= 0){
      this.isAvaliable = true;
    }else{
      this.count--
    }
  }
  
  res(){
    this.count = 0;
    location.reload()
  }
}

