import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private scroller: ViewportScroller) { }

  bottomPage() {
    this.router.navigate(['/about'], { relativeTo: this.route });
    setTimeout(() => { this.scroller.scrollToAnchor("myAnchor") }, 500);


  }

  toTop() {
    window.scrollTo(0, document.body.scrollTop);
  }

  onToggleSidenav() {
    let visibility = (document.querySelector('.primaryNav') as HTMLElement).getAttribute("data-visible")
    const myBtn = document.querySelector('.myBtn') as HTMLElement;

    let sideNav = document.querySelector('.primaryNav') as HTMLElement;

    
    if (visibility === 'false') {

      visibility = 'true';
      sideNav.setAttribute('data-visible', 'true')
      myBtn.setAttribute('aria-expanded', 'true')

    }
    // | | if its visible, hide it
    else {
      visibility = 'false';
      sideNav.setAttribute('data-visible', 'false')
      myBtn.setAttribute('aria-expanded', 'false')

    }
  }

  ngOnInit(): void {
    let primeNav = document.querySelector('.primaryNav') as HTMLElement;
    let menuBtn = document.querySelector('.myBtn') as HTMLElement;
    window.onclick = (ev: MouseEvent): any => {
      if (ev.target != menuBtn) {
        primeNav.setAttribute("data-visible", 'false');
        menuBtn.setAttribute("aria-expanded", 'false');
      }

    }
  }

}

