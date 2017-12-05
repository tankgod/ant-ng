import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
export declare class NzThDirective implements OnInit, OnDestroy {
    private _elementRef;
    private nzTableComponent;
    _el: HTMLElement;
    nzWidth: any;
    nzCheckbox: any;
    nzExpand: any;
    constructor(_elementRef: ElementRef, nzTableComponent: NzTableComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
