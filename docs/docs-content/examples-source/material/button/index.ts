import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {ButtonOverviewExample} from './button-overview/button-overview-example';
import {ButtonTypesExample} from './button-types/button-types-example';

export {
  ButtonOverviewExample,
  ButtonTypesExample,
};

const EXAMPLES = [
  ButtonOverviewExample,
  ButtonTypesExample,
];

@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  entryComponents: EXAMPLES,
})
export class ButtonExamplesModule {
}
