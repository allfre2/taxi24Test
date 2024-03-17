import { Injectable } from '@nestjs/common';
import { NewTrip, Trip, TripStatus } from 'src/models/trip.model';

@Injectable()
export class TripService {
  private trips: Trip[] = [
    {
      id: 555,
      requestDate: new Date(),
      driverId: 335,
      passengerId: 445,
      pickupLocation: '-69.883565, 18.5261268',
      pickupLongitude: -69.883565,
      pickupLattitude: 18.5261268,
      destinationLocation: '-69.6680, 18.4243',
      destinationLongitude: -69.6680,
      destinationLattitude: 18.4243,
      status: TripStatus.Ongoing,
    },
    {
      id: 556,
      requestDate: new Date(),
      driverId: 335,
      passengerId: 445,
      pickupLocation: '-69.883545, 18.5261248',
      pickupLongitude: -69.883545,
      pickupLattitude: 18.5261248,
      destinationLocation: '-69.6640, 18.4244',
      destinationLongitude: -69.6640,
      destinationLattitude: 18.4244,
      status: TripStatus.Complete,
    },
  ];

  async GetAllActive(): Promise<Trip[]> {
    return this.trips.filter((trip) => trip.status === TripStatus.Ongoing);
  }

  async CreateNewTrip(data: NewTrip): Promise<Trip> {
    const newTrip: Trip = {
      id: Math.floor(Math.random() * 888),
      requestDate: new Date(),
      driverId: data.driverId,
      passengerId: data.passengerId,
      pickupLocation: `${data.pickupLongitude}, ${data.pickupLattitude}`,
      pickupLongitude: data.pickupLongitude,
      pickupLattitude: data.pickupLattitude,
      destinationLocation: `${data.destinationLongitude}, ${data.destinationLattitude}`,
      destinationLongitude: data.destinationLongitude,
      destinationLattitude: data.destinationLattitude,
      status: TripStatus.Ongoing,
    };

    this.trips.push(newTrip);

    return newTrip;
  }

  async CompleteTrip(id: number): Promise<Trip> {
    let trip: Trip = this.trips.find((trip) => trip.id === id);
    trip.status = TripStatus.Complete;

    return trip;
  }
}
