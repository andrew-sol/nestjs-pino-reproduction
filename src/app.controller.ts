import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  protected logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('foo', { bar: 'baz' }, 'baf');

    return this.appService.getHello();
  }
}
