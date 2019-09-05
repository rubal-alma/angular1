import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	/*let app= proceed.module('DemoApp', []);

  app.controller('DemoController', function($scope) {
    $scope.IsVisible = false;

    $scope.ShowHide = function() {
      $scope.IsVisible = $scope.IsVisible = true;
    }
  });*/
  title = 'potato';
  IsVisible=false;
  public temp = false;
  public First="";
  public Last="";
  public Gender="";
  public City="";
  public PinCode="";

  showHide(){
    console.log("showHide called");
    this.IsVisible=true;
    this.temp = true;

  }
}
