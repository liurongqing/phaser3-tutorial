import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropCustomPreviewExample_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const movie_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", movie_r1.poster, i0.ɵɵsanitizeUrl)("alt", movie_r1.title);
} }
function CdkDragDropCustomPreviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CdkDragDropCustomPreviewExample_div_1_img_2_Template, 1, 2, "img", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", movie_r1.title, " ");
} }
/**
 * @title Drag&Drop custom preview
 */
export class CdkDragDropCustomPreviewExample {
    constructor() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
            },
            {
                title: 'Episode IX – The Rise of Skywalker',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg'
            }
        ];
    }
    // tslint:enable:max-line-length
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPreviewExample.ɵfac = function CdkDragDropCustomPreviewExample_Factory(t) { return new (t || CdkDragDropCustomPreviewExample)(); };
CdkDragDropCustomPreviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropCustomPreviewExample, selectors: [["cdk-drag-drop-custom-preview-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], [3, "src", "alt", 4, "cdkDragPreview"], [3, "src", "alt"]], template: function CdkDragDropCustomPreviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropCustomPreviewExample_div_1_Template, 3, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.movies);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag, i1.CdkDragPreview], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropCustomPreviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-custom-preview-example',
                templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNFaEUseUJBQ0Y7OztJQUR1Qix1REFBb0IsdUJBQUE7OztJQUYzQyw4QkFDRTtJQUFBLFlBQ0E7SUFBQSxzRkFDRjtJQUFBLGlCQUFNOzs7SUFGSixlQUNBO0lBREEsK0NBQ0E7O0FEQUo7O0dBRUc7QUFNSCxNQUFNLE9BQU8sK0JBQStCO0lBTDVDO1FBTUUsaUNBQWlDO1FBQ2pDLFdBQU0sR0FBRztZQUNQO2dCQUNFLEtBQUssRUFBRSxnQ0FBZ0M7Z0JBQ3ZDLE1BQU0sRUFBRSxvRkFBb0Y7YUFDN0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxNQUFNLEVBQUUsbUhBQW1IO2FBQzVIO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsTUFBTSxFQUFFLHFHQUFxRzthQUM5RztZQUNEO2dCQUNFLEtBQUssRUFBRSx5QkFBeUI7Z0JBQ2hDLE1BQU0sRUFBRSw0RUFBNEU7YUFDckY7WUFDRDtnQkFDRSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxNQUFNLEVBQUUsNkVBQTZFO2FBQ3RGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztnQkFDeEMsTUFBTSxFQUFFLDhFQUE4RTthQUN2RjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE1BQU0sRUFBRSxrR0FBa0c7YUFDM0c7WUFDRDtnQkFDRSxLQUFLLEVBQUUsOEJBQThCO2dCQUNyQyxNQUFNLEVBQUUsNEVBQTRFO2FBQ3JGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsTUFBTSxFQUFFLDJGQUEyRjthQUNwRztTQUNGLENBQUM7S0FNSDtJQUxDLGdDQUFnQztJQUVoQyxJQUFJLENBQUMsS0FBcUQ7UUFDeEQsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OEdBNUNVLCtCQUErQjtvRUFBL0IsK0JBQStCO1FDWDVDLDhCQUNFO1FBRG9DLHlJQUFzQixnQkFBWSxJQUFDO1FBQ3ZFLGdGQUNFO1FBR0osaUJBQU07O1FBSnFCLGVBQTRCO1FBQTVCLG9DQUE0Qjs7a0REVTFDLCtCQUErQjtjQUwzQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY3VzdG9tIHByZXZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgbW92aWVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJIC0gVGhlIFBoYW50b20gTWVuYWNlJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzQvNDAvU3Rhcl9XYXJzX1BoYW50b21fTWVuYWNlX3Bvc3Rlci5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgSUkgLSBBdHRhY2sgb2YgdGhlIENsb25lcycsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi8zLzMyL1N0YXJfV2Fyc18tX0VwaXNvZGVfSUlfQXR0YWNrX29mX3RoZV9DbG9uZXNfJTI4bW92aWVfcG9zdGVyJTI5LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJSUkgLSBSZXZlbmdlIG9mIHRoZSBTaXRoJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzkvOTMvU3Rhcl9XYXJzX0VwaXNvZGVfSUlJX1JldmVuZ2Vfb2ZfdGhlX1NpdGhfcG9zdGVyLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOC84Ny9TdGFyV2Fyc01vdmllUG9zdGVyMTk3Ny5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzMvM2MvU1dfLV9FbXBpcmVfU3RyaWtlc19CYWNrLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaScsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi9iL2IyL1JldHVybk9mVGhlSmVkaVBvc3RlcjE5ODMuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJSSAtIFRoZSBGb3JjZSBBd2FrZW5zJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2EvYTIvU3Rhcl9XYXJzX1RoZV9Gb3JjZV9Bd2FrZW5zX1RoZWF0cmljYWxfUG9zdGVyLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBWSUlJIC0gVGhlIExhc3QgSmVkaScsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi83LzdmL1N0YXJfV2Fyc19UaGVfTGFzdF9KZWRpLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJWCDigJMgVGhlIFJpc2Ugb2YgU2t5d2Fsa2VyJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2EvYWYvU3Rhcl9XYXJzX1RoZV9SaXNlX29mX1NreXdhbGtlcl9wb3N0ZXIuanBnJ1xuICAgIH1cbiAgXTtcbiAgLy8gdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGhcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDx7dGl0bGU6IHN0cmluZywgcG9zdGVyOiBzdHJpbmd9W10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMubW92aWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0IGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IG1vdmllIG9mIG1vdmllc1wiIGNka0RyYWc+XG4gICAge3ttb3ZpZS50aXRsZX19XG4gICAgPGltZyAqY2RrRHJhZ1ByZXZpZXcgW3NyY109XCJtb3ZpZS5wb3N0ZXJcIiBbYWx0XT1cIm1vdmllLnRpdGxlXCI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=