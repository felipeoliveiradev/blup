import { Notification } from "../../validations/notification/notification";

export abstract class Entity {
  notification: Notification = new Notification();
  abstract toJSON(): any;
  abstract create(): any;
  abstract validate(): any;
}