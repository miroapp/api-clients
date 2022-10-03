import {Organization as BaseOrganization} from '../model/organization'
import {OrganizationMember, Team} from './index'
import {MiroApi} from '../api'
import {GetParameters1} from './helpers'

/** @hidden */
export abstract class Organization extends BaseOrganization {
  abstract _api: MiroApi

  async *getAllOrganizationMembers(
    query: Omit<Parameters<MiroApi['enterpriseGetOrganizationMembers']>[1], 'offset'>,
  ): AsyncGenerator<OrganizationMember, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response = (await this._api.enterpriseGetOrganizationMembers(this.id.toString(), {...query, cursor})).body

      for (const item of response.data || []) {
        yield new OrganizationMember(this._api, this.id, item.id, item)
      }

      if (!response.data?.length || !response.cursor) return
    }
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetTeams} */
  async *getAllTeams(...parameters: GetParameters1<MiroApi['enterpriseGetTeams']>): AsyncGenerator<Team, void> {
    const result = (await this._api.enterpriseGetTeams(this.id.toString(), ...parameters)).body

    for (const team of result) {
      yield new Team(this._api, this.id, team.id, team)
    }
  }
}
