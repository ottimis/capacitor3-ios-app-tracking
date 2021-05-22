import Foundation
import Capacitor
import AppTrackingTransparency
import AdSupport
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(IOSAppTracking)
public class IOSAppTracking: CAPPlugin {

    @objc
    func getTrackingStatus(_ call: CAPPluginCall) {
        let advertising = ASIdentifierManager.init().advertisingIdentifier.uuidString
        if #available(iOS 14.0, *) {
            let status : ATTrackingManager.AuthorizationStatus = ATTrackingManager.trackingAuthorizationStatus
            var s = "";
            switch status.rawValue {
                case 0:
                    s = "unrequested"
                case 1:
                    s = "restricted"
                case 2:
                    s = "denied";
                case 3:
                    s = "authorized";
                default:
                    s = "";
            }
            call.resolve([
                "value": advertising, "status": s
            ])
        } else {
            call.resolve([ "value": advertising, "status": "authorized" ])
        }
    }

    @objc
    func requestPermission(_ call: CAPPluginCall) {
        if #available(iOS 14.0, *) {
            ATTrackingManager.requestTrackingAuthorization { (res) in
                let advertising = ASIdentifierManager.init().advertisingIdentifier.uuidString
                let status = res
                var s = "";
                switch status.rawValue {
                    case 0:
                        s = "unrequested"
                    case 1:
                        s = "restricted"
                    case 2:
                        s = "denied";
                    case 3:
                        s = "authorized";
                    default:
                        s = "";
                }
                call.resolve([
                    "value": advertising, "status": s
                ])
            }
        } else {
            let advertising = ASIdentifierManager.init().advertisingIdentifier.uuidString
            call.resolve([ "value": advertising, "status": "authorized" ])
        }
     }

}



