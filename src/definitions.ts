export interface IOSAppTrackingPlugin {
  getTrackingStatus(): Promise<{ value: string; status: string }>;
  requestPermission(): Promise<{ value: string; status: string }>;
}

export interface Response {
  value: string;
  status: Status;
}

export type Status = 'authorized' | 'denied' | 'unrequested' | 'restricted'