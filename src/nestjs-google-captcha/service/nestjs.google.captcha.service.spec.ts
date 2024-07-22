import { Test, TestingModule } from '@nestjs/testing';
import { NestjsGoogleCaptchaService } from './nestjs.google.captcha.service';

describe('NestjsGoogleCaptchaService', () => {
  let service: NestjsGoogleCaptchaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsGoogleCaptchaService],
    }).compile();

    service = module.get<NestjsGoogleCaptchaService>(NestjsGoogleCaptchaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
