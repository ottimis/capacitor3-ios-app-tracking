import { WebPlugin } from '@capacitor/core';
export class IOSAppTracking extends WebPlugin {
    async getTrackingStatus() {
        return { value: '', status: '' };
    }
    async requestPermission() {
        return { value: '', status: '' };
    }
}
//# sourceMappingURL=web.js.map