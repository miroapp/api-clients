/** @hidden */
export function toString(id: number | string | undefined) {
  return id ? id.toString() : ''
}

/** @hidden */
export function hasMoreData(response: {offset?: number; data?: Array<any>; total?: number}): boolean {
  const responseOffset = response.offset || 0
  const size = response.data?.length || 0
  const total = response.total || 0

  return !!total && !!size && responseOffset + size < total
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends string ? string : DeepPartial<T[P]>
    }
  : T

export type KeepBase<T> = DeepPartial<T>
