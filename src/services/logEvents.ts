// import appsFlyer from "react-native-appsflyer";
// import analytics from "@react-native-firebase/analytics";
// import messaging from "@react-native-firebase/messaging";
// import { AppEventsLogger } from "react-native-fbsdk";
// import { ENV, APPSFLYER_DEVKEY, APPLE_APP_ID } from "react-native-dotenv";
// import AsyncStorage from "@react-native-community/async-storage";

// import { Envs } from "shared/enums/Envs";
// import ErrorHandlerService from "shared/services/errorHandler";
// import TrackingTransparencyService from "shared/services/trackingTransparency";
// import {
//   AppFlyerEvents,
//   FirebaseAnalytics,
//   FacebookAnalytics,
//   LogEventsKeys,
// } from "shared/enums/logEvents";

// class LogEventsService {
//   constructor() {
//     appsFlyer.initSdk(
//       {
//         devKey: APPSFLYER_DEVKEY,
//         isDebug: ENV === Envs.DEV,
//         appId: APPLE_APP_ID,
//         timeToWaitForATTUserAuthorization: 10,
//       },
//       (result) => {
//         console.log("appsFlyer ", result);
//       },
//       (error) => {
//         ErrorHandlerService.reportError(
//           "LogEventsService.logEvent initSdk",
//           error
//         );
//       }
//     );
//     appsFlyer.setCurrencyCode("ILS");
//     // this.updateUninstallToken();
//   }

//   async sendLaunchEvent() {
//     const isInit = await AsyncStorage.getItem("@isSentLaunchEvent");
//     if (!isInit) {
//       this.logEvent(LogEventsKeys.FirstLaunch);
//       await AsyncStorage.setItem("@isSentLaunchEvent", "true");
//     }
//   }

//   private async updateUninstallToken() {
//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//       appsFlyer.updateServerUninstallToken("token", (res) => {
//         console.log("updateServerUninstallToken", res);
//       });
//     }
//   }

//   logEvent(eventKey: LogEventsKeys, params?) {
//     if (!TrackingTransparencyService.getIsAllow()) {
//       return;
//     }
//     if (AppFlyerEvents[eventKey]) {
//       const appsFlyerParams = this.getAppsFlyerParams(eventKey, params);
//       appsFlyer.logEvent(
//         AppFlyerEvents[eventKey],
//         appsFlyerParams,
//         () => {},
//         (err) =>
//           ErrorHandlerService.reportError(
//             "LogEventsService.logEvent appsFlyer",
//             err
//           )
//       );
//     }
//     if (FirebaseAnalytics[eventKey]) {
//       analytics()
//         .logEvent(FirebaseAnalytics[eventKey], params)
//         .catch((err) => {
//           ErrorHandlerService.reportError(
//             "LogEventsService.logEvent FirebaseAnalytics",
//             err
//           );
//         });
//     }
//     if (FacebookAnalytics[eventKey]) {
//       this.facebookLog(eventKey, params);
//     }
//   }

//   private getAppsFlyerParams(eventKey: LogEventsKeys, params?) {
//     if (eventKey === LogEventsKeys.Purchase) {
//       return {
//         af_revenue: `${params?.value}`,
//         af_content_id: params?.items?.[0]?.item_id,
//         renewal: params?.renewal,
//       };
//     }
//     if (eventKey === LogEventsKeys.AddToCart) {
//       return {
//         af_price: `${params?.value}`,
//         af_content_id: params?.items?.[0]?.item_id,
//       };
//     }
//     return {};
//   }

//   private facebookLog(eventKey: LogEventsKeys, params?) {
//     if (eventKey === LogEventsKeys.Purchase) {
//       AppEventsLogger.logPurchase(params?.value, "ILS", {
//         "Content ID": params?.items?.[0]?.item_id,
//       });
//     } else {
//       AppEventsLogger.logEvent(FacebookAnalytics[eventKey], params);
//     }
//   }
// }

// export default new LogEventsService();

export default 'xxx';