import { Body, Controller, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service';
import { SubjectLocation } from 'src/models/subjectLocation.model';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post('driver/:id')
  async UpdateDriverLocation(
    @Param('id') id: number,
    @Body() subjectLocation: SubjectLocation,
  ): Promise<SubjectLocation> {
    return await this.locationService.UpdateDriverLocation(
      subjectLocation.longitude,
      subjectLocation.lattitude,
    );
  }

  @Post('passenger/:id')
  async UpdatePassengerLocation(
    @Param('id') id: number,
    @Body() subjectLocation: SubjectLocation,
  ): Promise<SubjectLocation> {
    return await this.locationService.UpdatePassengerLocation(
      subjectLocation.longitude,
      subjectLocation.lattitude,
    );
  }
}
