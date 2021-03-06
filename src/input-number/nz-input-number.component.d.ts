import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzInputNumberComponent implements ControlValueAccessor {
    private _elementRef;
    private _renderer;
    _el: HTMLElement;
    _value: number;
    _size: string;
    _prefixCls: string;
    _step: number;
    _precisionStep: number;
    _precisionFactor: number;
    _displayValue: any;
    _disabledUp: boolean;
    _disabledDown: boolean;
    onChange: any;
    onTouched: any;
    _inputNumber: ElementRef;
    nzPlaceHolder: string;
    nzMin: number;
    nzMax: number;
    nzDisabled: boolean;
    nzSize: string;
    nzStep: number;
    _numberUp($event: any): void;
    _numberDown($event: any): void;
    nzValue: number;
    _userInputChange(): void;
    _checkValue(): void;
    _getBoundValue(value: any): any;
    _isNumber(value: any): boolean;
    toPrecisionAsStep(num: any): any;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    private _updateValue(value, emitChange?);
}
