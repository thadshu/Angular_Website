import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  constructor(private http:HttpClient){

  }
  ngOnInit()
  {
    this.lisafunc().subscribe(
      response => {
        console.log(response.data);
      }
    )
    
  }

  lisafunc():Observable<any>
  {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
