import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { NewTrip, Trip } from 'src/models/trip.model';

@Controller('trips')
export class TripController {
  constructor(private tripService: TripService) {}

  @Get('active')
  async GetAllActive(): Promise<Trip[]> {
    return await this.tripService.GetAllActive();
  }

  @Post()
  async ScheduleTrip(@Body() newTrip: NewTrip): Promise<Trip> {
    return await this.tripService.CreateNewTrip(newTrip);
  }

  @Post('complete/:id')
  async CompleteTrip(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Trip> {
    return await this.tripService.CompleteTrip(id);
  }
}
