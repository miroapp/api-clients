
/** @hidden */
export function toString(id: number | string | undefined) {
  return id ? id.toString() : "";
}

/** @hidden */
export type GetParameters0<Method extends (p1: any, ...rest: any[]) => any> =
  Method extends (...rest: infer Rest) => any ? Rest : never;

/** @hidden */
export type GetParameters1<Method extends (p1: any, ...rest: any[]) => any> =
  Method extends (p1: any, ...rest: infer Rest) => any ? Rest : never;

/** @hidden */
export type GetParameters2<Method extends (p1: any, p2: any, ...rest: any[]) => any> =
  Method extends (p1: any, p2: any, ...rest: infer Rest) => any ? Rest : never;

/** @hidden */
export type GetParameters3<
  Method extends (p1: any, p2: any, p3: any, ...rest: any[]) => any
> = Method extends (p1: any, p2: any, p3: any, ...rest: infer Rest) => any
  ? Rest
  : never;

export type KeepBase<T> = {
  [P in keyof Omit<T, "_api" | "_headParams"> as T[P] extends Function
    ? never
    : P]: T[P];
};

