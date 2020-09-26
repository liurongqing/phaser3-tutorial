import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarBasicExample} from './toolbar-basic/toolbar-basic-example';
import {ToolbarMultirowExample} from './toolbar-multirow/toolbar-multirow-example';
import {ToolbarOverviewExample} from './toolbar-overview/toolbar-overview-example';

export {
  ToolbarBasicExample,
  ToolbarMultirowExample,
  ToolbarOverviewExample,
};

const EXAMPLES = [
  ToolbarBasicExample,
  ToolbarMultirowExample,
  ToolbarOverviewExample,
];

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  entryComponents: EXAMPLES,
})
export class ToolbarExamplesModule {
}
