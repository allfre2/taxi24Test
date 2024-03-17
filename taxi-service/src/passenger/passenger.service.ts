import { Injectable } from '@nestjs/common';
import { Passenger, PassengerStatus } from 'src/models/passenger.model';

@Injectable()
export class PassengerService {
  private passengers: Passenger[] = [
    {
      id: 445,
      name: 'Jane Foster',
      about: 'Lecters best friend',
      dateJoinned: new Date(),
      tripCount: 500,
      rating: 4.5,
      currentLocation: '-69.883565, 18.5261268',
      longitude: -69.883565,
      lattitude: 18.5261268,
      status: PassengerStatus.Active,
    },
  ];

  async GetAllPassengers(): Promise<Passenger[]> {
    return this.passengers;
  }

  async GetPassengerInfoById(id: number): Promise<Passenger> {
    return this.passengers.find((passenger) => passenger.id === id);
  }
}
