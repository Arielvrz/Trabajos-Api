import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {
        // redirige a google
    }

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return {
            mensaje: 'Login con Google exitoso',
            usuario: req.user,
        };
    }
}

// https://localhost:3000/auth/google
// https://localhost:3000/auth/google/redirect