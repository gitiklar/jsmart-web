//Should delete the unnecessary

export enum AuthEvents {
  Connect = 'Connect',
  Disconect = 'Disconect',
}

export enum LikeEvents {
  Like = 'Like',
  Unlike = 'Unlike',
}

export enum SkipEvents {
  Skip = 'Skip',
  UnSkip = 'UnSkip',
}

export enum BaseRegister {
  Register = 'Register',
  FinishFillRegister = 'FinishFillRegister',
}

export enum ProfileEvents {
  SaveProfileDetail = 'SaveProfileDetail',
  SaveProfileCity = 'SaveProfileCity',
  SavePicture = 'SavePicture',
  ChangeMainPicture = 'ChangeMainPicture',
  NewLocation = 'NewLocation',
  DeleteUserPicture = 'DeleteUserPicture',
}

export enum ViewsEvents {
  View = 'View',
  DeleteView = 'DeleteView',
  ViewViewedMeList = 'ViewViewedMeList',
  ViewlikedMeList = 'ViewlikedMeList',
  ViewchatReadList = 'ViewchatReadList',
}

export enum BaseChatEvents {
  NewChatMessage = 'NewChatMessage',
  ChatMessage = 'ChatMessage',
  ChatMessageRead = 'ChatMessageRead',
  OpenPromotion = 'OpenPromotion',
  ViewRecommendation = 'ViewRecommendation',
  ChatTyping = 'ChatTyping',
}

export enum ChatEvents {
  UnFilterUser = 'UnFilterUser',
  ChangeFiltersUser = 'ChangeFiltersUser',
  Date2HoursLineClicked = 'Date2HoursLineClicked',
  BirthdayMessage = 'BirthdayMessage',
  RemoveChatRecievedUser = 'RemoveChatRecievedUser',
  RemoveChatSentUser = 'RemoveChatSentUser',
}

export enum BlockAndReportEvents {
  BlockUser = 'BlockUser',
  ReportUser = 'ReportUser',
  UnBlockUser = 'UnBlockUser',
}

export enum FreezeEvents {
  FreezeMe = 'FreezeMe',
  UnfreezeMe = 'UnfreezeMe',
}

export enum DeleteEvents {
  Delete = 'Delete',
  ReportWantToDelete = 'ReportWantToDelete',
}

export enum SettingsEvents {
  SaveAccountSetting = 'SaveAccountSetting',
  SendContactMessage = 'SendContactMessage',
  SaveCommunicationSettings = 'SaveCommunicationSettings',
  SaveNotificationsSettings = 'SaveNotificationsSettings',
  ReconfirmPolicies = 'ReconfirmPolicies',
  PrivacySettings = 'PrivacySettings',
}

export enum SubscriptionPurchaseSource {
  SubscriptionPurchaseMenu = 'SubscriptionPurchaseMenu',
  SubscriptionPurchaseChat = 'SubscriptionPurchaseChat',
  SubscriptionPurchaseViews = 'SubscriptionPurchaseViews',
  SubscriptionPurchaseLikes = 'SubscriptionPurchaseLikes',
  SubscriptionPurchaseTokenPopup = 'SubscriptionPurchaseTokenPopup',
  SubscriptionPurchaseCampainPopup = 'SubscriptionPurchaseCampainPopup',
  SubscriptionPurchaseSettingsPage = 'SubscriptionPurchaseSettingsPage',
}

export type SubscriptionPurchaseSourceType = SubscriptionPurchaseSource;

enum SubscriptionEvents {
  StartSubscription = 'StartSubscription',
  ChangeSubscriptionRenewableSettings = 'ChangeSubscriptionRenewableSettings',
  FinishPurchaseSubscriptionSuccesfully = 'FinishPurchaseSubscriptionSuccesfully',
  FinishPurchaseSubscriptionFail = 'FinishPurchaseSubscriptionFail',
  GetLimitOfMaxUsersForSendMessageIn24Hours = 'GetLimitOfMaxUsersForSendMessageIn24Hours',
  RenewFreeDailySubscriptionWhileAppRunning = 'RenewFreeDailySubscriptionWhileAppRunning',
  ValidateAndRegisterInAppPurchase = 'ValidateAndRegisterInAppPurchase',
  EndIapSubscription = 'EndIapSubscription',
}

enum SubscriptionChangeRenewableSettings {
  ChangeSubscriptionToRenewable = 'ChangeSubscriptionToRenewable',
  ChangeSubscriptionToNotRenewable = 'ChangeSubscriptionToNotRenewable',
}

enum MassletterEvents {
  MassLetterSendMessage = 'MassLetterSendMessage',
  MassLetterCancelMessage = 'MassLetterCancelMessage',
  MassLetterOpenChat = 'MassLetterOpenChat',
}

enum FuturePushMessageEvents {
  FuturePushMessage = 'FuturePushMessage',
}

enum Date2HoursEvents {
  Date2HoursLineClicked = 'Date2HoursLineClicked',
  Date2HoursApproveClicked = 'Date2HoursApproveClicked',
  Date2HoursApproveSent = 'Date2HoursApproveSent',
  Date2HoursDeclineClicked = 'Date2HoursDeclineClicked',
  Date2HoursDeclineSent = 'Date2HoursDeclineSent',
  Date2HoursEditClicked = 'Date2HoursEditClicked',
  Date2HoursModalOpened = 'Date2HoursModalOpened',
  Date2HoursRequestSent = 'Date2HoursRequestSent',
  Date2HoursModalCanceledClicked = 'Date2HoursModalCanceledClicked',
}

export enum ContactsEvents {
  SaveContacts = 'SaveContacts',
  RateApp = 'RateApp',
  AllowMutualContactsNotification = 'AllowMutualContactsNotification',
}

export enum HelloEvents {
  AddHello = 'AddHello',
  ReadHello = 'ReadHello',
}

export enum VideoCallEvents {
  AddVideoCall = 'AddVideoCall',
  UpdateVideoCallRecieverStatus = 'UpdateVideoCallRecieverStatus',
  UpdateVideoCallCallerStatus = 'UpdateVideoCallCallerStatus',
}

export type QueueEvents =
  | AuthEvents
  | BaseRegister
  | LikeEvents
  | SkipEvents
  | ProfileEvents
  | ViewsEvents
  | BaseChatEvents
  | ChatEvents
  | BlockAndReportEvents
  | FreezeEvents
  | DeleteEvents
  | SettingsEvents
  | SubscriptionEvents
  | MassletterEvents
  | FuturePushMessageEvents
  | ContactsEvents
  | HelloEvents
  | VideoCallEvents;

export const QueueEvents = {
  ...AuthEvents,
  ...BaseRegister,
  ...LikeEvents,
  ...SkipEvents,
  ...ProfileEvents,
  ...ViewsEvents,
  ...BaseChatEvents,
  ...ChatEvents,
  ...BlockAndReportEvents,
  ...FreezeEvents,
  ...DeleteEvents,
  ...SettingsEvents,
  ...SubscriptionEvents,
  ...MassletterEvents,
  ...FuturePushMessageEvents,
  ...ContactsEvents,
};

export const AnalyticsEvents = {
  [LikeEvents.Like]: LikeEvents.Like,
  [SkipEvents.Skip]: SkipEvents.Skip,
  [ViewsEvents.View]: ViewsEvents.View,
  [ProfileEvents.SavePicture]: ProfileEvents.SavePicture,
  [ProfileEvents.NewLocation]: ProfileEvents.NewLocation,
  ...SubscriptionPurchaseSource,
  ...FreezeEvents,
  ...BaseRegister,
  ...BaseChatEvents,
  ...Date2HoursEvents,
  ...SubscriptionChangeRenewableSettings,
};
