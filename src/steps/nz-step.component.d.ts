import { OnInit, ElementRef, AfterViewInit, Renderer2, TemplateRef, OnDestroy } from '@angular/core';
import { NzStepConnectService } from './nz-step-connect.service';
import { Subscription } from 'rxjs/Subscription';
export declare class NzStepComponent implements OnInit, AfterViewInit, OnDestroy {
    private erf;
    private nzStepConnectService;
    private _renderer;
    _status: string;
    _ifCustomStatus: boolean;
    _currentIndex: any;
    _el: any;
    _last: boolean;
    _processDot: boolean;
    _direction: string;
    _processDotEventSubscription: Subscription;
    _directionEventSubscription: Subscription;
    _currentEventSubscription: Subscription;
    _errorIndexObjectSubscription: Subscription;
    index: number;
    stepStatusClass: any;
    nzIcon: TemplateRef<any>;
    _stepsTail: ElementRef;
    nzStatus: string;
    nzTitle: string;
    nzDescription: string;
    _current: any;
    initClassMap(): void;
    init(): void;
    constructor(erf: ElementRef, nzStepConnectService: NzStepConnectService, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
