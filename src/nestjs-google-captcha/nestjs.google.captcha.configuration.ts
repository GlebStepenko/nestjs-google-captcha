import { ModuleMetadata } from '@nestjs/common/interfaces';
import {IfnGoogleCaptchaOptions} from './nestjs.google.captcha.interface';


export interface OptionsAsync
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => IfnGoogleCaptchaOptions | Promise<IfnGoogleCaptchaOptions>;
  inject?: any[];
}
