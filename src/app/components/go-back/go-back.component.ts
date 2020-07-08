import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'ra-go-back',
    templateUrl: './go-back.component.html',
    styleUrls: ['./go-back.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoBackComponent {
    @Input() public goBackText = 'Back';

    constructor(private location: Location) { }

    public goBack() {
        this.location.back();
    }
}
