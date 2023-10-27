import { Controller, Get, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service";
import { TResponse } from "common/types/TResponse";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Api module")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  async getHello(): Promise<TResponse<string>> {
    try {
      const _result = await this.appService.getHello();

      return {
        status: HttpStatus.OK,
        isError: false,
        errorMessage: "",
        data: _result,
      };
    } catch (e) {
      return {
        status:
          e instanceof Error
            ? HttpStatus.BAD_REQUEST
            : HttpStatus.I_AM_A_TEAPOT,
        isError: true,
        errorMessage: e instanceof Error ? e.message : "An error occured.",
        data: "",
      };
    }
  }
}
