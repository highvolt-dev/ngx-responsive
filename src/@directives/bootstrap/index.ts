/**
 * @name bootstrap
 * @description Bootstrap module in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  XxlDirective,
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrapDirective,
  HideItBootstrapDirective
} from './bootstrap-directives';

export * from './bootstrap-directives';

export const BOOTSTRAP_DIRECTIVES: Provider[] = [
  XxlDirective,
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrapDirective,
  HideItBootstrapDirective
];
