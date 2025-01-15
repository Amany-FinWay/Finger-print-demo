import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-finger-print',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './finger-print.component.html',
  styleUrl: './finger-print.component.scss'
})
export class FingerPrintComponent {

  constructor(
    private router: Router
  ) {}

  onScanFingerPrint() {
    this.router.navigate(['document-scanner']);
  }
}
