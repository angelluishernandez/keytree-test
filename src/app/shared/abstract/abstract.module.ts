import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * When extended in another component, this class will
 * help components communicate with each other.
 *
 * {this.configuration} is meant to be an input in which we can
 * pass information on how a given component should behave or
 * what it should render.
 *
 * {this.style} help us pass a style configuration for the component.
 *
 * {this.output} is meant to be used to emit whatever information
 * is handled in the component to its parent
 *
 *
 * By handling basic inputs and outputs we avoid code repetition in
 * some components
 */

@Component({ template: '' })
export class AbstractModuleComponent {
  @Input() configuration: any;
  @Input() style: any;
  @Output() output: EventEmitter<any> = new EventEmitter();
}
