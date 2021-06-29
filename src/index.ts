import type { AnyObject, PickOptional, PickRequired } from './types';

/**
 * @deprecated Use `PickOptional` instead
 * @beta
 */
export type Optional<T extends AnyObject> = PickOptional<T>;
/**
 * @deprecated Use `PickRequired` instead
 * @beta
 */
export type Required<T extends AnyObject> = PickRequired<T>;

export type {
  AnyAsyncFunction,
  AnyFunction,
  AnyObject,
  Callback,
  DeepPartial,
  DeepWritable,
  If,
  Json,
  JsonArray,
  JsonObject,
  JsonPrimitive,
  KeysOfType,
  MaybeAsync,
  Nominal,
  PickOptional,
  PickRequired,
  PlainObject,
  Pretty,
  Primitives,
  TupleOf,
  UndefinedToOptional,
} from './types';
