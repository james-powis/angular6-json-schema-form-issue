import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue';
  yourCompoundInputObject = {
    "schema": {
      "type": "object",
      "properties": {
        "phone_numbers": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "number": { type: "string" }
            }
          }
        }
      }
    },
    "layout": [ {
      "type": "array",
      "display": "flex",
      "flex-direction": "row",
      "items": [ {
        "type": "div",
        "displayFlex": true,
        "flex-direction": "row",
        "items": [
          { "key": "phone_numbers[].number", "notitle": true, "placeholder": "Phone Number" }
        ]
      } ]
    } ],
    "data": {
      "phone_numbers": [
        { "number": "11111111"},
        { "number": "22222222"},
        { "number": "333333333"}
      ]
    }
  }
}
