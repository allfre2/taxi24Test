export interface Passenger {
  id: number;
  name: string;
  about: string;
  dateJoinned: Date;
  tripCount: number;
  rating: number;
  currentLocation: string;
  longitude: number;
  lattitude: number;
  status: PassengerStatus;
}

export enum PassengerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Blocked = 'BLOCKED',
}
