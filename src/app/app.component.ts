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
      type: "object",
      properties: {
        "phone_numbers": {
          type: "array",
          items: {
            type: "object",
            properties: {
              number: { type: "string" },
              type: { type: "string" },
            }
          }
        }
      }
    },
    "data": {
      "phone_numbers": [
        { "number": "702-123-4567", "type": "cell" },
        { "number": "702-987-6543", "type": "work" }
      ], "notes": ""
    }
  }
}
