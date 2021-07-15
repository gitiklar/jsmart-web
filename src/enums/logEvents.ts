export enum LogEventsKeys {
  SignUp,
  CompleteRegistration,
  Login,
  FirstLaunch,
  Search,
  Share,
  Invite,
  ViewItem,
  AddToCart,
  Purchase,
}

export const AppFlyerEvents = {
  [LogEventsKeys.SignUp]: "af_start_registration",
  [LogEventsKeys.Login]: "af_login",
  [LogEventsKeys.FirstLaunch]: "af_first_launch",
  [LogEventsKeys.CompleteRegistration]: "af_complete_registration",
  [LogEventsKeys.Search]: "af_search",
  [LogEventsKeys.Share]: "af_share",
  [LogEventsKeys.Invite]: "af_invite",
  [LogEventsKeys.AddToCart]: "af_content_view",
  [LogEventsKeys.Purchase]: "af_subscribe",
};

export const FirebaseAnalytics = {
  [LogEventsKeys.SignUp]: "sign_up",
  [LogEventsKeys.Login]: "login",
  [LogEventsKeys.FirstLaunch]: "first_launch",
  [LogEventsKeys.CompleteRegistration]: "complete_registration",
  [LogEventsKeys.Search]: "search",
  [LogEventsKeys.Share]: "share",
  [LogEventsKeys.ViewItem]: "view_item",
  [LogEventsKeys.AddToCart]: "add_to_cart",
  [LogEventsKeys.Purchase]: "purchase",
};

export const FacebookAnalytics = {
  [LogEventsKeys.SignUp]: "Contact",
  [LogEventsKeys.CompleteRegistration]: "Complete Registration",
  [LogEventsKeys.Search]: "Search",
  [LogEventsKeys.AddToCart]: "Add Payment Info",
  [LogEventsKeys.Purchase]: "Purchase",
};
