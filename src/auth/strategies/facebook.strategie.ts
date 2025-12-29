import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('FACEBOOK_CLIENT_ID') as string,
      clientSecret: configService.get('FACEBOOK_CLIENT_SECRET') as string,
      callbackURL: `${configService.get('BACKEND_URL')}/auth/google/callback`,
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
