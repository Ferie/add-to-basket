import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing';
import { GoBackComponent } from './go-back.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoBackComponent', () => {
    let component: GoBackComponent;
    let fixture: ComponentFixture<GoBackComponent>;
    let location: SpyLocation;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GoBackComponent],
            imports: [RouterTestingModule],
            providers: [
                { provide: Location, useClass: SpyLocation }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoBackComponent);
        component = fixture.componentInstance;
        location = TestBed.get(Location);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should go back to previous page', () => {
    //     spyOn(location, 'back');
    //     component.goBack();
    //     // fixture.detectChanges();
    //     expect(component.goBack).toBeDefined();
    //     expect(location.back).toHaveBeenCalled();
    // });
});
