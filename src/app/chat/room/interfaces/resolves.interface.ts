import { FirebaseListObservable } from 'angularfire2';

import { ChatItem } from './chat-item.interface';

export interface Resolves {
  messages: FirebaseListObservable<ChatItem[]>,
  nick: string,
}
