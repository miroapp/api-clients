import {Team as BaseTeam} from '../model/team'
import {Board, TeamMember} from './index'
import {MiroApi} from '../api'
import {hasMoreData} from './helpers'

/** @hidden */
export abstract class Team extends BaseTeam {
  abstract _api: MiroApi
  abstract orgId: string

  /**
   * Get all boards of the current team matching the search query
   * Returns an iterator which will automatically paginate and fetch all available boards
   */
  async *getAllBoards(query?: Omit<Parameters<MiroApi['getBoards']>[0], 'offset'>): AsyncGenerator<Board, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getBoards({
          ...query,
          teamId: this.id.toString(),
          offset: currentOffset.toString(),
        })
      ).body

      for (const board of response.data || []) {
        yield new Board(this._api, board.id, board)
      }

      if (!hasMoreData(response)) return
      currentOffset += response.data?.length || 0
    }
  }

  /**
   * Get all team members of the current team
   * Returns an iterator which will automatically paginate and fetch all available team members
   */
  async *getAllTeamMembers(
    query?: Omit<Parameters<MiroApi['enterpriseGetTeamMembers']>[2], 'cursor'>,
  ): AsyncGenerator<TeamMember, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response = (
        await this._api.enterpriseGetTeamMembers(this.orgId.toString(), this.id.toString(), {...query, cursor})
      ).body

      for (const member of response || []) {
        yield new TeamMember(this._api, this.orgId, this.id, member.memberId, member)
      }
      return
    }
  }
}
