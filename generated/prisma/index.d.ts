
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DailyRoutine
 * 
 */
export type DailyRoutine = $Result.DefaultSelection<Prisma.$DailyRoutinePayload>
/**
 * Model WeeklySubmission
 * 
 */
export type WeeklySubmission = $Result.DefaultSelection<Prisma.$WeeklySubmissionPayload>
/**
 * Model MonthlyReview
 * 
 */
export type MonthlyReview = $Result.DefaultSelection<Prisma.$MonthlyReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more DailyRoutines
 * const dailyRoutines = await prisma.dailyRoutine.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more DailyRoutines
   * const dailyRoutines = await prisma.dailyRoutine.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dailyRoutine`: Exposes CRUD operations for the **DailyRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRoutines
    * const dailyRoutines = await prisma.dailyRoutine.findMany()
    * ```
    */
  get dailyRoutine(): Prisma.DailyRoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklySubmission`: Exposes CRUD operations for the **WeeklySubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySubmissions
    * const weeklySubmissions = await prisma.weeklySubmission.findMany()
    * ```
    */
  get weeklySubmission(): Prisma.WeeklySubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyReview`: Exposes CRUD operations for the **MonthlyReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyReviews
    * const monthlyReviews = await prisma.monthlyReview.findMany()
    * ```
    */
  get monthlyReview(): Prisma.MonthlyReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DailyRoutine: 'DailyRoutine',
    WeeklySubmission: 'WeeklySubmission',
    MonthlyReview: 'MonthlyReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dailyRoutine" | "weeklySubmission" | "monthlyReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DailyRoutine: {
        payload: Prisma.$DailyRoutinePayload<ExtArgs>
        fields: Prisma.DailyRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          findFirst: {
            args: Prisma.DailyRoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          findMany: {
            args: Prisma.DailyRoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>[]
          }
          create: {
            args: Prisma.DailyRoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          createMany: {
            args: Prisma.DailyRoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyRoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          update: {
            args: Prisma.DailyRoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          deleteMany: {
            args: Prisma.DailyRoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyRoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          aggregate: {
            args: Prisma.DailyRoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyRoutine>
          }
          groupBy: {
            args: Prisma.DailyRoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRoutineCountArgs<ExtArgs>
            result: $Utils.Optional<DailyRoutineCountAggregateOutputType> | number
          }
        }
      }
      WeeklySubmission: {
        payload: Prisma.$WeeklySubmissionPayload<ExtArgs>
        fields: Prisma.WeeklySubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          findFirst: {
            args: Prisma.WeeklySubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          findMany: {
            args: Prisma.WeeklySubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>[]
          }
          create: {
            args: Prisma.WeeklySubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          createMany: {
            args: Prisma.WeeklySubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WeeklySubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          update: {
            args: Prisma.WeeklySubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklySubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          aggregate: {
            args: Prisma.WeeklySubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySubmission>
          }
          groupBy: {
            args: Prisma.WeeklySubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySubmissionCountAggregateOutputType> | number
          }
        }
      }
      MonthlyReview: {
        payload: Prisma.$MonthlyReviewPayload<ExtArgs>
        fields: Prisma.MonthlyReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          findFirst: {
            args: Prisma.MonthlyReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          findMany: {
            args: Prisma.MonthlyReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>[]
          }
          create: {
            args: Prisma.MonthlyReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          createMany: {
            args: Prisma.MonthlyReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlyReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          update: {
            args: Prisma.MonthlyReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReviewPayload>
          }
          aggregate: {
            args: Prisma.MonthlyReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyReview>
          }
          groupBy: {
            args: Prisma.MonthlyReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyReviewCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    dailyRoutine?: DailyRoutineOmit
    weeklySubmission?: WeeklySubmissionOmit
    monthlyReview?: MonthlyReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WeeklySubmissionCountOutputType
   */

  export type WeeklySubmissionCountOutputType = {
    monthlyReviews: number
  }

  export type WeeklySubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthlyReviews?: boolean | WeeklySubmissionCountOutputTypeCountMonthlyReviewsArgs
  }

  // Custom InputTypes
  /**
   * WeeklySubmissionCountOutputType without action
   */
  export type WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmissionCountOutputType
     */
    select?: WeeklySubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklySubmissionCountOutputType without action
   */
  export type WeeklySubmissionCountOutputTypeCountMonthlyReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DailyRoutine
   */

  export type AggregateDailyRoutine = {
    _count: DailyRoutineCountAggregateOutputType | null
    _avg: DailyRoutineAvgAggregateOutputType | null
    _sum: DailyRoutineSumAggregateOutputType | null
    _min: DailyRoutineMinAggregateOutputType | null
    _max: DailyRoutineMaxAggregateOutputType | null
  }

  export type DailyRoutineAvgAggregateOutputType = {
    id: number | null
  }

  export type DailyRoutineSumAggregateOutputType = {
    id: number | null
  }

  export type DailyRoutineMinAggregateOutputType = {
    id: number | null
    date: Date | null
    gestureDrawing: boolean | null
    construction: boolean | null
    targetedPractice: boolean | null
  }

  export type DailyRoutineMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    gestureDrawing: boolean | null
    construction: boolean | null
    targetedPractice: boolean | null
  }

  export type DailyRoutineCountAggregateOutputType = {
    id: number
    date: number
    gestureDrawing: number
    construction: number
    targetedPractice: number
    _all: number
  }


  export type DailyRoutineAvgAggregateInputType = {
    id?: true
  }

  export type DailyRoutineSumAggregateInputType = {
    id?: true
  }

  export type DailyRoutineMinAggregateInputType = {
    id?: true
    date?: true
    gestureDrawing?: true
    construction?: true
    targetedPractice?: true
  }

  export type DailyRoutineMaxAggregateInputType = {
    id?: true
    date?: true
    gestureDrawing?: true
    construction?: true
    targetedPractice?: true
  }

  export type DailyRoutineCountAggregateInputType = {
    id?: true
    date?: true
    gestureDrawing?: true
    construction?: true
    targetedPractice?: true
    _all?: true
  }

  export type DailyRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRoutine to aggregate.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRoutines
    **/
    _count?: true | DailyRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyRoutineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyRoutineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRoutineMaxAggregateInputType
  }

  export type GetDailyRoutineAggregateType<T extends DailyRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRoutine[P]>
      : GetScalarType<T[P], AggregateDailyRoutine[P]>
  }




  export type DailyRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRoutineWhereInput
    orderBy?: DailyRoutineOrderByWithAggregationInput | DailyRoutineOrderByWithAggregationInput[]
    by: DailyRoutineScalarFieldEnum[] | DailyRoutineScalarFieldEnum
    having?: DailyRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRoutineCountAggregateInputType | true
    _avg?: DailyRoutineAvgAggregateInputType
    _sum?: DailyRoutineSumAggregateInputType
    _min?: DailyRoutineMinAggregateInputType
    _max?: DailyRoutineMaxAggregateInputType
  }

  export type DailyRoutineGroupByOutputType = {
    id: number
    date: Date
    gestureDrawing: boolean
    construction: boolean
    targetedPractice: boolean
    _count: DailyRoutineCountAggregateOutputType | null
    _avg: DailyRoutineAvgAggregateOutputType | null
    _sum: DailyRoutineSumAggregateOutputType | null
    _min: DailyRoutineMinAggregateOutputType | null
    _max: DailyRoutineMaxAggregateOutputType | null
  }

  type GetDailyRoutineGroupByPayload<T extends DailyRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRoutineGroupByOutputType[P]>
        }
      >
    >


  export type DailyRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    gestureDrawing?: boolean
    construction?: boolean
    targetedPractice?: boolean
  }, ExtArgs["result"]["dailyRoutine"]>



  export type DailyRoutineSelectScalar = {
    id?: boolean
    date?: boolean
    gestureDrawing?: boolean
    construction?: boolean
    targetedPractice?: boolean
  }

  export type DailyRoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "gestureDrawing" | "construction" | "targetedPractice", ExtArgs["result"]["dailyRoutine"]>

  export type $DailyRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRoutine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      gestureDrawing: boolean
      construction: boolean
      targetedPractice: boolean
    }, ExtArgs["result"]["dailyRoutine"]>
    composites: {}
  }

  type DailyRoutineGetPayload<S extends boolean | null | undefined | DailyRoutineDefaultArgs> = $Result.GetResult<Prisma.$DailyRoutinePayload, S>

  type DailyRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyRoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyRoutineCountAggregateInputType | true
    }

  export interface DailyRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRoutine'], meta: { name: 'DailyRoutine' } }
    /**
     * Find zero or one DailyRoutine that matches the filter.
     * @param {DailyRoutineFindUniqueArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyRoutineFindUniqueArgs>(args: SelectSubset<T, DailyRoutineFindUniqueArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyRoutine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyRoutineFindUniqueOrThrowArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyRoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyRoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindFirstArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyRoutineFindFirstArgs>(args?: SelectSubset<T, DailyRoutineFindFirstArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindFirstOrThrowArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyRoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyRoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRoutines
     * const dailyRoutines = await prisma.dailyRoutine.findMany()
     * 
     * // Get first 10 DailyRoutines
     * const dailyRoutines = await prisma.dailyRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRoutineWithIdOnly = await prisma.dailyRoutine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyRoutineFindManyArgs>(args?: SelectSubset<T, DailyRoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyRoutine.
     * @param {DailyRoutineCreateArgs} args - Arguments to create a DailyRoutine.
     * @example
     * // Create one DailyRoutine
     * const DailyRoutine = await prisma.dailyRoutine.create({
     *   data: {
     *     // ... data to create a DailyRoutine
     *   }
     * })
     * 
     */
    create<T extends DailyRoutineCreateArgs>(args: SelectSubset<T, DailyRoutineCreateArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyRoutines.
     * @param {DailyRoutineCreateManyArgs} args - Arguments to create many DailyRoutines.
     * @example
     * // Create many DailyRoutines
     * const dailyRoutine = await prisma.dailyRoutine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyRoutineCreateManyArgs>(args?: SelectSubset<T, DailyRoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyRoutine.
     * @param {DailyRoutineDeleteArgs} args - Arguments to delete one DailyRoutine.
     * @example
     * // Delete one DailyRoutine
     * const DailyRoutine = await prisma.dailyRoutine.delete({
     *   where: {
     *     // ... filter to delete one DailyRoutine
     *   }
     * })
     * 
     */
    delete<T extends DailyRoutineDeleteArgs>(args: SelectSubset<T, DailyRoutineDeleteArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyRoutine.
     * @param {DailyRoutineUpdateArgs} args - Arguments to update one DailyRoutine.
     * @example
     * // Update one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyRoutineUpdateArgs>(args: SelectSubset<T, DailyRoutineUpdateArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyRoutines.
     * @param {DailyRoutineDeleteManyArgs} args - Arguments to filter DailyRoutines to delete.
     * @example
     * // Delete a few DailyRoutines
     * const { count } = await prisma.dailyRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyRoutineDeleteManyArgs>(args?: SelectSubset<T, DailyRoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRoutines
     * const dailyRoutine = await prisma.dailyRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyRoutineUpdateManyArgs>(args: SelectSubset<T, DailyRoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyRoutine.
     * @param {DailyRoutineUpsertArgs} args - Arguments to update or create a DailyRoutine.
     * @example
     * // Update or create a DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.upsert({
     *   create: {
     *     // ... data to create a DailyRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRoutine we want to update
     *   }
     * })
     */
    upsert<T extends DailyRoutineUpsertArgs>(args: SelectSubset<T, DailyRoutineUpsertArgs<ExtArgs>>): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineCountArgs} args - Arguments to filter DailyRoutines to count.
     * @example
     * // Count the number of DailyRoutines
     * const count = await prisma.dailyRoutine.count({
     *   where: {
     *     // ... the filter for the DailyRoutines we want to count
     *   }
     * })
    **/
    count<T extends DailyRoutineCountArgs>(
      args?: Subset<T, DailyRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyRoutineAggregateArgs>(args: Subset<T, DailyRoutineAggregateArgs>): Prisma.PrismaPromise<GetDailyRoutineAggregateType<T>>

    /**
     * Group by DailyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRoutineGroupByArgs['orderBy'] }
        : { orderBy?: DailyRoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRoutine model
   */
  readonly fields: DailyRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyRoutine model
   */
  interface DailyRoutineFieldRefs {
    readonly id: FieldRef<"DailyRoutine", 'Int'>
    readonly date: FieldRef<"DailyRoutine", 'DateTime'>
    readonly gestureDrawing: FieldRef<"DailyRoutine", 'Boolean'>
    readonly construction: FieldRef<"DailyRoutine", 'Boolean'>
    readonly targetedPractice: FieldRef<"DailyRoutine", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DailyRoutine findUnique
   */
  export type DailyRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where: DailyRoutineWhereUniqueInput
  }

  /**
   * DailyRoutine findUniqueOrThrow
   */
  export type DailyRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where: DailyRoutineWhereUniqueInput
  }

  /**
   * DailyRoutine findFirst
   */
  export type DailyRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRoutines.
     */
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }

  /**
   * DailyRoutine findFirstOrThrow
   */
  export type DailyRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRoutines.
     */
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }

  /**
   * DailyRoutine findMany
   */
  export type DailyRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter, which DailyRoutines to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRoutines.
     */
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }

  /**
   * DailyRoutine create
   */
  export type DailyRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyRoutine.
     */
    data: XOR<DailyRoutineCreateInput, DailyRoutineUncheckedCreateInput>
  }

  /**
   * DailyRoutine createMany
   */
  export type DailyRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRoutines.
     */
    data: DailyRoutineCreateManyInput | DailyRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyRoutine update
   */
  export type DailyRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyRoutine.
     */
    data: XOR<DailyRoutineUpdateInput, DailyRoutineUncheckedUpdateInput>
    /**
     * Choose, which DailyRoutine to update.
     */
    where: DailyRoutineWhereUniqueInput
  }

  /**
   * DailyRoutine updateMany
   */
  export type DailyRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRoutines.
     */
    data: XOR<DailyRoutineUpdateManyMutationInput, DailyRoutineUncheckedUpdateManyInput>
    /**
     * Filter which DailyRoutines to update
     */
    where?: DailyRoutineWhereInput
    /**
     * Limit how many DailyRoutines to update.
     */
    limit?: number
  }

  /**
   * DailyRoutine upsert
   */
  export type DailyRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyRoutine to update in case it exists.
     */
    where: DailyRoutineWhereUniqueInput
    /**
     * In case the DailyRoutine found by the `where` argument doesn't exist, create a new DailyRoutine with this data.
     */
    create: XOR<DailyRoutineCreateInput, DailyRoutineUncheckedCreateInput>
    /**
     * In case the DailyRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRoutineUpdateInput, DailyRoutineUncheckedUpdateInput>
  }

  /**
   * DailyRoutine delete
   */
  export type DailyRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
    /**
     * Filter which DailyRoutine to delete.
     */
    where: DailyRoutineWhereUniqueInput
  }

  /**
   * DailyRoutine deleteMany
   */
  export type DailyRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRoutines to delete
     */
    where?: DailyRoutineWhereInput
    /**
     * Limit how many DailyRoutines to delete.
     */
    limit?: number
  }

  /**
   * DailyRoutine without action
   */
  export type DailyRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRoutine
     */
    omit?: DailyRoutineOmit<ExtArgs> | null
  }


  /**
   * Model WeeklySubmission
   */

  export type AggregateWeeklySubmission = {
    _count: WeeklySubmissionCountAggregateOutputType | null
    _avg: WeeklySubmissionAvgAggregateOutputType | null
    _sum: WeeklySubmissionSumAggregateOutputType | null
    _min: WeeklySubmissionMinAggregateOutputType | null
    _max: WeeklySubmissionMaxAggregateOutputType | null
  }

  export type WeeklySubmissionAvgAggregateOutputType = {
    id: number | null
    hoursSpent: number | null
    year: number | null
    weekNumber: number | null
  }

  export type WeeklySubmissionSumAggregateOutputType = {
    id: number | null
    hoursSpent: number | null
    year: number | null
    weekNumber: number | null
  }

  export type WeeklySubmissionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    hoursSpent: number | null
    date: Date | null
    year: number | null
    weekNumber: number | null
  }

  export type WeeklySubmissionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    hoursSpent: number | null
    date: Date | null
    year: number | null
    weekNumber: number | null
  }

  export type WeeklySubmissionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    hoursSpent: number
    date: number
    year: number
    weekNumber: number
    _all: number
  }


  export type WeeklySubmissionAvgAggregateInputType = {
    id?: true
    hoursSpent?: true
    year?: true
    weekNumber?: true
  }

  export type WeeklySubmissionSumAggregateInputType = {
    id?: true
    hoursSpent?: true
    year?: true
    weekNumber?: true
  }

  export type WeeklySubmissionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    hoursSpent?: true
    date?: true
    year?: true
    weekNumber?: true
  }

  export type WeeklySubmissionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    hoursSpent?: true
    date?: true
    year?: true
    weekNumber?: true
  }

  export type WeeklySubmissionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    hoursSpent?: true
    date?: true
    year?: true
    weekNumber?: true
    _all?: true
  }

  export type WeeklySubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySubmission to aggregate.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySubmissions
    **/
    _count?: true | WeeklySubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySubmissionMaxAggregateInputType
  }

  export type GetWeeklySubmissionAggregateType<T extends WeeklySubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySubmission[P]>
      : GetScalarType<T[P], AggregateWeeklySubmission[P]>
  }




  export type WeeklySubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySubmissionWhereInput
    orderBy?: WeeklySubmissionOrderByWithAggregationInput | WeeklySubmissionOrderByWithAggregationInput[]
    by: WeeklySubmissionScalarFieldEnum[] | WeeklySubmissionScalarFieldEnum
    having?: WeeklySubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySubmissionCountAggregateInputType | true
    _avg?: WeeklySubmissionAvgAggregateInputType
    _sum?: WeeklySubmissionSumAggregateInputType
    _min?: WeeklySubmissionMinAggregateInputType
    _max?: WeeklySubmissionMaxAggregateInputType
  }

  export type WeeklySubmissionGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    image: string | null
    hoursSpent: number | null
    date: Date
    year: number
    weekNumber: number
    _count: WeeklySubmissionCountAggregateOutputType | null
    _avg: WeeklySubmissionAvgAggregateOutputType | null
    _sum: WeeklySubmissionSumAggregateOutputType | null
    _min: WeeklySubmissionMinAggregateOutputType | null
    _max: WeeklySubmissionMaxAggregateOutputType | null
  }

  type GetWeeklySubmissionGroupByPayload<T extends WeeklySubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySubmissionGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    hoursSpent?: boolean
    date?: boolean
    year?: boolean
    weekNumber?: boolean
    monthlyReviews?: boolean | WeeklySubmission$monthlyReviewsArgs<ExtArgs>
    _count?: boolean | WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySubmission"]>



  export type WeeklySubmissionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    hoursSpent?: boolean
    date?: boolean
    year?: boolean
    weekNumber?: boolean
  }

  export type WeeklySubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "hoursSpent" | "date" | "year" | "weekNumber", ExtArgs["result"]["weeklySubmission"]>
  export type WeeklySubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthlyReviews?: boolean | WeeklySubmission$monthlyReviewsArgs<ExtArgs>
    _count?: boolean | WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WeeklySubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySubmission"
    objects: {
      monthlyReviews: Prisma.$MonthlyReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      description: string | null
      image: string | null
      hoursSpent: number | null
      date: Date
      year: number
      weekNumber: number
    }, ExtArgs["result"]["weeklySubmission"]>
    composites: {}
  }

  type WeeklySubmissionGetPayload<S extends boolean | null | undefined | WeeklySubmissionDefaultArgs> = $Result.GetResult<Prisma.$WeeklySubmissionPayload, S>

  type WeeklySubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklySubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklySubmissionCountAggregateInputType | true
    }

  export interface WeeklySubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySubmission'], meta: { name: 'WeeklySubmission' } }
    /**
     * Find zero or one WeeklySubmission that matches the filter.
     * @param {WeeklySubmissionFindUniqueArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySubmissionFindUniqueArgs>(args: SelectSubset<T, WeeklySubmissionFindUniqueArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklySubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklySubmissionFindUniqueOrThrowArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindFirstArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySubmissionFindFirstArgs>(args?: SelectSubset<T, WeeklySubmissionFindFirstArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindFirstOrThrowArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklySubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySubmissions
     * const weeklySubmissions = await prisma.weeklySubmission.findMany()
     * 
     * // Get first 10 WeeklySubmissions
     * const weeklySubmissions = await prisma.weeklySubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySubmissionWithIdOnly = await prisma.weeklySubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySubmissionFindManyArgs>(args?: SelectSubset<T, WeeklySubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklySubmission.
     * @param {WeeklySubmissionCreateArgs} args - Arguments to create a WeeklySubmission.
     * @example
     * // Create one WeeklySubmission
     * const WeeklySubmission = await prisma.weeklySubmission.create({
     *   data: {
     *     // ... data to create a WeeklySubmission
     *   }
     * })
     * 
     */
    create<T extends WeeklySubmissionCreateArgs>(args: SelectSubset<T, WeeklySubmissionCreateArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklySubmissions.
     * @param {WeeklySubmissionCreateManyArgs} args - Arguments to create many WeeklySubmissions.
     * @example
     * // Create many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySubmissionCreateManyArgs>(args?: SelectSubset<T, WeeklySubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeeklySubmission.
     * @param {WeeklySubmissionDeleteArgs} args - Arguments to delete one WeeklySubmission.
     * @example
     * // Delete one WeeklySubmission
     * const WeeklySubmission = await prisma.weeklySubmission.delete({
     *   where: {
     *     // ... filter to delete one WeeklySubmission
     *   }
     * })
     * 
     */
    delete<T extends WeeklySubmissionDeleteArgs>(args: SelectSubset<T, WeeklySubmissionDeleteArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklySubmission.
     * @param {WeeklySubmissionUpdateArgs} args - Arguments to update one WeeklySubmission.
     * @example
     * // Update one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySubmissionUpdateArgs>(args: SelectSubset<T, WeeklySubmissionUpdateArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklySubmissions.
     * @param {WeeklySubmissionDeleteManyArgs} args - Arguments to filter WeeklySubmissions to delete.
     * @example
     * // Delete a few WeeklySubmissions
     * const { count } = await prisma.weeklySubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySubmissionDeleteManyArgs>(args?: SelectSubset<T, WeeklySubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySubmissionUpdateManyArgs>(args: SelectSubset<T, WeeklySubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklySubmission.
     * @param {WeeklySubmissionUpsertArgs} args - Arguments to update or create a WeeklySubmission.
     * @example
     * // Update or create a WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.upsert({
     *   create: {
     *     // ... data to create a WeeklySubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySubmission we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySubmissionUpsertArgs>(args: SelectSubset<T, WeeklySubmissionUpsertArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionCountArgs} args - Arguments to filter WeeklySubmissions to count.
     * @example
     * // Count the number of WeeklySubmissions
     * const count = await prisma.weeklySubmission.count({
     *   where: {
     *     // ... the filter for the WeeklySubmissions we want to count
     *   }
     * })
    **/
    count<T extends WeeklySubmissionCountArgs>(
      args?: Subset<T, WeeklySubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklySubmissionAggregateArgs>(args: Subset<T, WeeklySubmissionAggregateArgs>): Prisma.PrismaPromise<GetWeeklySubmissionAggregateType<T>>

    /**
     * Group by WeeklySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklySubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySubmissionGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklySubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySubmission model
   */
  readonly fields: WeeklySubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monthlyReviews<T extends WeeklySubmission$monthlyReviewsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmission$monthlyReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklySubmission model
   */
  interface WeeklySubmissionFieldRefs {
    readonly id: FieldRef<"WeeklySubmission", 'Int'>
    readonly title: FieldRef<"WeeklySubmission", 'String'>
    readonly description: FieldRef<"WeeklySubmission", 'String'>
    readonly image: FieldRef<"WeeklySubmission", 'String'>
    readonly hoursSpent: FieldRef<"WeeklySubmission", 'Float'>
    readonly date: FieldRef<"WeeklySubmission", 'DateTime'>
    readonly year: FieldRef<"WeeklySubmission", 'Int'>
    readonly weekNumber: FieldRef<"WeeklySubmission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySubmission findUnique
   */
  export type WeeklySubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission findUniqueOrThrow
   */
  export type WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission findFirst
   */
  export type WeeklySubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission findFirstOrThrow
   */
  export type WeeklySubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission findMany
   */
  export type WeeklySubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmissions to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission create
   */
  export type WeeklySubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySubmission.
     */
    data: XOR<WeeklySubmissionCreateInput, WeeklySubmissionUncheckedCreateInput>
  }

  /**
   * WeeklySubmission createMany
   */
  export type WeeklySubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySubmissions.
     */
    data: WeeklySubmissionCreateManyInput | WeeklySubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklySubmission update
   */
  export type WeeklySubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySubmission.
     */
    data: XOR<WeeklySubmissionUpdateInput, WeeklySubmissionUncheckedUpdateInput>
    /**
     * Choose, which WeeklySubmission to update.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission updateMany
   */
  export type WeeklySubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySubmissions.
     */
    data: XOR<WeeklySubmissionUpdateManyMutationInput, WeeklySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySubmissions to update
     */
    where?: WeeklySubmissionWhereInput
    /**
     * Limit how many WeeklySubmissions to update.
     */
    limit?: number
  }

  /**
   * WeeklySubmission upsert
   */
  export type WeeklySubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySubmission to update in case it exists.
     */
    where: WeeklySubmissionWhereUniqueInput
    /**
     * In case the WeeklySubmission found by the `where` argument doesn't exist, create a new WeeklySubmission with this data.
     */
    create: XOR<WeeklySubmissionCreateInput, WeeklySubmissionUncheckedCreateInput>
    /**
     * In case the WeeklySubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySubmissionUpdateInput, WeeklySubmissionUncheckedUpdateInput>
  }

  /**
   * WeeklySubmission delete
   */
  export type WeeklySubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter which WeeklySubmission to delete.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission deleteMany
   */
  export type WeeklySubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySubmissions to delete
     */
    where?: WeeklySubmissionWhereInput
    /**
     * Limit how many WeeklySubmissions to delete.
     */
    limit?: number
  }

  /**
   * WeeklySubmission.monthlyReviews
   */
  export type WeeklySubmission$monthlyReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    where?: MonthlyReviewWhereInput
    orderBy?: MonthlyReviewOrderByWithRelationInput | MonthlyReviewOrderByWithRelationInput[]
    cursor?: MonthlyReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyReviewScalarFieldEnum | MonthlyReviewScalarFieldEnum[]
  }

  /**
   * WeeklySubmission without action
   */
  export type WeeklySubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyReview
   */

  export type AggregateMonthlyReview = {
    _count: MonthlyReviewCountAggregateOutputType | null
    _avg: MonthlyReviewAvgAggregateOutputType | null
    _sum: MonthlyReviewSumAggregateOutputType | null
    _min: MonthlyReviewMinAggregateOutputType | null
    _max: MonthlyReviewMaxAggregateOutputType | null
  }

  export type MonthlyReviewAvgAggregateOutputType = {
    id: number | null
    bestPieceId: number | null
  }

  export type MonthlyReviewSumAggregateOutputType = {
    id: number | null
    bestPieceId: number | null
  }

  export type MonthlyReviewMinAggregateOutputType = {
    id: number | null
    month: string | null
    notes: string | null
    bestPieceId: number | null
  }

  export type MonthlyReviewMaxAggregateOutputType = {
    id: number | null
    month: string | null
    notes: string | null
    bestPieceId: number | null
  }

  export type MonthlyReviewCountAggregateOutputType = {
    id: number
    month: number
    notes: number
    bestPieceId: number
    _all: number
  }


  export type MonthlyReviewAvgAggregateInputType = {
    id?: true
    bestPieceId?: true
  }

  export type MonthlyReviewSumAggregateInputType = {
    id?: true
    bestPieceId?: true
  }

  export type MonthlyReviewMinAggregateInputType = {
    id?: true
    month?: true
    notes?: true
    bestPieceId?: true
  }

  export type MonthlyReviewMaxAggregateInputType = {
    id?: true
    month?: true
    notes?: true
    bestPieceId?: true
  }

  export type MonthlyReviewCountAggregateInputType = {
    id?: true
    month?: true
    notes?: true
    bestPieceId?: true
    _all?: true
  }

  export type MonthlyReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReview to aggregate.
     */
    where?: MonthlyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReviews to fetch.
     */
    orderBy?: MonthlyReviewOrderByWithRelationInput | MonthlyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyReviews
    **/
    _count?: true | MonthlyReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyReviewMaxAggregateInputType
  }

  export type GetMonthlyReviewAggregateType<T extends MonthlyReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyReview[P]>
      : GetScalarType<T[P], AggregateMonthlyReview[P]>
  }




  export type MonthlyReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReviewWhereInput
    orderBy?: MonthlyReviewOrderByWithAggregationInput | MonthlyReviewOrderByWithAggregationInput[]
    by: MonthlyReviewScalarFieldEnum[] | MonthlyReviewScalarFieldEnum
    having?: MonthlyReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyReviewCountAggregateInputType | true
    _avg?: MonthlyReviewAvgAggregateInputType
    _sum?: MonthlyReviewSumAggregateInputType
    _min?: MonthlyReviewMinAggregateInputType
    _max?: MonthlyReviewMaxAggregateInputType
  }

  export type MonthlyReviewGroupByOutputType = {
    id: number
    month: string
    notes: string | null
    bestPieceId: number | null
    _count: MonthlyReviewCountAggregateOutputType | null
    _avg: MonthlyReviewAvgAggregateOutputType | null
    _sum: MonthlyReviewSumAggregateOutputType | null
    _min: MonthlyReviewMinAggregateOutputType | null
    _max: MonthlyReviewMaxAggregateOutputType | null
  }

  type GetMonthlyReviewGroupByPayload<T extends MonthlyReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyReviewGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyReviewGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    notes?: boolean
    bestPieceId?: boolean
    bestPiece?: boolean | MonthlyReview$bestPieceArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyReview"]>



  export type MonthlyReviewSelectScalar = {
    id?: boolean
    month?: boolean
    notes?: boolean
    bestPieceId?: boolean
  }

  export type MonthlyReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "month" | "notes" | "bestPieceId", ExtArgs["result"]["monthlyReview"]>
  export type MonthlyReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bestPiece?: boolean | MonthlyReview$bestPieceArgs<ExtArgs>
  }

  export type $MonthlyReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyReview"
    objects: {
      bestPiece: Prisma.$WeeklySubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      month: string
      notes: string | null
      bestPieceId: number | null
    }, ExtArgs["result"]["monthlyReview"]>
    composites: {}
  }

  type MonthlyReviewGetPayload<S extends boolean | null | undefined | MonthlyReviewDefaultArgs> = $Result.GetResult<Prisma.$MonthlyReviewPayload, S>

  type MonthlyReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyReviewCountAggregateInputType | true
    }

  export interface MonthlyReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyReview'], meta: { name: 'MonthlyReview' } }
    /**
     * Find zero or one MonthlyReview that matches the filter.
     * @param {MonthlyReviewFindUniqueArgs} args - Arguments to find a MonthlyReview
     * @example
     * // Get one MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyReviewFindUniqueArgs>(args: SelectSubset<T, MonthlyReviewFindUniqueArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyReviewFindUniqueOrThrowArgs} args - Arguments to find a MonthlyReview
     * @example
     * // Get one MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewFindFirstArgs} args - Arguments to find a MonthlyReview
     * @example
     * // Get one MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyReviewFindFirstArgs>(args?: SelectSubset<T, MonthlyReviewFindFirstArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewFindFirstOrThrowArgs} args - Arguments to find a MonthlyReview
     * @example
     * // Get one MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyReviews
     * const monthlyReviews = await prisma.monthlyReview.findMany()
     * 
     * // Get first 10 MonthlyReviews
     * const monthlyReviews = await prisma.monthlyReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyReviewWithIdOnly = await prisma.monthlyReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyReviewFindManyArgs>(args?: SelectSubset<T, MonthlyReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyReview.
     * @param {MonthlyReviewCreateArgs} args - Arguments to create a MonthlyReview.
     * @example
     * // Create one MonthlyReview
     * const MonthlyReview = await prisma.monthlyReview.create({
     *   data: {
     *     // ... data to create a MonthlyReview
     *   }
     * })
     * 
     */
    create<T extends MonthlyReviewCreateArgs>(args: SelectSubset<T, MonthlyReviewCreateArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyReviews.
     * @param {MonthlyReviewCreateManyArgs} args - Arguments to create many MonthlyReviews.
     * @example
     * // Create many MonthlyReviews
     * const monthlyReview = await prisma.monthlyReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyReviewCreateManyArgs>(args?: SelectSubset<T, MonthlyReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyReview.
     * @param {MonthlyReviewDeleteArgs} args - Arguments to delete one MonthlyReview.
     * @example
     * // Delete one MonthlyReview
     * const MonthlyReview = await prisma.monthlyReview.delete({
     *   where: {
     *     // ... filter to delete one MonthlyReview
     *   }
     * })
     * 
     */
    delete<T extends MonthlyReviewDeleteArgs>(args: SelectSubset<T, MonthlyReviewDeleteArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyReview.
     * @param {MonthlyReviewUpdateArgs} args - Arguments to update one MonthlyReview.
     * @example
     * // Update one MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyReviewUpdateArgs>(args: SelectSubset<T, MonthlyReviewUpdateArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyReviews.
     * @param {MonthlyReviewDeleteManyArgs} args - Arguments to filter MonthlyReviews to delete.
     * @example
     * // Delete a few MonthlyReviews
     * const { count } = await prisma.monthlyReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyReviewDeleteManyArgs>(args?: SelectSubset<T, MonthlyReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyReviews
     * const monthlyReview = await prisma.monthlyReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyReviewUpdateManyArgs>(args: SelectSubset<T, MonthlyReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyReview.
     * @param {MonthlyReviewUpsertArgs} args - Arguments to update or create a MonthlyReview.
     * @example
     * // Update or create a MonthlyReview
     * const monthlyReview = await prisma.monthlyReview.upsert({
     *   create: {
     *     // ... data to create a MonthlyReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyReview we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyReviewUpsertArgs>(args: SelectSubset<T, MonthlyReviewUpsertArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewCountArgs} args - Arguments to filter MonthlyReviews to count.
     * @example
     * // Count the number of MonthlyReviews
     * const count = await prisma.monthlyReview.count({
     *   where: {
     *     // ... the filter for the MonthlyReviews we want to count
     *   }
     * })
    **/
    count<T extends MonthlyReviewCountArgs>(
      args?: Subset<T, MonthlyReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyReviewAggregateArgs>(args: Subset<T, MonthlyReviewAggregateArgs>): Prisma.PrismaPromise<GetMonthlyReviewAggregateType<T>>

    /**
     * Group by MonthlyReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyReviewGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyReview model
   */
  readonly fields: MonthlyReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bestPiece<T extends MonthlyReview$bestPieceArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyReview$bestPieceArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyReview model
   */
  interface MonthlyReviewFieldRefs {
    readonly id: FieldRef<"MonthlyReview", 'Int'>
    readonly month: FieldRef<"MonthlyReview", 'String'>
    readonly notes: FieldRef<"MonthlyReview", 'String'>
    readonly bestPieceId: FieldRef<"MonthlyReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyReview findUnique
   */
  export type MonthlyReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReview to fetch.
     */
    where: MonthlyReviewWhereUniqueInput
  }

  /**
   * MonthlyReview findUniqueOrThrow
   */
  export type MonthlyReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReview to fetch.
     */
    where: MonthlyReviewWhereUniqueInput
  }

  /**
   * MonthlyReview findFirst
   */
  export type MonthlyReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReview to fetch.
     */
    where?: MonthlyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReviews to fetch.
     */
    orderBy?: MonthlyReviewOrderByWithRelationInput | MonthlyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReviews.
     */
    cursor?: MonthlyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReviews.
     */
    distinct?: MonthlyReviewScalarFieldEnum | MonthlyReviewScalarFieldEnum[]
  }

  /**
   * MonthlyReview findFirstOrThrow
   */
  export type MonthlyReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReview to fetch.
     */
    where?: MonthlyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReviews to fetch.
     */
    orderBy?: MonthlyReviewOrderByWithRelationInput | MonthlyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReviews.
     */
    cursor?: MonthlyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReviews.
     */
    distinct?: MonthlyReviewScalarFieldEnum | MonthlyReviewScalarFieldEnum[]
  }

  /**
   * MonthlyReview findMany
   */
  export type MonthlyReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReviews to fetch.
     */
    where?: MonthlyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReviews to fetch.
     */
    orderBy?: MonthlyReviewOrderByWithRelationInput | MonthlyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyReviews.
     */
    cursor?: MonthlyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReviews.
     */
    distinct?: MonthlyReviewScalarFieldEnum | MonthlyReviewScalarFieldEnum[]
  }

  /**
   * MonthlyReview create
   */
  export type MonthlyReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyReview.
     */
    data: XOR<MonthlyReviewCreateInput, MonthlyReviewUncheckedCreateInput>
  }

  /**
   * MonthlyReview createMany
   */
  export type MonthlyReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyReviews.
     */
    data: MonthlyReviewCreateManyInput | MonthlyReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReview update
   */
  export type MonthlyReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyReview.
     */
    data: XOR<MonthlyReviewUpdateInput, MonthlyReviewUncheckedUpdateInput>
    /**
     * Choose, which MonthlyReview to update.
     */
    where: MonthlyReviewWhereUniqueInput
  }

  /**
   * MonthlyReview updateMany
   */
  export type MonthlyReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyReviews.
     */
    data: XOR<MonthlyReviewUpdateManyMutationInput, MonthlyReviewUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReviews to update
     */
    where?: MonthlyReviewWhereInput
    /**
     * Limit how many MonthlyReviews to update.
     */
    limit?: number
  }

  /**
   * MonthlyReview upsert
   */
  export type MonthlyReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyReview to update in case it exists.
     */
    where: MonthlyReviewWhereUniqueInput
    /**
     * In case the MonthlyReview found by the `where` argument doesn't exist, create a new MonthlyReview with this data.
     */
    create: XOR<MonthlyReviewCreateInput, MonthlyReviewUncheckedCreateInput>
    /**
     * In case the MonthlyReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyReviewUpdateInput, MonthlyReviewUncheckedUpdateInput>
  }

  /**
   * MonthlyReview delete
   */
  export type MonthlyReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
    /**
     * Filter which MonthlyReview to delete.
     */
    where: MonthlyReviewWhereUniqueInput
  }

  /**
   * MonthlyReview deleteMany
   */
  export type MonthlyReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReviews to delete
     */
    where?: MonthlyReviewWhereInput
    /**
     * Limit how many MonthlyReviews to delete.
     */
    limit?: number
  }

  /**
   * MonthlyReview.bestPiece
   */
  export type MonthlyReview$bestPieceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    where?: WeeklySubmissionWhereInput
  }

  /**
   * MonthlyReview without action
   */
  export type MonthlyReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReview
     */
    select?: MonthlyReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReview
     */
    omit?: MonthlyReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DailyRoutineScalarFieldEnum: {
    id: 'id',
    date: 'date',
    gestureDrawing: 'gestureDrawing',
    construction: 'construction',
    targetedPractice: 'targetedPractice'
  };

  export type DailyRoutineScalarFieldEnum = (typeof DailyRoutineScalarFieldEnum)[keyof typeof DailyRoutineScalarFieldEnum]


  export const WeeklySubmissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    hoursSpent: 'hoursSpent',
    date: 'date',
    year: 'year',
    weekNumber: 'weekNumber'
  };

  export type WeeklySubmissionScalarFieldEnum = (typeof WeeklySubmissionScalarFieldEnum)[keyof typeof WeeklySubmissionScalarFieldEnum]


  export const MonthlyReviewScalarFieldEnum: {
    id: 'id',
    month: 'month',
    notes: 'notes',
    bestPieceId: 'bestPieceId'
  };

  export type MonthlyReviewScalarFieldEnum = (typeof MonthlyReviewScalarFieldEnum)[keyof typeof MonthlyReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const WeeklySubmissionOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type WeeklySubmissionOrderByRelevanceFieldEnum = (typeof WeeklySubmissionOrderByRelevanceFieldEnum)[keyof typeof WeeklySubmissionOrderByRelevanceFieldEnum]


  export const MonthlyReviewOrderByRelevanceFieldEnum: {
    month: 'month',
    notes: 'notes'
  };

  export type MonthlyReviewOrderByRelevanceFieldEnum = (typeof MonthlyReviewOrderByRelevanceFieldEnum)[keyof typeof MonthlyReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DailyRoutineWhereInput = {
    AND?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    OR?: DailyRoutineWhereInput[]
    NOT?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    id?: IntFilter<"DailyRoutine"> | number
    date?: DateTimeFilter<"DailyRoutine"> | Date | string
    gestureDrawing?: BoolFilter<"DailyRoutine"> | boolean
    construction?: BoolFilter<"DailyRoutine"> | boolean
    targetedPractice?: BoolFilter<"DailyRoutine"> | boolean
  }

  export type DailyRoutineOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    gestureDrawing?: SortOrder
    construction?: SortOrder
    targetedPractice?: SortOrder
  }

  export type DailyRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date?: Date | string
    AND?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    OR?: DailyRoutineWhereInput[]
    NOT?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    gestureDrawing?: BoolFilter<"DailyRoutine"> | boolean
    construction?: BoolFilter<"DailyRoutine"> | boolean
    targetedPractice?: BoolFilter<"DailyRoutine"> | boolean
  }, "id" | "date">

  export type DailyRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    gestureDrawing?: SortOrder
    construction?: SortOrder
    targetedPractice?: SortOrder
    _count?: DailyRoutineCountOrderByAggregateInput
    _avg?: DailyRoutineAvgOrderByAggregateInput
    _max?: DailyRoutineMaxOrderByAggregateInput
    _min?: DailyRoutineMinOrderByAggregateInput
    _sum?: DailyRoutineSumOrderByAggregateInput
  }

  export type DailyRoutineScalarWhereWithAggregatesInput = {
    AND?: DailyRoutineScalarWhereWithAggregatesInput | DailyRoutineScalarWhereWithAggregatesInput[]
    OR?: DailyRoutineScalarWhereWithAggregatesInput[]
    NOT?: DailyRoutineScalarWhereWithAggregatesInput | DailyRoutineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyRoutine"> | number
    date?: DateTimeWithAggregatesFilter<"DailyRoutine"> | Date | string
    gestureDrawing?: BoolWithAggregatesFilter<"DailyRoutine"> | boolean
    construction?: BoolWithAggregatesFilter<"DailyRoutine"> | boolean
    targetedPractice?: BoolWithAggregatesFilter<"DailyRoutine"> | boolean
  }

  export type WeeklySubmissionWhereInput = {
    AND?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    OR?: WeeklySubmissionWhereInput[]
    NOT?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    id?: IntFilter<"WeeklySubmission"> | number
    title?: StringNullableFilter<"WeeklySubmission"> | string | null
    description?: StringNullableFilter<"WeeklySubmission"> | string | null
    image?: StringNullableFilter<"WeeklySubmission"> | string | null
    hoursSpent?: FloatNullableFilter<"WeeklySubmission"> | number | null
    date?: DateTimeFilter<"WeeklySubmission"> | Date | string
    year?: IntFilter<"WeeklySubmission"> | number
    weekNumber?: IntFilter<"WeeklySubmission"> | number
    monthlyReviews?: MonthlyReviewListRelationFilter
  }

  export type WeeklySubmissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    date?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
    monthlyReviews?: MonthlyReviewOrderByRelationAggregateInput
    _relevance?: WeeklySubmissionOrderByRelevanceInput
  }

  export type WeeklySubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year_weekNumber?: WeeklySubmissionYear_weekNumberCompoundUniqueInput
    AND?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    OR?: WeeklySubmissionWhereInput[]
    NOT?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    title?: StringNullableFilter<"WeeklySubmission"> | string | null
    description?: StringNullableFilter<"WeeklySubmission"> | string | null
    image?: StringNullableFilter<"WeeklySubmission"> | string | null
    hoursSpent?: FloatNullableFilter<"WeeklySubmission"> | number | null
    date?: DateTimeFilter<"WeeklySubmission"> | Date | string
    year?: IntFilter<"WeeklySubmission"> | number
    weekNumber?: IntFilter<"WeeklySubmission"> | number
    monthlyReviews?: MonthlyReviewListRelationFilter
  }, "id" | "year_weekNumber">

  export type WeeklySubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    date?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
    _count?: WeeklySubmissionCountOrderByAggregateInput
    _avg?: WeeklySubmissionAvgOrderByAggregateInput
    _max?: WeeklySubmissionMaxOrderByAggregateInput
    _min?: WeeklySubmissionMinOrderByAggregateInput
    _sum?: WeeklySubmissionSumOrderByAggregateInput
  }

  export type WeeklySubmissionScalarWhereWithAggregatesInput = {
    AND?: WeeklySubmissionScalarWhereWithAggregatesInput | WeeklySubmissionScalarWhereWithAggregatesInput[]
    OR?: WeeklySubmissionScalarWhereWithAggregatesInput[]
    NOT?: WeeklySubmissionScalarWhereWithAggregatesInput | WeeklySubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklySubmission"> | number
    title?: StringNullableWithAggregatesFilter<"WeeklySubmission"> | string | null
    description?: StringNullableWithAggregatesFilter<"WeeklySubmission"> | string | null
    image?: StringNullableWithAggregatesFilter<"WeeklySubmission"> | string | null
    hoursSpent?: FloatNullableWithAggregatesFilter<"WeeklySubmission"> | number | null
    date?: DateTimeWithAggregatesFilter<"WeeklySubmission"> | Date | string
    year?: IntWithAggregatesFilter<"WeeklySubmission"> | number
    weekNumber?: IntWithAggregatesFilter<"WeeklySubmission"> | number
  }

  export type MonthlyReviewWhereInput = {
    AND?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    OR?: MonthlyReviewWhereInput[]
    NOT?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    id?: IntFilter<"MonthlyReview"> | number
    month?: StringFilter<"MonthlyReview"> | string
    notes?: StringNullableFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableFilter<"MonthlyReview"> | number | null
    bestPiece?: XOR<WeeklySubmissionNullableScalarRelationFilter, WeeklySubmissionWhereInput> | null
  }

  export type MonthlyReviewOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    notes?: SortOrderInput | SortOrder
    bestPieceId?: SortOrderInput | SortOrder
    bestPiece?: WeeklySubmissionOrderByWithRelationInput
    _relevance?: MonthlyReviewOrderByRelevanceInput
  }

  export type MonthlyReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    OR?: MonthlyReviewWhereInput[]
    NOT?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    month?: StringFilter<"MonthlyReview"> | string
    notes?: StringNullableFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableFilter<"MonthlyReview"> | number | null
    bestPiece?: XOR<WeeklySubmissionNullableScalarRelationFilter, WeeklySubmissionWhereInput> | null
  }, "id">

  export type MonthlyReviewOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    notes?: SortOrderInput | SortOrder
    bestPieceId?: SortOrderInput | SortOrder
    _count?: MonthlyReviewCountOrderByAggregateInput
    _avg?: MonthlyReviewAvgOrderByAggregateInput
    _max?: MonthlyReviewMaxOrderByAggregateInput
    _min?: MonthlyReviewMinOrderByAggregateInput
    _sum?: MonthlyReviewSumOrderByAggregateInput
  }

  export type MonthlyReviewScalarWhereWithAggregatesInput = {
    AND?: MonthlyReviewScalarWhereWithAggregatesInput | MonthlyReviewScalarWhereWithAggregatesInput[]
    OR?: MonthlyReviewScalarWhereWithAggregatesInput[]
    NOT?: MonthlyReviewScalarWhereWithAggregatesInput | MonthlyReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlyReview"> | number
    month?: StringWithAggregatesFilter<"MonthlyReview"> | string
    notes?: StringNullableWithAggregatesFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableWithAggregatesFilter<"MonthlyReview"> | number | null
  }

  export type DailyRoutineCreateInput = {
    date: Date | string
    gestureDrawing?: boolean
    construction?: boolean
    targetedPractice?: boolean
  }

  export type DailyRoutineUncheckedCreateInput = {
    id?: number
    date: Date | string
    gestureDrawing?: boolean
    construction?: boolean
    targetedPractice?: boolean
  }

  export type DailyRoutineUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gestureDrawing?: BoolFieldUpdateOperationsInput | boolean
    construction?: BoolFieldUpdateOperationsInput | boolean
    targetedPractice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyRoutineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gestureDrawing?: BoolFieldUpdateOperationsInput | boolean
    construction?: BoolFieldUpdateOperationsInput | boolean
    targetedPractice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyRoutineCreateManyInput = {
    id?: number
    date: Date | string
    gestureDrawing?: boolean
    construction?: boolean
    targetedPractice?: boolean
  }

  export type DailyRoutineUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gestureDrawing?: BoolFieldUpdateOperationsInput | boolean
    construction?: BoolFieldUpdateOperationsInput | boolean
    targetedPractice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyRoutineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gestureDrawing?: BoolFieldUpdateOperationsInput | boolean
    construction?: BoolFieldUpdateOperationsInput | boolean
    targetedPractice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeeklySubmissionCreateInput = {
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
    monthlyReviews?: MonthlyReviewCreateNestedManyWithoutBestPieceInput
  }

  export type WeeklySubmissionUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
    monthlyReviews?: MonthlyReviewUncheckedCreateNestedManyWithoutBestPieceInput
  }

  export type WeeklySubmissionUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
    monthlyReviews?: MonthlyReviewUpdateManyWithoutBestPieceNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
    monthlyReviews?: MonthlyReviewUncheckedUpdateManyWithoutBestPieceNestedInput
  }

  export type WeeklySubmissionCreateManyInput = {
    id?: number
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyReviewCreateInput = {
    month: string
    notes?: string | null
    bestPiece?: WeeklySubmissionCreateNestedOneWithoutMonthlyReviewsInput
  }

  export type MonthlyReviewUncheckedCreateInput = {
    id?: number
    month: string
    notes?: string | null
    bestPieceId?: number | null
  }

  export type MonthlyReviewUpdateInput = {
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bestPiece?: WeeklySubmissionUpdateOneWithoutMonthlyReviewsNestedInput
  }

  export type MonthlyReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bestPieceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MonthlyReviewCreateManyInput = {
    id?: number
    month: string
    notes?: string | null
    bestPieceId?: number | null
  }

  export type MonthlyReviewUpdateManyMutationInput = {
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bestPieceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DailyRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    gestureDrawing?: SortOrder
    construction?: SortOrder
    targetedPractice?: SortOrder
  }

  export type DailyRoutineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DailyRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    gestureDrawing?: SortOrder
    construction?: SortOrder
    targetedPractice?: SortOrder
  }

  export type DailyRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    gestureDrawing?: SortOrder
    construction?: SortOrder
    targetedPractice?: SortOrder
  }

  export type DailyRoutineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MonthlyReviewListRelationFilter = {
    every?: MonthlyReviewWhereInput
    some?: MonthlyReviewWhereInput
    none?: MonthlyReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonthlyReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySubmissionOrderByRelevanceInput = {
    fields: WeeklySubmissionOrderByRelevanceFieldEnum | WeeklySubmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WeeklySubmissionYear_weekNumberCompoundUniqueInput = {
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    hoursSpent?: SortOrder
    date?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeeklySubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    hoursSpent?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeeklySubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    hoursSpent?: SortOrder
    date?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeeklySubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    hoursSpent?: SortOrder
    date?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeeklySubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    hoursSpent?: SortOrder
    year?: SortOrder
    weekNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WeeklySubmissionNullableScalarRelationFilter = {
    is?: WeeklySubmissionWhereInput | null
    isNot?: WeeklySubmissionWhereInput | null
  }

  export type MonthlyReviewOrderByRelevanceInput = {
    fields: MonthlyReviewOrderByRelevanceFieldEnum | MonthlyReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MonthlyReviewCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewSumOrderByAggregateInput = {
    id?: SortOrder
    bestPieceId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonthlyReviewCreateNestedManyWithoutBestPieceInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput> | MonthlyReviewCreateWithoutBestPieceInput[] | MonthlyReviewUncheckedCreateWithoutBestPieceInput[]
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput | MonthlyReviewCreateOrConnectWithoutBestPieceInput[]
    createMany?: MonthlyReviewCreateManyBestPieceInputEnvelope
    connect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
  }

  export type MonthlyReviewUncheckedCreateNestedManyWithoutBestPieceInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput> | MonthlyReviewCreateWithoutBestPieceInput[] | MonthlyReviewUncheckedCreateWithoutBestPieceInput[]
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput | MonthlyReviewCreateOrConnectWithoutBestPieceInput[]
    createMany?: MonthlyReviewCreateManyBestPieceInputEnvelope
    connect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonthlyReviewUpdateManyWithoutBestPieceNestedInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput> | MonthlyReviewCreateWithoutBestPieceInput[] | MonthlyReviewUncheckedCreateWithoutBestPieceInput[]
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput | MonthlyReviewCreateOrConnectWithoutBestPieceInput[]
    upsert?: MonthlyReviewUpsertWithWhereUniqueWithoutBestPieceInput | MonthlyReviewUpsertWithWhereUniqueWithoutBestPieceInput[]
    createMany?: MonthlyReviewCreateManyBestPieceInputEnvelope
    set?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    disconnect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    delete?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    connect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    update?: MonthlyReviewUpdateWithWhereUniqueWithoutBestPieceInput | MonthlyReviewUpdateWithWhereUniqueWithoutBestPieceInput[]
    updateMany?: MonthlyReviewUpdateManyWithWhereWithoutBestPieceInput | MonthlyReviewUpdateManyWithWhereWithoutBestPieceInput[]
    deleteMany?: MonthlyReviewScalarWhereInput | MonthlyReviewScalarWhereInput[]
  }

  export type MonthlyReviewUncheckedUpdateManyWithoutBestPieceNestedInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput> | MonthlyReviewCreateWithoutBestPieceInput[] | MonthlyReviewUncheckedCreateWithoutBestPieceInput[]
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput | MonthlyReviewCreateOrConnectWithoutBestPieceInput[]
    upsert?: MonthlyReviewUpsertWithWhereUniqueWithoutBestPieceInput | MonthlyReviewUpsertWithWhereUniqueWithoutBestPieceInput[]
    createMany?: MonthlyReviewCreateManyBestPieceInputEnvelope
    set?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    disconnect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    delete?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    connect?: MonthlyReviewWhereUniqueInput | MonthlyReviewWhereUniqueInput[]
    update?: MonthlyReviewUpdateWithWhereUniqueWithoutBestPieceInput | MonthlyReviewUpdateWithWhereUniqueWithoutBestPieceInput[]
    updateMany?: MonthlyReviewUpdateManyWithWhereWithoutBestPieceInput | MonthlyReviewUpdateManyWithWhereWithoutBestPieceInput[]
    deleteMany?: MonthlyReviewScalarWhereInput | MonthlyReviewScalarWhereInput[]
  }

  export type WeeklySubmissionCreateNestedOneWithoutMonthlyReviewsInput = {
    create?: XOR<WeeklySubmissionCreateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutMonthlyReviewsInput
    connect?: WeeklySubmissionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WeeklySubmissionUpdateOneWithoutMonthlyReviewsNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutMonthlyReviewsInput
    upsert?: WeeklySubmissionUpsertWithoutMonthlyReviewsInput
    disconnect?: WeeklySubmissionWhereInput | boolean
    delete?: WeeklySubmissionWhereInput | boolean
    connect?: WeeklySubmissionWhereUniqueInput
    update?: XOR<XOR<WeeklySubmissionUpdateToOneWithWhereWithoutMonthlyReviewsInput, WeeklySubmissionUpdateWithoutMonthlyReviewsInput>, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MonthlyReviewCreateWithoutBestPieceInput = {
    month: string
    notes?: string | null
  }

  export type MonthlyReviewUncheckedCreateWithoutBestPieceInput = {
    id?: number
    month: string
    notes?: string | null
  }

  export type MonthlyReviewCreateOrConnectWithoutBestPieceInput = {
    where: MonthlyReviewWhereUniqueInput
    create: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
  }

  export type MonthlyReviewCreateManyBestPieceInputEnvelope = {
    data: MonthlyReviewCreateManyBestPieceInput | MonthlyReviewCreateManyBestPieceInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyReviewUpsertWithWhereUniqueWithoutBestPieceInput = {
    where: MonthlyReviewWhereUniqueInput
    update: XOR<MonthlyReviewUpdateWithoutBestPieceInput, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
    create: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
  }

  export type MonthlyReviewUpdateWithWhereUniqueWithoutBestPieceInput = {
    where: MonthlyReviewWhereUniqueInput
    data: XOR<MonthlyReviewUpdateWithoutBestPieceInput, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
  }

  export type MonthlyReviewUpdateManyWithWhereWithoutBestPieceInput = {
    where: MonthlyReviewScalarWhereInput
    data: XOR<MonthlyReviewUpdateManyMutationInput, MonthlyReviewUncheckedUpdateManyWithoutBestPieceInput>
  }

  export type MonthlyReviewScalarWhereInput = {
    AND?: MonthlyReviewScalarWhereInput | MonthlyReviewScalarWhereInput[]
    OR?: MonthlyReviewScalarWhereInput[]
    NOT?: MonthlyReviewScalarWhereInput | MonthlyReviewScalarWhereInput[]
    id?: IntFilter<"MonthlyReview"> | number
    month?: StringFilter<"MonthlyReview"> | string
    notes?: StringNullableFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableFilter<"MonthlyReview"> | number | null
  }

  export type WeeklySubmissionCreateWithoutMonthlyReviewsInput = {
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionUncheckedCreateWithoutMonthlyReviewsInput = {
    id?: number
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionCreateOrConnectWithoutMonthlyReviewsInput = {
    where: WeeklySubmissionWhereUniqueInput
    create: XOR<WeeklySubmissionCreateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewsInput>
  }

  export type WeeklySubmissionUpsertWithoutMonthlyReviewsInput = {
    update: XOR<WeeklySubmissionUpdateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewsInput>
    create: XOR<WeeklySubmissionCreateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewsInput>
    where?: WeeklySubmissionWhereInput
  }

  export type WeeklySubmissionUpdateToOneWithWhereWithoutMonthlyReviewsInput = {
    where?: WeeklySubmissionWhereInput
    data: XOR<WeeklySubmissionUpdateWithoutMonthlyReviewsInput, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewsInput>
  }

  export type WeeklySubmissionUpdateWithoutMonthlyReviewsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyReviewCreateManyBestPieceInput = {
    id?: number
    month: string
    notes?: string | null
  }

  export type MonthlyReviewUpdateWithoutBestPieceInput = {
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReviewUncheckedUpdateWithoutBestPieceInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReviewUncheckedUpdateManyWithoutBestPieceInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}