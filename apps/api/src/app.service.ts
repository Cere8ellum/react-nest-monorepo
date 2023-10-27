import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // Between 1 and 3
    const rnd = Math.floor(Math.random() * 2) + 1;

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rnd > 1) {
          resolve("Hello World!");
        } else {
          reject("Something went wrong.");
        }
      }, rnd * 500);
    });
  }
}
