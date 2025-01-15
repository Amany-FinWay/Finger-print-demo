import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-document-scanner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './document-scanner.component.html',
  styleUrl: './document-scanner.component.scss'
})
export class DocumentScannerComponent {

  constructor(
    private router: Router
  ) {}

  onScanDocument() {
    this.router.navigate(['thank-you']);
  }
}
