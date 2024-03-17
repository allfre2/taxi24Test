import { Injectable } from '@nestjs/common';
import { Driver, DriverStatus } from 'src/models/driver.model';

@Injectable()
export class DriverService {
  private drivers: Driver[] = [
    {
      id: 335,
      name: 'Joseph',
      about: 'A very friendly driver',
      carMake: 'Nissan',
      dateJoinned: new Date(),
      tripCount: 500,
      rating: 4.5,
      currentLocation: '-69.883565, 18.5261268',
      longitude: -69.883565,
      lattitude: 18.5261268,
      status: DriverStatus.Active,
    },
  ];

  async GetAllDrivers() {
    return this.drivers;
  }

  async GetDriverById(id: number) {
    return this.drivers.find((driver) => driver.id === id);
  }

  async GetNearByDrivers(longitude: number, lattitude: number) {
    return [];
  }
}
