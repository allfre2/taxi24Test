import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { Passenger } from 'src/models/passenger.model';

@Controller('passengers')
export class PassengerController {
  constructor(private passengerService: PassengerService) {}

  @Get()
  async GetAllPassengers(): Promise<Passenger[]> {
    return await this.passengerService.GetAllPassengers();
  }

  @Get(':id')
  async GetPassengerInfoById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Passenger> {
    return await this.passengerService.GetPassengerInfoById(id);
  }
}
