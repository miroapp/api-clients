import { Team as BaseTeam } from '../model/team'
import { MiroEndpoints } from '../api'

export abstract class Team extends BaseTeam {
    abstract _api: MiroEndpoints
    abstract _headParams: [string, string]

    /** {@inheritDoc api!MiroEndpoints.getBoards} */
    getBoards (query: Parameters<MiroEndpoints['getBoards']>[0] ) {
        return this._api.getBoards({...query, teamId: this._headParams[1]})
    }
}
