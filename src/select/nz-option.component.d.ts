import { OnDestroy } from '@angular/core';
import { NzSelectComponent } from './nz-select.component';
export declare class NzOptionComponent implements OnDestroy {
    private _nzSelect;
    _value: string;
    _label: string;
    _disabled: boolean;
    nzValue: string;
    nzLabel: string;
    nzDisabled: boolean;
    constructor(_nzSelect: NzSelectComponent);
    ngOnDestroy(): void;
}
