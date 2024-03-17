export interface Driver {
  id: number;
  name: string;
  about: string;
  carMake: string;
  dateJoinned: Date;
  tripCount: number;
  rating: number;
  currentLocation: string;
  longitude: number;
  lattitude: number;
  status: DriverStatus;
}

export enum DriverStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED',
  Expelled = 'EXPELLED',
  Available = 'AVAILABLE',
  Busy = 'BUSY',
}
