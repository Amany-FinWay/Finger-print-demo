import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FingerPrintSignalRService } from '../services/finger-print-signal-r.service';

@Component({
  selector: 'app-document-scanner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './document-scanner.component.html',
  styleUrl: './document-scanner.component.scss'
})
export class DocumentScannerComponent {

  constructor(
    private router: Router,
    private service: FingerPrintSignalRService
  ) {}

  onScanDocument() {
    //this.router.navigate(['thank-you']);
    this.service.A4Scanner().subscribe({
      next: (res: any) => {
        console.log(res);
        
      }
    })
  }
}
