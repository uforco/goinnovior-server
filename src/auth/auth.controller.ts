import { Controller, Get, UseGuards } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { GoogleGuard } from './guards/googleAuth0.guard';
import { User } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Public()
  @UseGuards(GoogleGuard)
  @Get('google/login')
  googleLogin() {}

  @Public()
  @UseGuards(GoogleGuard)
  @Get('google/callback')
  googleCallback(@User() user: any) {
    console.log('google user', user);
  }
}
