import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Whatsapp from 'whatsapp-web.js';
import { AppModule } from './app.module';
import * as qrcode from 'qrcode-terminal';

async function bootstrap() {
  () => {
    const client = new Whatsapp.Client({});
    client.on('qr', (qr) => qrcode.generate(qr, { small: true }));
    client.on('ready', (qr) => console.log('Client is ready'));
  };
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.API_PREFIX);

  const config = new DocumentBuilder()
    .setTitle('Appointment Core Api')
    .setDescription('This is the core to use in Appointment App')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('', app, document);

  await app.listen(process.env.API_PORT);

  console.log(`App listen on port ${process.env.API_PORT}`);
}
bootstrap();
