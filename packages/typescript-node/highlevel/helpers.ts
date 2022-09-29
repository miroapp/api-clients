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

/** @hidden */
export type GetParameters0<Method extends (p1: any, ...rest: any[]) => any> = Method extends (
  ...rest: infer Rest
) => any
  ? Rest
  : never

/** @hidden */
export type GetParameters1<Method extends (p1: any, ...rest: any[]) => any> = Method extends (
  p1: any,
  ...rest: infer Rest
) => any
  ? Rest
  : never

/** @hidden */
export type GetParameters2<Method extends (p1: any, p2: any, ...rest: any[]) => any> = Method extends (
  p1: any,
  p2: any,
  ...rest: infer Rest
) => any
  ? Rest
  : never

/** @hidden */
export type GetParameters3<Method extends (p1: any, p2: any, p3: any, ...rest: any[]) => any> = Method extends (
  p1: any,
  p2: any,
  p3: any,
  ...rest: infer Rest
) => any
  ? Rest
  : never

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends string ? string : DeepPartial<T[P]>
    }
  : T

export type KeepBase<T> = DeepPartial<T>
