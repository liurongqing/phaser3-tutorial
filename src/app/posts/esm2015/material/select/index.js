import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectCustomTriggerExample } from './select-custom-trigger/select-custom-trigger-example';
import { SelectDisabledExample } from './select-disabled/select-disabled-example';
import { SelectErrorStateMatcherExample } from './select-error-state-matcher/select-error-state-matcher-example';
import { SelectFormExample } from './select-form/select-form-example';
import { SelectHintErrorExample } from './select-hint-error/select-hint-error-example';
import { SelectMultipleExample } from './select-multiple/select-multiple-example';
import { SelectNoRippleExample } from './select-no-ripple/select-no-ripple-example';
import { SelectOptgroupExample } from './select-optgroup/select-optgroup-example';
import { SelectOverviewExample } from './select-overview/select-overview-example';
import { SelectPanelClassExample } from './select-panel-class/select-panel-class-example';
import { SelectResetExample } from './select-reset/select-reset-example';
import { SelectValueBindingExample } from './select-value-binding/select-value-binding-example';
import { SelectReactiveFormExample } from './select-reactive-form/select-reactive-form-example';
import { SelectInitialValueExample } from './select-initial-value/select-initial-value-example';
import * as i0 from "@angular/core";
export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHintErrorExample, SelectInitialValueExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectReactiveFormExample, SelectResetExample, SelectValueBindingExample, };
const EXAMPLES = [
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectInitialValueExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectReactiveFormExample,
    SelectResetExample,
    SelectValueBindingExample,
];
export class SelectExamplesModule {
}
SelectExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SelectExamplesModule });
SelectExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectExamplesModule, { declarations: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample], imports: [CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule], exports: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSelectModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDekIsa0JBQWtCLEVBQ2xCLHlCQUF5QixHQUMxQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0NBQzFCLENBQUM7QUFlRixNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBWnRCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsY0FBYztZQUNkLGVBQWU7WUFDZixtQkFBbUI7U0FDcEI7d0ZBS1Usb0JBQW9CLG1CQTdCL0IsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHlCQUF5QixhQUt2QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixhQXZCckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtrREFnQmQsb0JBQW9CO2NBYmhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7U2VsZWN0Q3VzdG9tVHJpZ2dlckV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LWN1c3RvbS10cmlnZ2VyL3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0RGlzYWJsZWRFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBTZWxlY3RFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGVcbn0gZnJvbSAnLi9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0Rm9ybUV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LWZvcm0vc2VsZWN0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdEhpbnRFcnJvckV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LWhpbnQtZXJyb3Ivc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdE11bHRpcGxlRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtbXVsdGlwbGUvc2VsZWN0LW11bHRpcGxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3ROb1JpcHBsZUV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LW5vLXJpcHBsZS9zZWxlY3Qtbm8tcmlwcGxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RPcHRncm91cEV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1vdmVydmlldy9zZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdFJlc2V0RXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtcmVzZXQvc2VsZWN0LXJlc2V0LWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RSZWFjdGl2ZUZvcm1FeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RJbml0aWFsVmFsdWVFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTZWxlY3RDdXN0b21UcmlnZ2VyRXhhbXBsZSxcbiAgU2VsZWN0RGlzYWJsZWRFeGFtcGxlLFxuICBTZWxlY3RFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIFNlbGVjdEZvcm1FeGFtcGxlLFxuICBTZWxlY3RIaW50RXJyb3JFeGFtcGxlLFxuICBTZWxlY3RJbml0aWFsVmFsdWVFeGFtcGxlLFxuICBTZWxlY3RNdWx0aXBsZUV4YW1wbGUsXG4gIFNlbGVjdE5vUmlwcGxlRXhhbXBsZSxcbiAgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlLFxuICBTZWxlY3RPdmVydmlld0V4YW1wbGUsXG4gIFNlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlLFxuICBTZWxlY3RSZWFjdGl2ZUZvcm1FeGFtcGxlLFxuICBTZWxlY3RSZXNldEV4YW1wbGUsXG4gIFNlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2VsZWN0Q3VzdG9tVHJpZ2dlckV4YW1wbGUsXG4gIFNlbGVjdERpc2FibGVkRXhhbXBsZSxcbiAgU2VsZWN0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBTZWxlY3RGb3JtRXhhbXBsZSxcbiAgU2VsZWN0SGludEVycm9yRXhhbXBsZSxcbiAgU2VsZWN0SW5pdGlhbFZhbHVlRXhhbXBsZSxcbiAgU2VsZWN0TXVsdGlwbGVFeGFtcGxlLFxuICBTZWxlY3ROb1JpcHBsZUV4YW1wbGUsXG4gIFNlbGVjdE9wdGdyb3VwRXhhbXBsZSxcbiAgU2VsZWN0T3ZlcnZpZXdFeGFtcGxlLFxuICBTZWxlY3RQYW5lbENsYXNzRXhhbXBsZSxcbiAgU2VsZWN0UmVhY3RpdmVGb3JtRXhhbXBsZSxcbiAgU2VsZWN0UmVzZXRFeGFtcGxlLFxuICBTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==