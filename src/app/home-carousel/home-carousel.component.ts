
import { Component, OnInit, Input } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
})
export class HomeCarouselComponent implements OnInit {
 
  constructor() {
    
  }

  ngOnInit(): void {
    
    const track = document.querySelector<HTMLElement>('.carouselTrack');
    const slides = Array.from(track.children as HTMLCollectionOf<HTMLElement>);
    //next Button
    const womenBtn = document.querySelector('.rightBtn');
    //prev Button
    const menBtn = document.querySelector('.leftBtn');
    const slidewidth = slides[0].getBoundingClientRect().width;
    const setSlidePosition = (slide, index) => {
      slide.style.left = slidewidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform =
        'translateX(-' + (targetSlide as HTMLElement).style.left + ')';
      currentSlide.classList.remove('currentSlide');
      targetSlide.classList.add('currentSlide');
    };

    womenBtn.addEventListener('click', (e) => {
      const currentSlide = track.querySelector<HTMLElement>('.currentSlide');
      const nextSlide = currentSlide.nextElementSibling;
      // const amountToMove = (nextSlide as HTMLElement).style.left;
      // track.style.transform = 'translateX(-' + amountToMove + ')';
      // currentSlide.classList.remove('currentSlide');
      // nextSlide.classList.add('currentSlide');
      moveToSlide(track, currentSlide, nextSlide);
      menBtn.classList.remove('is-hidden');
      womenBtn.classList.add('is-hidden');
    });

    menBtn.addEventListener('click', (e) => {
      const currentSlide = track.querySelector<HTMLElement>('.currentSlide');
      const prevSlide = currentSlide.previousElementSibling;
      moveToSlide(track, currentSlide, prevSlide);
      womenBtn.classList.remove('is-hidden');
      menBtn.classList.add('is-hidden');
    });
    

  }
}
