import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrls: ['expansion-expand-collapse-all-example.css'],
})
export class ExpansionExpandCollapseAllExample {
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
