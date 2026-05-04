import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-navbar.html',
  styleUrls: ['./bottom-navbar.css'],
})
export class BottomNavbarComponent {
  @Input() currentPage: string = 'dashboard';
  @Input() inHousehold: boolean = false;

  isActive(page: string): boolean {
    return this.currentPage === page;
  }
}
