import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
    isOpen = false;
    @Input() modalId: string;
    @Input() modalTitle: string;
    @Input() blocking = false;
    // @HostListener('keyup') onMouseEnter(event) {
    //     this.keyup(event);
    // }

    constructor(public _modalService: ModalService) { }

    ngOnInit() {
        this._modalService.addModal(this);
    }

    close(checkBlocking = false): void {
        this._modalService.close(this.modalId, checkBlocking);
    }

    // private keyup(event: KeyboardEvent): void {
    //     if (event.keyCode === 27) {
    //         this._modalService.close(this.modalId, true);
    //     }
    // }
}
