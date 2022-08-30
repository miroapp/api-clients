import {Team as BaseTeam} from '../model/team'
import {Board} from './index'
import {MiroApi} from '../api'

export abstract class Team extends BaseTeam {
  abstract _api: MiroApi

  /** {@inheritDoc api!MiroApi.getBoards} */
  async getBoards(query: Omit<Parameters<MiroApi['getBoards']>[0], 'teamId'>): Promise<Board[]> {
    return (
      (await this._api.getBoards({...query, teamId: this.id?.toString()})).body.data?.map((board) => {
        return new Board(this._api, board.id, board)
      }) || []
    )
  }
}
