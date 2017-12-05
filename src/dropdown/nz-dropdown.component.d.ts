import { OnInit, OnDestroy, Renderer2, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ConnectionPositionPair } from '../core/overlay/index';
export declare type NzPlacement = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare class NzDropDownComponent implements OnInit, OnDestroy, AfterViewInit {
    private _renderer;
    protected _changeDetector: ChangeDetectorRef;
    hasFilterButton: boolean;
    _triggerWidth: number;
    _placement: NzPlacement;
    _dropDownPosition: 'top' | 'bottom';
    _positions: ConnectionPositionPair[];
    _subscription: Subscription;
    _nzOrigin: any;
    _nzMenu: any;
    nzTrigger: 'click' | 'hover';
    nzClickHide: boolean;
    nzVisible: boolean;
    nzVisibleChange: EventEmitter<boolean>;
    nzPlacement: NzPlacement;
    _onClickEvent(): void;
    _onMouseEnterEvent(e: any): void;
    _onMouseLeaveEvent(e: any): void;
    _hide(): void;
    _show(): void;
    _onPositionChange(position: any): void;
    _clickDropDown($event: any): void;
    _setTriggerWidth(): void;
    _onVisibleChange: (visible: boolean) => void;
    _startSubscribe(observable$: Observable<boolean>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    readonly _hasBackdrop: boolean;
    constructor(_renderer: Renderer2, _changeDetector: ChangeDetectorRef);
}
