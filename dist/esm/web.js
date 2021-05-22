var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from "@capacitor/core";
export class IOSAppTrackingWeb extends WebPlugin {
    constructor() {
        super({
            name: "IOSAppTracking",
            platforms: ["web"],
        });
    }
    getTrackingStatus({ value, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: value, status: status };
        });
    }
    requestPermission({ value, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: value, status: status };
        });
    }
}
const IOSAppTracking = new IOSAppTrackingWeb();
export { IOSAppTracking };
//# sourceMappingURL=web.js.map