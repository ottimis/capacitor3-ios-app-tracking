import { WebPlugin } from '@capacitor/core';

import type { IOSAppTrackingPlugin } from './definitions';

export class IOSAppTracking extends WebPlugin implements IOSAppTrackingPlugin {
    async getTrackingStatus(): Promise<{ value: string, status: string }> {
        return {value: '', status: ''};
    }
    async requestPermission(): Promise<{ value: string, status: string }> {
        return {value: '', status: ''};
    }
}