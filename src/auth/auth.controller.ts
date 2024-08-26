import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/roles.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
    usuario: {
        email: string,
        rol: string
    }
}

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

   /*  @Get('Perfil') */

    /*  @Roles('administrador') */
    /* @Roles('usuario') */

    /* @Roles(Role.ADMINISTRADOR)
    @UseGuards(AuthGuard, RolesGuard)
    Perfil(
        @Req() */
        /* req, */
        /* req: Request & { usuario: { email: string, rol: string }} */

       /*  req: RequestWithUser, */
   /*  )  *//* { */
        /* return 'Perfil' */

        /* return req.usuario */

        /* return this.authService.Perfil(  */
            
            /* { email: req.usuario.email,
            rol: req.usuario.rol,} */ 
            
            /* req.usuario)
    } */

    @Get('Perfil')  
   /*  @Roles(Role.ADMINISTRADOR)
    @UseGuards(AuthGuard, RolesGuard) */

    @Auth(Role.ADMINISTRADOR)
    Perfil(
        @Req()
        req: RequestWithUser,
    ) {
        return this.authService.Perfil(  
            req.usuario)
    }
}
