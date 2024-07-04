import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {

    }

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto
    ){
        /* return 'register' */

        //console.log(registerDto)

        return this.authService.register(registerDto);
    }

    //@HttpCode(HttpStatus.OK)
    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ) {
        /* return 'login'; */

        return this.authService.login(loginDto);
    }

    @Get('Perfil')
    @UseGuards(AuthGuard)
    Perfil(
        @Request()
        req,
    ) {
        /* return 'Perfil' */

        return req.usuario
    }
}
