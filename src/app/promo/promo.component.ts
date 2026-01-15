import { Component, ElementRef, inject } from '@angular/core';

@Component({
    selector: 'saa-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss'],
    standalone: false
})

export class PromoComponent {
    //Get Reference to host element so we can read its class list
    //use inject() function to inject ElementRef class. 
    //This gives us access the host element 
    private hostRef = inject(ElementRef);
    //isColor01 is a boolean property set based on whether the 
    //host element has teh color-01 class on it.
    //Use nativeElement to access the host HTML element then see if
    //its class list contains the color--01 class
    protected isColor01 = this.hostRef.nativeElement.classList.contains('color--01');
}
