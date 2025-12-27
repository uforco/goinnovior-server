import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from 'src/auth/decorators/public.decorator';
import { jwtPayload } from 'src/auth/types/jwt-payload';
import { PrismaService } from 'src/config/database/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer '))
      throw new UnauthorizedException('No token provided');

    const token: string = authHeader.split(' ')[1];

    try {
      const decoded = await this.jwtService.verifyAsync<jwtPayload>(token);
      // jwtPayload;

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) return false;

      request.user = decoded;
    } catch {
      return false;
    }
    return true;
  }
}
