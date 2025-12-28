import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { GoogleGuard } from './guards/googleAuth0.guard';
import { User } from './decorators/user.decorator';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(GoogleGuard)
  @Get('google/login')
  googleLogin() {}

  @Public()
  @UseGuards(GoogleGuard)
  @Get('google/callback')
  async googleCallback(@User() user: any, @Res() res: Response) {
    const result = await this.authService.googleLogin({
      id: user.id,
      email: user.email,
      provider: user.provider,
      image: user.image,
    });

    res.cookie('access_token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1 * 60 * 60 * 1000, // 1 hour
    });
    res.redirect(`${process.env.FORTEND_URL}?access_token=${result.token}`);
  }

  // @Public()
  @Get('test-cookie')
  getCookie(@Req() req: any) {
    console.log(req.cookies);
    return req.cookies?.access_token;
  }
}
