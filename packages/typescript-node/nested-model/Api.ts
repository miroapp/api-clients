import { Team as BaseTeam } from '../model/team'
import { Board } from './index'
import { MiroEndpoints } from '../api'

export abstract class Api extends BaseTeam {
    abstract _api: MiroEndpoints
    abstract _headParams: []

    /**
    * Get all boards matching the search query
    * Returns an iterator which will automatically fetch next page from the API
    */
    async *getAllBoards (query?: Omit<Parameters<MiroEndpoints['getBoards']>[0], 'offset'> ): AsyncGenerator<Board, void> {
        let currentOffset = 0
        while (true) {
            const response = (await this._api.getBoards({
                ...query,
                offset: currentOffset.toString()
            })).body

            for (const board of response.data || []) {
                yield new Board(this._api, [board.id || ''], board)
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

