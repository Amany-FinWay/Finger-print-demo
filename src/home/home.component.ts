import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  test!:string;

  constructor(
    private router: Router
  ) {}


  onStartService() {
    this.router.navigate(['finger-print']);
  }
}
