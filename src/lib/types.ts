export interface GymData {
  data: Data;
}
export interface Data {
  allGym: AllGym;
  urls: Urls;
}
export interface AllGym {
  nodes?: NodesEntity[] | null;
}
export interface NodesEntity {
  name: string;
  gymId: string;
  email: string;
  slug: string;
  address: Address;
  location: Location;
  monthly: Monthly;
  status: string;
  joinable: boolean;
  seo: Seo;
}
export interface Address {
  address1: string;
  address2?: string | null;
  address3?: string | null;
  postalCode: string;
}
export interface Location {
  latitude: number;
  longitude: number;
}
export interface Monthly {
  packages?: (PackagesEntity | null)[] | null;
}
export interface PackagesEntity {
  accessLevel: string;
  normalPrice: number;
  currentPrice: number;
  salesTax?: null;
  joiningFeeSalesTax?: null;
}
export interface Seo {
  presentationName?: string | null;
}
export interface Urls {
  authLogin: string;
  authLogout: string;
  joinJoin: string;
}

export type AvailableGyms = UserSelection[];

export type UserSelection = {
  name: string;
  id: string;
};

export interface Schedule {
  status: string;
  schedule: {
    activities: ActivitiesEntity[];
  };
}

export interface ActivitiesEntity {
  id: string;
  name: string;
  startDateTime: StartDateTime;
  duration: number;
  description: string;
  bookedCount: number;
  classCapacity: number;
  waitingListCount: number;
  waitingListCapacity: number;
  instructorName: string;
  studio: string;
  classType: string;
  energyConsumptionKcal?: number | null;
  bookingStatus: string;
  bookingErrors?: (BookingErrorsEntity | null)[] | null;
  gymAccessSlot: GymAccessSlot;
}

export interface StartDateTime {
  dateTime: string;
  timeZone: string;
}

export interface BookingErrorsEntity {
  errorCode: string;
  message: string;
  extraErrorInfo?: ExtraErrorInfo | null;
}

export interface ExtraErrorInfo {
  numberOfDaysInAdvance: number;
}

export interface GymAccessSlot {
  isRequired: boolean;
  isBooked: boolean;
}

export interface ClassData {
  start: string;
  end: string;
  duration?: number;
}
