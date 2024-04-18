import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrl: './the-toolbar-content.component.css'
})
export class TheToolbarContentComponent {

}
