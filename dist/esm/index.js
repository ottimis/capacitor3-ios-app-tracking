import { registerPlugin } from '@capacitor/core';
const IOSAppTracking = registerPlugin('IOSAppTracking', {
    ios: () => import('./web').then(m => new m.IOSAppTracking()),
});
export * from './definitions';
export { IOSAppTracking };
//# sourceMappingURL=index.js.map