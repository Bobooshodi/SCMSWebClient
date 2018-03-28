import { Component } from '@angular/core';

import { SettingsService } from './Services/settings.service';
import { Server } from './Models/Application/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private settingsService: SettingsService) { }
}
