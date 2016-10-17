import { Routes } from '@angular/router';

import { RoomRoutes } from './room/room.routing';
import { EntryRoutes } from './entry/entry.routing';

export const ChatRoutes: Routes = [
  ...EntryRoutes,
  ...RoomRoutes,
];