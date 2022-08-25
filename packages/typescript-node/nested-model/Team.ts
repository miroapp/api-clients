import {Team as BaseTeam} from '../model/team'
import {Board} from './index'
import {MiroEndpoints} from '../api'

export abstract class Team extends BaseTeam {
  abstract _api: MiroEndpoints
  abstract _headParams: [string, string]

  /** {@inheritDoc api!MiroEndpoints.getBoards} */
  async getBoards(query: Omit<Parameters<MiroEndpoints['getBoards']>[0], 'teamId'>): Promise<Board[]> {
    return (
      (await this._api.getBoards({...query, teamId: this._headParams[1]})).body.data?.map((board) => {
        return new Board(this._api, [board.id || ''], board)
      }) || []
    )
  }
}
