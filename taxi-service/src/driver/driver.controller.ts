import {
  Controller,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from 'src/models/driver.model';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  async GetAllDrivers(): Promise<Driver[]> {
    return await this.driverService.GetAllDrivers();
  }

  @Get(':id')
  async GetDriverById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Driver> {
    return await this.driverService.GetDriverById(id);
  }

  @Get(':longitude/:lattitude')
  async GetNearByDrivers(
    @Param('longitude', new ParseFloatPipe()) longitude: number,
    @Param('lattitude', new ParseFloatPipe()) lattitude: number,
  ): Promise<Driver[]> {
    return await this.driverService.GetNearByDrivers(longitude, lattitude);
  }
}
