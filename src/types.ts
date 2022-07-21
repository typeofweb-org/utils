/**
 * @beta
 */
export type Primitives = string | number | boolean;

/**
 * @beta
 */
export type AnyObject = Record<PropertyKey, unknown>;

/**
 * @beta
 */
export type PlainObject = { readonly [name: string]: any };

/**
 * @beta
 */
export type DeepPartial<T> = {
  readonly [P in keyof T]?: T[P] extends AnyObject ? DeepPartial<T[P]> : T[P];
};

/**
 * @beta
 */
export type AnyFunction = (...args: readonly any[]) => any;

/**
 * @beta
 */
export type AnyAsyncFunction = (...args: readonly any[]) => Promise<any>;

/**
 * @beta
 */
export type Pretty<X> = X extends AnyObject
  ? {
      readonly [K in keyof X]: X[K];
    }
  : X;

/**
 * @beta
 */
export type MaybeAsync<T> = T | Promise<T>;

/**
 * @beta
 */
export interface Callback<T> {
  (arg: T): void;
}

/**
 * @beta
 */
export type DeepWritable<T> = {
  -readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepWritable<T[K]> : T[K];
};

/**
 * @beta
 */
export type JsonPrimitive = number | string | boolean | null;

/**
 * @beta
 */
export interface JsonArray extends ReadonlyArray<Json> {}

/**
 * @beta
 */
export interface JsonObject {
  readonly [Key: string]: Json;
  readonly [Key: number]: Json;
}

/**
 * @beta
 */
export type Json = JsonPrimitive | JsonObject | JsonArray;

/**
 * @beta
 */
export type Nominal<T, K extends string> = T & { readonly __tag: K };

/**
 * @beta
 */
export type KeysOfType<T extends AnyObject, SelectedType> = {
  readonly [key in keyof T]: SelectedType extends T[key] ? key : never;
}[keyof T];

/**
 * @beta
 */
export type PickOptional<T extends AnyObject> = Partial<Pick<T, KeysOfType<T, undefined>>>;

/**
 * @beta
 */
export type PickRequired<T extends AnyObject> = Omit<T, KeysOfType<T, undefined>>;

/**
 * @beta
 */
export type UndefinedToOptional<T> = T extends PlainObject
  ? {} extends T
    ? {}
    : T extends Date | readonly unknown[]
    ? T
    : Pretty<PickRequired<T> & PickOptional<T>>
  : T;

/**
 * @beta
 */
export type TupleOf<
  T,
  Length extends number,
  Acc extends readonly unknown[] = readonly [],
> = Acc['length'] extends Length ? Acc : TupleOf<T, Length, readonly [T, ...Acc]>;

/**
 * @beta
 */
export type If<T, Condition, Y, N = never> = T extends Condition ? Y : N;

/**
 * @beta
 */
export interface ErrorCtor<T extends Error> {
  new (...args: ConstructorParameters<typeof Error>): T;
}
