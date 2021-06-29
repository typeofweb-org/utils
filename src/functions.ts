import type { ErrorCtor, JsonObject } from './types';

/**
 * @beta
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @beta
 */
export const isObject = (val: unknown): val is JsonObject =>
  typeof val === 'object' && !!val && !Array.isArray(val);

/**
 * @beta
 */
export function invariant(
  predicate: unknown,
  message: string,
  ErrorConstructor: ErrorCtor<Error> = Error,
): asserts predicate {
  if (!predicate) {
    throw new ErrorConstructor(message);
  }
}
