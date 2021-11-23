import { ShoppingCart } from './../models/shoppingcart';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  router: string;
  constructor(private _router: Router, public shoppingCart: ShoppingCart) {
    this.router = _router.url;
  }

  ngOnInit(): void {




    var menDropdown = document.getElementsByClassName('menDropdown-btn');
    var womenDropdown = document.getElementsByClassName('womenDropdown-btn');
    var i;

    for (i = 0; i < menDropdown.length; i++) {
      menDropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var menDropdownContent = this.nextElementSibling;
        if (menDropdownContent.style.display === 'block') {
          menDropdownContent.style.display = 'none';
        } else {
          menDropdownContent.style.display = ' block';
        }
      });
    }

    for (i = 0; i < womenDropdown.length; i++) {
      womenDropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var womenDropdownContent = this.nextElementSibling;
        if (womenDropdownContent.style.display === 'block') {
          womenDropdownContent.style.display = 'none';
        } else {
          womenDropdownContent.style.display = ' block';
        }
      });
    }
  }
  openFilter() {
    document.getElementById('myFilter').style.width = '25%';
  }
  openFilter2() {
    document.getElementById('myFilter2').style.width = '100%';
  }
  closeFilter() {
    document.getElementById('myFilter').style.width = '0';
  }
  closeFilter2() {
    document.getElementById('myFilter2').style.width = '0';
  }
  viewMore() {
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('viewBtn');
    var dots = document.getElementById('dots');
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = '+VIEW MORE';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = '-VIEW LESS';
      moreText.style.display = 'inline';
    }
  }
  viewMore2() {
    var moreText2 = document.getElementById('more2');
    var btnText2 = document.getElementById('viewBtn2');
    var dots2 = document.getElementById('dots2');
    if (dots2.style.display === 'none') {
      dots2.style.display = 'inline';
      btnText2.innerHTML = '+VIEW MORE';
      moreText2.style.display = 'none';
    } else {
      dots2.style.display = 'none';
      btnText2.innerHTML = '-VIEW LESS';
      moreText2.style.display = 'inline';
    }
  }
}
