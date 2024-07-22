import {ForbiddenException, Inject, Injectable} from '@nestjs/common';
import {IfnGoogleCaptchaOptions} from '../nestjs.google.captcha.interface';
import {GOOGLE_CAPTCHA_CONFIGURATION} from '../nestjs.google.captcha.const';
import {firstValueFrom} from 'rxjs';
import {HttpService} from '@nestjs/axios';

@Injectable()
export class NestjsGoogleCaptchaService {
	readonly #secretKey: string;
	constructor(@Inject(GOOGLE_CAPTCHA_CONFIGURATION) private readonly _config: IfnGoogleCaptchaOptions, private readonly _httpService: HttpService) {
		this.#secretKey = _config.secretKey;
	}

	async verifyCaptchaV3Token(token: string): Promise<boolean> {
		const { data } = await firstValueFrom(this._httpService.post(`https://www.google.com/recaptcha/api/siteverify?response=${token}&secret=${this.#secretKey}`));


		if (!data.success) {
			throw new ForbiddenException();
		}
		console.log(data)
		return true;
	}
}
