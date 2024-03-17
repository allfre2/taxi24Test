import { Injectable } from '@nestjs/common';
import { SubjectLocation } from 'src/models/subjectLocation.model';

@Injectable()
export class LocationService {
  async UpdateDriverLocation(
    longitude: number,
    lattitude: number,
  ): Promise<SubjectLocation> {
    return {
      longitude,
      lattitude,
    };
  }

  async UpdatePassengerLocation(
    longitude: number,
    lattitude: number,
  ): Promise<SubjectLocation> {
    return {
      longitude,
      lattitude,
    };
  }
}
