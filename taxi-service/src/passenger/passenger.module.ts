import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';

@Module({
  providers: [PassengerService],
  controllers: [PassengerController],
})
export class PassengerModule {}
