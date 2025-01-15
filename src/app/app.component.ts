import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FingerPrintSignalRService } from '../services/finger-print-signal-r.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'finger-print-simulator';
  
  constructor(private fingerPrintSignalRService: FingerPrintSignalRService) { }

  ngOnInit(): void {
    this.fingerPrintSignalRService.addReceiveFingerprintListener();
  }
}
