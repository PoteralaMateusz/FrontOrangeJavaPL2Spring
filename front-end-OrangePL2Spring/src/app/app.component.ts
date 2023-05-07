import {Component, OnInit} from '@angular/core';
import {Bread} from "./entity/Bread";
import {BreadService} from "./bread.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end-OrangePL2Spring';

  public breads: Bread[] = [];

  constructor(private breadService: BreadService) {
  }

  ngOnInit(): void {
        this.getBreads();
    }

  getBreads(): void {
    this.breadService.getBreads().subscribe(
      (response: Bread[]) => {
        console.log("Pobierasz API");
        console.log(response);
        this.breads = response;
      }, (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    )
  }


}
