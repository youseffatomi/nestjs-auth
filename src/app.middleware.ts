import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';
export default class MiddlewareApp {
  constructor(private readonly App: INestApplication) {}
  private readonly Middles: Array<any> = [helmet];
  public run(): void {
    this.Middles.forEach((M: () => any): void => {
      this.App.use(M());
    });
  }
}
