import firebase from 'firebase';
import { QueueEvents } from 'consts/userEvents';

class QueueService {
  private BASE_REF = 'queue/tasks';
  ip = '';

  constructor() {
    
  }

  async sendEvent(uid: string, eventName: QueueEvents, extraData = {}) {
    return firebase.database()
      .ref(this.BASE_REF)
      .push({
        uid: uid,
        eventName: eventName,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        extraData: extraData,
        ip: this.ip,
      });
  }
}

export default new QueueService();
