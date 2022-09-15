import {Board} from './index'
import {MiroApi} from '../api'

export abstract class Api {
  abstract _api: MiroApi

  /** {@inheritDoc api!MiroApi.revokeToken} */
  async revokeToken(): Promise<void> {
    await this._api.revokeToken(
      typeof this._api.accessToken === 'function' ? await this._api.accessToken() : this._api.accessToken,
    )
  }

  /**
   * Get all boards matching the search query
   * Returns an iterator which will automatically paginate and fetch all available boards
   */
  async *getAllBoards(query?: Omit<Parameters<MiroApi['getBoards']>[0], 'offset'>): AsyncGenerator<Board, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getBoards({
          ...query,
          offset: currentOffset.toString(),
        })
      ).body

      for (const board of response.data || []) {
        yield new Board(this._api, board.id, board)
      }

      const responseOffset = response.offset || 0
      const size = response.data?.length || 0
      const total = response.total || 0

      if (!total || !size) return
      if (responseOffset + size >= total) return

      currentOffset += size
    }
  }
}
