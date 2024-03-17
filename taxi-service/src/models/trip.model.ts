export interface Trip {
  id: number;
  requestDate: Date;
  driverId: number;
  passengerId: number;
  pickupLocation: string;
  pickupLongitude: number;
  pickupLattitude: number;
  destinationLocation: string;
  destinationLongitude: number;
  destinationLattitude: number;
  status: TripStatus;
}

export enum TripStatus {
  Ongoing = 'ONGOING',
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
}

export interface NewTrip {
  driverId: number;
  passengerId: number;
  pickupLongitude: number;
  pickupLattitude: number;
  destinationLongitude: number;
  destinationLattitude: number;
}
