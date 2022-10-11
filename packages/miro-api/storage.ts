import {ExternalUserId} from './index'

export type Awaitable<T> = Promise<T> | T

export interface State {
  userId: string
  accessToken: string
  refreshToken?: string
  tokenExpiresAt?: string
}

export interface Storage {
  get(userId: ExternalUserId): Promise<State | undefined>
  set(userId: ExternalUserId, state: State | undefined): Awaitable<void>
}

export class InMemoryStorage implements Storage {
  storage: Record<string, State | undefined>

  constructor() {
    this.storage = {}
  }

  async get(userId: ExternalUserId) {
    return this.storage[userId]
  }

  async set(userId: ExternalUserId, state: State | undefined) {
    this.storage[userId] = state
  }
}
