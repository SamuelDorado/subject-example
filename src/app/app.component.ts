import { Component } from '@angular/core';
import { ErrorService } from './error.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  status:string;
  constructor(private errService: ErrorService){
    this.status = '';
  }
  
  ngOnInit(){
    this.errService.errorBus.subscribe((error:string)=>{
      this.status = error;
    })
  }

  notifyError(err:string){
      this.errService.sendError(err)
  }
}
