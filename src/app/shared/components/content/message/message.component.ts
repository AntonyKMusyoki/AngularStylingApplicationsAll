  
import { Component, Directive, ElementRef, contentChild, inject } from '@angular/core';

@Directive({
    selector: 'saa-message-title',
    standalone: false
})
export class MessageTitleDirective {}

@Directive({
    selector: 'saa-message-content',
    standalone: false
})
export class MessageContentDirective {}

@Component({
    selector: 'saa-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    standalone: false
})

export class MessageComponent {
    readonly messageContent = contentChild(MessageContentDirective);
    //In parent compent add properties and logic to provide ability to check 
    //against the current class on our host element. 
    //Inject ElementRef to access host element
    private hostRef = inject(ElementRef);
    //Add isLayout01 to check the host has the layout-01 class
    protected isLayout01 = this.hostRef.nativeElement.classList.contains('layout--01');
}
