import {NgModule} from '@angular/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {
  BottomSheetOverviewExample,
  BottomSheetOverviewExampleSheet
} from './bottom-sheet-overview/bottom-sheet-overview-example';

export {
  BottomSheetOverviewExample,
  BottomSheetOverviewExampleSheet,
};

const EXAMPLES = [
  BottomSheetOverviewExample,
  BottomSheetOverviewExampleSheet,
];

@NgModule({
  imports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatListModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  entryComponents: EXAMPLES,
})
export class BottomSheetExamplesModule {
}
