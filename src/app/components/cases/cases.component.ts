import { AfterViewInit, Component, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.initOwlCarousel();
  }

  ngOnDestroy(): void {
    $('.pf-details-slider').owlCarousel('destroy');
  }

  private initOwlCarousel(): void {
    $('.pf-details-slider').owlCarousel({
      items:1,
      autoplay:false,
      autoplayTimeout:5000,
      smartSpeed: 400,
      autoplayHoverPause:true,
      loop:true,
      merge:true,
      nav:true,
      dots:false,
      // singleItem: true,
      navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
    });
  }
}
