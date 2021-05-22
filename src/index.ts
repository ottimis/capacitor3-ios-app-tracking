import { registerPlugin } from '@capacitor/core';

import type { IOSAppTrackingPlugin } from './definitions';

const IOSAppTracking = registerPlugin<IOSAppTrackingPlugin>('IOSAppTracking', {
    ios: () => import('./web').then(m => new m.IOSAppTracking()),
});

export * from './definitions';
export { IOSAppTracking };
