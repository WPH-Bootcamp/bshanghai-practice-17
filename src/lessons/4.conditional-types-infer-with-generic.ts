type SMSNotification = {
  recipientPhoneNumber: string;
  message: string;
};

type PushNotification = {
  deviceId: string;
  title: string;
  content: string;
};

type EmailNotification = {
  recipientEmail: string;
  subject: string;
  body: string;
};

type Notification<TypeName extends string, Payload> = {
  type: TypeName;
  payload: Payload;
};

type EmailNotificationType = Notification<"email", EmailNotification>;
type SMSNotificationType = Notification<"sms", SMSNotification>;
type PushNotificationType = Notification<"push", PushNotification>;

type NotificationTypeName<N extends Notification<string, any>> =
  N extends Notification<infer TypeName, unknown> ? TypeName : never;

type EmailType = NotificationTypeName<EmailNotificationType>;
type SMSType = NotificationTypeName<SMSNotificationType>;
type PushType = NotificationTypeName<PushNotificationType>;

type NotificationTypePayload<N extends Notification<string, any>> =
  N extends Notification<any, infer R> ? R : never;

type EmailPayload = NotificationTypePayload<EmailNotificationType>;

// super simple example

type InferSomething<T> = T extends (x: infer U) => any ? U : never;
type Inferred = InferSomething<(x: "hello") => any>;
