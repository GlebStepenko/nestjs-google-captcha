import {Module, Provider} from '@nestjs/common';
import { NestjsGoogleCaptchaService } from './service/nestjs.google.captcha.service';
import {OptionsAsync} from './nestjs.google.captcha.configuration';
import {GOOGLE_CAPTCHA_CONFIGURATION} from './nestjs.google.captcha.const';
import {HttpModule} from '@nestjs/axios';

@Module({
  imports: [
    HttpModule
  ],
  providers: [
   NestjsGoogleCaptchaService,
  ],
  exports: [NestjsGoogleCaptchaService],
})
export class NestjsGoogleCaptchaModule {
  public static forAsyncRoot(config: OptionsAsync) {
    return {
      module: NestjsGoogleCaptchaModule,
      imports: config.imports || [],
      providers: [this.createAsyncProviders(config), NestjsGoogleCaptchaService],
      exports: [NestjsGoogleCaptchaService],
    };
  }

  private static createAsyncProviders(options: OptionsAsync): Provider {
    return {
      provide: GOOGLE_CAPTCHA_CONFIGURATION,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };
  }
}
