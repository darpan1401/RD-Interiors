import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;

  constructor(private elementRef: ElementRef, private router: Router) {
    // Close the menu when navigation ends
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  // Toggle menu function
  toggleMenu() {
    this.showMenu = !this.showMenu;
    const navLinks = document.querySelector('.navbar-links');
    if (navLinks) {
      navLinks.classList.toggle('show');
    }
  }

  // HostListener to listen to scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.showMenu) {
      this.closeMenu();
    }
  }

  // HostListener to detect clicks outside of the navbar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showMenu) {
      this.closeMenu();
    }
  }

  // Function to close the menu
  closeMenu() {
    this.showMenu = false;
    const navLinks = document.querySelector('.navbar-links');
    if (navLinks) {
      navLinks.classList.remove('show');
    }
  }
}
