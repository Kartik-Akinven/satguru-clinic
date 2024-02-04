import { AfterViewInit, Component, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.initOwlCarousel();
  }

  ngOnDestroy(): void {
    $('.hero-slider').owlCarousel('destroy');
  }

  private initOwlCarousel(): void {
    $('.hero-slider').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 500,
      autoplayTimeout: 3500,
      singleItem: true, 
      autoplayHoverPause: true,
      items: 1,
      nav: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      dots: false,
    });
  }
}
