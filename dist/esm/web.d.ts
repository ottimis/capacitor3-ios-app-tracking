import { WebPlugin } from '@capacitor/core';
import type { IOSAppTrackingPlugin } from './definitions';
export declare class IOSAppTracking extends WebPlugin implements IOSAppTrackingPlugin {
    getTrackingStatus(): Promise<{
        value: string;
        status: string;
    }>;
    requestPermission(): Promise<{
        value: string;
        status: string;
    }>;
}
