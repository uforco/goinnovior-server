import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: 'Ov23liuneVCAs2gmM7Cb',
      clientSecret: 'cd1c25a0d1811e088351f624f56d70f50466e5c4',
      callbackURL: `${configService.get('BACKEND_URL')}/auth/github/callback`,
      scope: ['user:email'],
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log(profile);
    const payload = {
      profile,
    };
    // const payload = {
    //   id: profile.id,
    //   email: profile.emails[0].value,
    //   provider: 'GOOGLE',
    //   image: profile.photos[0].value,
    // };
    done(null, payload);
  }
}
