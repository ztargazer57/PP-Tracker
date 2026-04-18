
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
 * Model Extra
 * 
 */
export type Extra = $Result.DefaultSelection<Prisma.$ExtraPayload>
/**
 * Model SavingsEntry
 * 
 */
export type SavingsEntry = $Result.DefaultSelection<Prisma.$SavingsEntryPayload>
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
 * // Fetch zero or more Extras
 * const extras = await prisma.extra.findMany()
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
   * // Fetch zero or more Extras
   * const extras = await prisma.extra.findMany()
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
   * `prisma.extra`: Exposes CRUD operations for the **Extra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extras
    * const extras = await prisma.extra.findMany()
    * ```
    */
  get extra(): Prisma.ExtraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savingsEntry`: Exposes CRUD operations for the **SavingsEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingsEntries
    * const savingsEntries = await prisma.savingsEntry.findMany()
    * ```
    */
  get savingsEntry(): Prisma.SavingsEntryDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Extra: 'Extra',
    SavingsEntry: 'SavingsEntry',
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
      modelProps: "extra" | "savingsEntry" | "dailyRoutine" | "weeklySubmission" | "monthlyReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Extra: {
        payload: Prisma.$ExtraPayload<ExtArgs>
        fields: Prisma.ExtraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findFirst: {
            args: Prisma.ExtraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findMany: {
            args: Prisma.ExtraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>[]
          }
          create: {
            args: Prisma.ExtraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          createMany: {
            args: Prisma.ExtraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExtraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          update: {
            args: Prisma.ExtraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          deleteMany: {
            args: Prisma.ExtraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExtraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          aggregate: {
            args: Prisma.ExtraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtra>
          }
          groupBy: {
            args: Prisma.ExtraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtraCountArgs<ExtArgs>
            result: $Utils.Optional<ExtraCountAggregateOutputType> | number
          }
        }
      }
      SavingsEntry: {
        payload: Prisma.$SavingsEntryPayload<ExtArgs>
        fields: Prisma.SavingsEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          findFirst: {
            args: Prisma.SavingsEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          findMany: {
            args: Prisma.SavingsEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>[]
          }
          create: {
            args: Prisma.SavingsEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          createMany: {
            args: Prisma.SavingsEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavingsEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          update: {
            args: Prisma.SavingsEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          deleteMany: {
            args: Prisma.SavingsEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          aggregate: {
            args: Prisma.SavingsEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingsEntry>
          }
          groupBy: {
            args: Prisma.SavingsEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsEntryCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsEntryCountAggregateOutputType> | number
          }
        }
      }
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
    extra?: ExtraOmit
    savingsEntry?: SavingsEntryOmit
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
   * Models
   */

  /**
   * Model Extra
   */

  export type AggregateExtra = {
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  export type ExtraAvgAggregateOutputType = {
    id: number | null
    streak: number | null
  }

  export type ExtraSumAggregateOutputType = {
    id: number | null
    streak: number | null
  }

  export type ExtraMinAggregateOutputType = {
    id: number | null
    note: string | null
    streak: number | null
    picUrl: string | null
  }

  export type ExtraMaxAggregateOutputType = {
    id: number | null
    note: string | null
    streak: number | null
    picUrl: string | null
  }

  export type ExtraCountAggregateOutputType = {
    id: number
    note: number
    streak: number
    picUrl: number
    _all: number
  }


  export type ExtraAvgAggregateInputType = {
    id?: true
    streak?: true
  }

  export type ExtraSumAggregateInputType = {
    id?: true
    streak?: true
  }

  export type ExtraMinAggregateInputType = {
    id?: true
    note?: true
    streak?: true
    picUrl?: true
  }

  export type ExtraMaxAggregateInputType = {
    id?: true
    note?: true
    streak?: true
    picUrl?: true
  }

  export type ExtraCountAggregateInputType = {
    id?: true
    note?: true
    streak?: true
    picUrl?: true
    _all?: true
  }

  export type ExtraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extra to aggregate.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extras
    **/
    _count?: true | ExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtraMaxAggregateInputType
  }

  export type GetExtraAggregateType<T extends ExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtra[P]>
      : GetScalarType<T[P], AggregateExtra[P]>
  }




  export type ExtraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraWhereInput
    orderBy?: ExtraOrderByWithAggregationInput | ExtraOrderByWithAggregationInput[]
    by: ExtraScalarFieldEnum[] | ExtraScalarFieldEnum
    having?: ExtraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtraCountAggregateInputType | true
    _avg?: ExtraAvgAggregateInputType
    _sum?: ExtraSumAggregateInputType
    _min?: ExtraMinAggregateInputType
    _max?: ExtraMaxAggregateInputType
  }

  export type ExtraGroupByOutputType = {
    id: number
    note: string | null
    streak: number | null
    picUrl: string | null
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  type GetExtraGroupByPayload<T extends ExtraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtraGroupByOutputType[P]>
            : GetScalarType<T[P], ExtraGroupByOutputType[P]>
        }
      >
    >


  export type ExtraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    streak?: boolean
    picUrl?: boolean
  }, ExtArgs["result"]["extra"]>



  export type ExtraSelectScalar = {
    id?: boolean
    note?: boolean
    streak?: boolean
    picUrl?: boolean
  }

  export type ExtraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "streak" | "picUrl", ExtArgs["result"]["extra"]>

  export type $ExtraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extra"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: string | null
      streak: number | null
      picUrl: string | null
    }, ExtArgs["result"]["extra"]>
    composites: {}
  }

  type ExtraGetPayload<S extends boolean | null | undefined | ExtraDefaultArgs> = $Result.GetResult<Prisma.$ExtraPayload, S>

  type ExtraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtraCountAggregateInputType | true
    }

  export interface ExtraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extra'], meta: { name: 'Extra' } }
    /**
     * Find zero or one Extra that matches the filter.
     * @param {ExtraFindUniqueArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtraFindUniqueArgs>(args: SelectSubset<T, ExtraFindUniqueArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtraFindUniqueOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtraFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtraFindFirstArgs>(args?: SelectSubset<T, ExtraFindFirstArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtraFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extras
     * const extras = await prisma.extra.findMany()
     * 
     * // Get first 10 Extras
     * const extras = await prisma.extra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extraWithIdOnly = await prisma.extra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtraFindManyArgs>(args?: SelectSubset<T, ExtraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extra.
     * @param {ExtraCreateArgs} args - Arguments to create a Extra.
     * @example
     * // Create one Extra
     * const Extra = await prisma.extra.create({
     *   data: {
     *     // ... data to create a Extra
     *   }
     * })
     * 
     */
    create<T extends ExtraCreateArgs>(args: SelectSubset<T, ExtraCreateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extras.
     * @param {ExtraCreateManyArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extra = await prisma.extra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtraCreateManyArgs>(args?: SelectSubset<T, ExtraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extra.
     * @param {ExtraDeleteArgs} args - Arguments to delete one Extra.
     * @example
     * // Delete one Extra
     * const Extra = await prisma.extra.delete({
     *   where: {
     *     // ... filter to delete one Extra
     *   }
     * })
     * 
     */
    delete<T extends ExtraDeleteArgs>(args: SelectSubset<T, ExtraDeleteArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extra.
     * @param {ExtraUpdateArgs} args - Arguments to update one Extra.
     * @example
     * // Update one Extra
     * const extra = await prisma.extra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtraUpdateArgs>(args: SelectSubset<T, ExtraUpdateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extras.
     * @param {ExtraDeleteManyArgs} args - Arguments to filter Extras to delete.
     * @example
     * // Delete a few Extras
     * const { count } = await prisma.extra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtraDeleteManyArgs>(args?: SelectSubset<T, ExtraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extras
     * const extra = await prisma.extra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtraUpdateManyArgs>(args: SelectSubset<T, ExtraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extra.
     * @param {ExtraUpsertArgs} args - Arguments to update or create a Extra.
     * @example
     * // Update or create a Extra
     * const extra = await prisma.extra.upsert({
     *   create: {
     *     // ... data to create a Extra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extra we want to update
     *   }
     * })
     */
    upsert<T extends ExtraUpsertArgs>(args: SelectSubset<T, ExtraUpsertArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraCountArgs} args - Arguments to filter Extras to count.
     * @example
     * // Count the number of Extras
     * const count = await prisma.extra.count({
     *   where: {
     *     // ... the filter for the Extras we want to count
     *   }
     * })
    **/
    count<T extends ExtraCountArgs>(
      args?: Subset<T, ExtraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExtraAggregateArgs>(args: Subset<T, ExtraAggregateArgs>): Prisma.PrismaPromise<GetExtraAggregateType<T>>

    /**
     * Group by Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraGroupByArgs} args - Group by arguments.
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
      T extends ExtraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtraGroupByArgs['orderBy'] }
        : { orderBy?: ExtraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExtraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extra model
   */
  readonly fields: ExtraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Extra model
   */
  interface ExtraFieldRefs {
    readonly id: FieldRef<"Extra", 'Int'>
    readonly note: FieldRef<"Extra", 'String'>
    readonly streak: FieldRef<"Extra", 'Int'>
    readonly picUrl: FieldRef<"Extra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Extra findUnique
   */
  export type ExtraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findUniqueOrThrow
   */
  export type ExtraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findFirst
   */
  export type ExtraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findFirstOrThrow
   */
  export type ExtraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findMany
   */
  export type ExtraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter, which Extras to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra create
   */
  export type ExtraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * The data needed to create a Extra.
     */
    data?: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
  }

  /**
   * Extra createMany
   */
  export type ExtraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extras.
     */
    data: ExtraCreateManyInput | ExtraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extra update
   */
  export type ExtraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * The data needed to update a Extra.
     */
    data: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
    /**
     * Choose, which Extra to update.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra updateMany
   */
  export type ExtraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extras.
     */
    data: XOR<ExtraUpdateManyMutationInput, ExtraUncheckedUpdateManyInput>
    /**
     * Filter which Extras to update
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to update.
     */
    limit?: number
  }

  /**
   * Extra upsert
   */
  export type ExtraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * The filter to search for the Extra to update in case it exists.
     */
    where: ExtraWhereUniqueInput
    /**
     * In case the Extra found by the `where` argument doesn't exist, create a new Extra with this data.
     */
    create: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
    /**
     * In case the Extra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
  }

  /**
   * Extra delete
   */
  export type ExtraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Filter which Extra to delete.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra deleteMany
   */
  export type ExtraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extras to delete
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to delete.
     */
    limit?: number
  }

  /**
   * Extra without action
   */
  export type ExtraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
  }


  /**
   * Model SavingsEntry
   */

  export type AggregateSavingsEntry = {
    _count: SavingsEntryCountAggregateOutputType | null
    _avg: SavingsEntryAvgAggregateOutputType | null
    _sum: SavingsEntrySumAggregateOutputType | null
    _min: SavingsEntryMinAggregateOutputType | null
    _max: SavingsEntryMaxAggregateOutputType | null
  }

  export type SavingsEntryAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SavingsEntrySumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SavingsEntryMinAggregateOutputType = {
    id: number | null
    amount: number | null
    note: string | null
    createdAt: Date | null
  }

  export type SavingsEntryMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    note: string | null
    createdAt: Date | null
  }

  export type SavingsEntryCountAggregateOutputType = {
    id: number
    amount: number
    note: number
    createdAt: number
    _all: number
  }


  export type SavingsEntryAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SavingsEntrySumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SavingsEntryMinAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    createdAt?: true
  }

  export type SavingsEntryMaxAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    createdAt?: true
  }

  export type SavingsEntryCountAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type SavingsEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsEntry to aggregate.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingsEntries
    **/
    _count?: true | SavingsEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsEntryMaxAggregateInputType
  }

  export type GetSavingsEntryAggregateType<T extends SavingsEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingsEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingsEntry[P]>
      : GetScalarType<T[P], AggregateSavingsEntry[P]>
  }




  export type SavingsEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsEntryWhereInput
    orderBy?: SavingsEntryOrderByWithAggregationInput | SavingsEntryOrderByWithAggregationInput[]
    by: SavingsEntryScalarFieldEnum[] | SavingsEntryScalarFieldEnum
    having?: SavingsEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsEntryCountAggregateInputType | true
    _avg?: SavingsEntryAvgAggregateInputType
    _sum?: SavingsEntrySumAggregateInputType
    _min?: SavingsEntryMinAggregateInputType
    _max?: SavingsEntryMaxAggregateInputType
  }

  export type SavingsEntryGroupByOutputType = {
    id: number
    amount: number
    note: string | null
    createdAt: Date
    _count: SavingsEntryCountAggregateOutputType | null
    _avg: SavingsEntryAvgAggregateOutputType | null
    _sum: SavingsEntrySumAggregateOutputType | null
    _min: SavingsEntryMinAggregateOutputType | null
    _max: SavingsEntryMaxAggregateOutputType | null
  }

  type GetSavingsEntryGroupByPayload<T extends SavingsEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsEntryGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsEntryGroupByOutputType[P]>
        }
      >
    >


  export type SavingsEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savingsEntry"]>



  export type SavingsEntrySelectScalar = {
    id?: boolean
    amount?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type SavingsEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "note" | "createdAt", ExtArgs["result"]["savingsEntry"]>

  export type $SavingsEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingsEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["savingsEntry"]>
    composites: {}
  }

  type SavingsEntryGetPayload<S extends boolean | null | undefined | SavingsEntryDefaultArgs> = $Result.GetResult<Prisma.$SavingsEntryPayload, S>

  type SavingsEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavingsEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavingsEntryCountAggregateInputType | true
    }

  export interface SavingsEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingsEntry'], meta: { name: 'SavingsEntry' } }
    /**
     * Find zero or one SavingsEntry that matches the filter.
     * @param {SavingsEntryFindUniqueArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsEntryFindUniqueArgs>(args: SelectSubset<T, SavingsEntryFindUniqueArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavingsEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavingsEntryFindUniqueOrThrowArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindFirstArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsEntryFindFirstArgs>(args?: SelectSubset<T, SavingsEntryFindFirstArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindFirstOrThrowArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavingsEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsEntries
     * const savingsEntries = await prisma.savingsEntry.findMany()
     * 
     * // Get first 10 SavingsEntries
     * const savingsEntries = await prisma.savingsEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsEntryWithIdOnly = await prisma.savingsEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsEntryFindManyArgs>(args?: SelectSubset<T, SavingsEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavingsEntry.
     * @param {SavingsEntryCreateArgs} args - Arguments to create a SavingsEntry.
     * @example
     * // Create one SavingsEntry
     * const SavingsEntry = await prisma.savingsEntry.create({
     *   data: {
     *     // ... data to create a SavingsEntry
     *   }
     * })
     * 
     */
    create<T extends SavingsEntryCreateArgs>(args: SelectSubset<T, SavingsEntryCreateArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavingsEntries.
     * @param {SavingsEntryCreateManyArgs} args - Arguments to create many SavingsEntries.
     * @example
     * // Create many SavingsEntries
     * const savingsEntry = await prisma.savingsEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsEntryCreateManyArgs>(args?: SelectSubset<T, SavingsEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavingsEntry.
     * @param {SavingsEntryDeleteArgs} args - Arguments to delete one SavingsEntry.
     * @example
     * // Delete one SavingsEntry
     * const SavingsEntry = await prisma.savingsEntry.delete({
     *   where: {
     *     // ... filter to delete one SavingsEntry
     *   }
     * })
     * 
     */
    delete<T extends SavingsEntryDeleteArgs>(args: SelectSubset<T, SavingsEntryDeleteArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavingsEntry.
     * @param {SavingsEntryUpdateArgs} args - Arguments to update one SavingsEntry.
     * @example
     * // Update one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsEntryUpdateArgs>(args: SelectSubset<T, SavingsEntryUpdateArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavingsEntries.
     * @param {SavingsEntryDeleteManyArgs} args - Arguments to filter SavingsEntries to delete.
     * @example
     * // Delete a few SavingsEntries
     * const { count } = await prisma.savingsEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsEntryDeleteManyArgs>(args?: SelectSubset<T, SavingsEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsEntries
     * const savingsEntry = await prisma.savingsEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsEntryUpdateManyArgs>(args: SelectSubset<T, SavingsEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavingsEntry.
     * @param {SavingsEntryUpsertArgs} args - Arguments to update or create a SavingsEntry.
     * @example
     * // Update or create a SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.upsert({
     *   create: {
     *     // ... data to create a SavingsEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsEntry we want to update
     *   }
     * })
     */
    upsert<T extends SavingsEntryUpsertArgs>(args: SelectSubset<T, SavingsEntryUpsertArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavingsEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryCountArgs} args - Arguments to filter SavingsEntries to count.
     * @example
     * // Count the number of SavingsEntries
     * const count = await prisma.savingsEntry.count({
     *   where: {
     *     // ... the filter for the SavingsEntries we want to count
     *   }
     * })
    **/
    count<T extends SavingsEntryCountArgs>(
      args?: Subset<T, SavingsEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingsEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavingsEntryAggregateArgs>(args: Subset<T, SavingsEntryAggregateArgs>): Prisma.PrismaPromise<GetSavingsEntryAggregateType<T>>

    /**
     * Group by SavingsEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryGroupByArgs} args - Group by arguments.
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
      T extends SavingsEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsEntryGroupByArgs['orderBy'] }
        : { orderBy?: SavingsEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavingsEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingsEntry model
   */
  readonly fields: SavingsEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingsEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SavingsEntry model
   */
  interface SavingsEntryFieldRefs {
    readonly id: FieldRef<"SavingsEntry", 'Int'>
    readonly amount: FieldRef<"SavingsEntry", 'Float'>
    readonly note: FieldRef<"SavingsEntry", 'String'>
    readonly createdAt: FieldRef<"SavingsEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavingsEntry findUnique
   */
  export type SavingsEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry findUniqueOrThrow
   */
  export type SavingsEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry findFirst
   */
  export type SavingsEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsEntries.
     */
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry findFirstOrThrow
   */
  export type SavingsEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsEntries.
     */
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry findMany
   */
  export type SavingsEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter, which SavingsEntries to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsEntries.
     */
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry create
   */
  export type SavingsEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a SavingsEntry.
     */
    data: XOR<SavingsEntryCreateInput, SavingsEntryUncheckedCreateInput>
  }

  /**
   * SavingsEntry createMany
   */
  export type SavingsEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsEntries.
     */
    data: SavingsEntryCreateManyInput | SavingsEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingsEntry update
   */
  export type SavingsEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a SavingsEntry.
     */
    data: XOR<SavingsEntryUpdateInput, SavingsEntryUncheckedUpdateInput>
    /**
     * Choose, which SavingsEntry to update.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry updateMany
   */
  export type SavingsEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsEntries.
     */
    data: XOR<SavingsEntryUpdateManyMutationInput, SavingsEntryUncheckedUpdateManyInput>
    /**
     * Filter which SavingsEntries to update
     */
    where?: SavingsEntryWhereInput
    /**
     * Limit how many SavingsEntries to update.
     */
    limit?: number
  }

  /**
   * SavingsEntry upsert
   */
  export type SavingsEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the SavingsEntry to update in case it exists.
     */
    where: SavingsEntryWhereUniqueInput
    /**
     * In case the SavingsEntry found by the `where` argument doesn't exist, create a new SavingsEntry with this data.
     */
    create: XOR<SavingsEntryCreateInput, SavingsEntryUncheckedCreateInput>
    /**
     * In case the SavingsEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsEntryUpdateInput, SavingsEntryUncheckedUpdateInput>
  }

  /**
   * SavingsEntry delete
   */
  export type SavingsEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
    /**
     * Filter which SavingsEntry to delete.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry deleteMany
   */
  export type SavingsEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsEntries to delete
     */
    where?: SavingsEntryWhereInput
    /**
     * Limit how many SavingsEntries to delete.
     */
    limit?: number
  }

  /**
   * SavingsEntry without action
   */
  export type SavingsEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsEntry
     */
    omit?: SavingsEntryOmit<ExtArgs> | null
  }


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
    monthlyReview?: boolean | WeeklySubmission$monthlyReviewArgs<ExtArgs>
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
    monthlyReview?: boolean | WeeklySubmission$monthlyReviewArgs<ExtArgs>
  }

  export type $WeeklySubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySubmission"
    objects: {
      monthlyReview: Prisma.$MonthlyReviewPayload<ExtArgs> | null
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
    monthlyReview<T extends WeeklySubmission$monthlyReviewArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmission$monthlyReviewArgs<ExtArgs>>): Prisma__MonthlyReviewClient<$Result.GetResult<Prisma.$MonthlyReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * WeeklySubmission.monthlyReview
   */
  export type WeeklySubmission$monthlyReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    month: number | null
    year: number | null
    bestPieceId: number | null
  }

  export type MonthlyReviewSumAggregateOutputType = {
    id: number | null
    month: number | null
    year: number | null
    bestPieceId: number | null
  }

  export type MonthlyReviewMinAggregateOutputType = {
    id: number | null
    month: number | null
    year: number | null
    notes: string | null
    bestPieceId: number | null
  }

  export type MonthlyReviewMaxAggregateOutputType = {
    id: number | null
    month: number | null
    year: number | null
    notes: string | null
    bestPieceId: number | null
  }

  export type MonthlyReviewCountAggregateOutputType = {
    id: number
    month: number
    year: number
    notes: number
    bestPieceId: number
    _all: number
  }


  export type MonthlyReviewAvgAggregateInputType = {
    id?: true
    month?: true
    year?: true
    bestPieceId?: true
  }

  export type MonthlyReviewSumAggregateInputType = {
    id?: true
    month?: true
    year?: true
    bestPieceId?: true
  }

  export type MonthlyReviewMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    notes?: true
    bestPieceId?: true
  }

  export type MonthlyReviewMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    notes?: true
    bestPieceId?: true
  }

  export type MonthlyReviewCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
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
    month: number
    year: number
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
    year?: boolean
    notes?: boolean
    bestPieceId?: boolean
    bestPiece?: boolean | MonthlyReview$bestPieceArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyReview"]>



  export type MonthlyReviewSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    notes?: boolean
    bestPieceId?: boolean
  }

  export type MonthlyReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "month" | "year" | "notes" | "bestPieceId", ExtArgs["result"]["monthlyReview"]>
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
      month: number
      year: number
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
    readonly month: FieldRef<"MonthlyReview", 'Int'>
    readonly year: FieldRef<"MonthlyReview", 'Int'>
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


  export const ExtraScalarFieldEnum: {
    id: 'id',
    note: 'note',
    streak: 'streak',
    picUrl: 'picUrl'
  };

  export type ExtraScalarFieldEnum = (typeof ExtraScalarFieldEnum)[keyof typeof ExtraScalarFieldEnum]


  export const SavingsEntryScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type SavingsEntryScalarFieldEnum = (typeof SavingsEntryScalarFieldEnum)[keyof typeof SavingsEntryScalarFieldEnum]


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
    year: 'year',
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


  export const ExtraOrderByRelevanceFieldEnum: {
    note: 'note',
    picUrl: 'picUrl'
  };

  export type ExtraOrderByRelevanceFieldEnum = (typeof ExtraOrderByRelevanceFieldEnum)[keyof typeof ExtraOrderByRelevanceFieldEnum]


  export const SavingsEntryOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type SavingsEntryOrderByRelevanceFieldEnum = (typeof SavingsEntryOrderByRelevanceFieldEnum)[keyof typeof SavingsEntryOrderByRelevanceFieldEnum]


  export const WeeklySubmissionOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type WeeklySubmissionOrderByRelevanceFieldEnum = (typeof WeeklySubmissionOrderByRelevanceFieldEnum)[keyof typeof WeeklySubmissionOrderByRelevanceFieldEnum]


  export const MonthlyReviewOrderByRelevanceFieldEnum: {
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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ExtraWhereInput = {
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    id?: IntFilter<"Extra"> | number
    note?: StringNullableFilter<"Extra"> | string | null
    streak?: IntNullableFilter<"Extra"> | number | null
    picUrl?: StringNullableFilter<"Extra"> | string | null
  }

  export type ExtraOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    streak?: SortOrderInput | SortOrder
    picUrl?: SortOrderInput | SortOrder
    _relevance?: ExtraOrderByRelevanceInput
  }

  export type ExtraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    note?: StringNullableFilter<"Extra"> | string | null
    streak?: IntNullableFilter<"Extra"> | number | null
    picUrl?: StringNullableFilter<"Extra"> | string | null
  }, "id">

  export type ExtraOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    streak?: SortOrderInput | SortOrder
    picUrl?: SortOrderInput | SortOrder
    _count?: ExtraCountOrderByAggregateInput
    _avg?: ExtraAvgOrderByAggregateInput
    _max?: ExtraMaxOrderByAggregateInput
    _min?: ExtraMinOrderByAggregateInput
    _sum?: ExtraSumOrderByAggregateInput
  }

  export type ExtraScalarWhereWithAggregatesInput = {
    AND?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    OR?: ExtraScalarWhereWithAggregatesInput[]
    NOT?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Extra"> | number
    note?: StringNullableWithAggregatesFilter<"Extra"> | string | null
    streak?: IntNullableWithAggregatesFilter<"Extra"> | number | null
    picUrl?: StringNullableWithAggregatesFilter<"Extra"> | string | null
  }

  export type SavingsEntryWhereInput = {
    AND?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    OR?: SavingsEntryWhereInput[]
    NOT?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    id?: IntFilter<"SavingsEntry"> | number
    amount?: FloatFilter<"SavingsEntry"> | number
    note?: StringNullableFilter<"SavingsEntry"> | string | null
    createdAt?: DateTimeFilter<"SavingsEntry"> | Date | string
  }

  export type SavingsEntryOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: SavingsEntryOrderByRelevanceInput
  }

  export type SavingsEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    OR?: SavingsEntryWhereInput[]
    NOT?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    amount?: FloatFilter<"SavingsEntry"> | number
    note?: StringNullableFilter<"SavingsEntry"> | string | null
    createdAt?: DateTimeFilter<"SavingsEntry"> | Date | string
  }, "id">

  export type SavingsEntryOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SavingsEntryCountOrderByAggregateInput
    _avg?: SavingsEntryAvgOrderByAggregateInput
    _max?: SavingsEntryMaxOrderByAggregateInput
    _min?: SavingsEntryMinOrderByAggregateInput
    _sum?: SavingsEntrySumOrderByAggregateInput
  }

  export type SavingsEntryScalarWhereWithAggregatesInput = {
    AND?: SavingsEntryScalarWhereWithAggregatesInput | SavingsEntryScalarWhereWithAggregatesInput[]
    OR?: SavingsEntryScalarWhereWithAggregatesInput[]
    NOT?: SavingsEntryScalarWhereWithAggregatesInput | SavingsEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavingsEntry"> | number
    amount?: FloatWithAggregatesFilter<"SavingsEntry"> | number
    note?: StringNullableWithAggregatesFilter<"SavingsEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SavingsEntry"> | Date | string
  }

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
    monthlyReview?: XOR<MonthlyReviewNullableScalarRelationFilter, MonthlyReviewWhereInput> | null
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
    monthlyReview?: MonthlyReviewOrderByWithRelationInput
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
    monthlyReview?: XOR<MonthlyReviewNullableScalarRelationFilter, MonthlyReviewWhereInput> | null
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
    month?: IntFilter<"MonthlyReview"> | number
    year?: IntFilter<"MonthlyReview"> | number
    notes?: StringNullableFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableFilter<"MonthlyReview"> | number | null
    bestPiece?: XOR<WeeklySubmissionNullableScalarRelationFilter, WeeklySubmissionWhereInput> | null
  }

  export type MonthlyReviewOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    notes?: SortOrderInput | SortOrder
    bestPieceId?: SortOrderInput | SortOrder
    bestPiece?: WeeklySubmissionOrderByWithRelationInput
    _relevance?: MonthlyReviewOrderByRelevanceInput
  }

  export type MonthlyReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bestPieceId?: number
    month_year?: MonthlyReviewMonthYearCompoundUniqueInput
    AND?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    OR?: MonthlyReviewWhereInput[]
    NOT?: MonthlyReviewWhereInput | MonthlyReviewWhereInput[]
    month?: IntFilter<"MonthlyReview"> | number
    year?: IntFilter<"MonthlyReview"> | number
    notes?: StringNullableFilter<"MonthlyReview"> | string | null
    bestPiece?: XOR<WeeklySubmissionNullableScalarRelationFilter, WeeklySubmissionWhereInput> | null
  }, "id" | "bestPieceId" | "month_year">

  export type MonthlyReviewOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
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
    month?: IntWithAggregatesFilter<"MonthlyReview"> | number
    year?: IntWithAggregatesFilter<"MonthlyReview"> | number
    notes?: StringNullableWithAggregatesFilter<"MonthlyReview"> | string | null
    bestPieceId?: IntNullableWithAggregatesFilter<"MonthlyReview"> | number | null
  }

  export type ExtraCreateInput = {
    note?: string | null
    streak?: number | null
    picUrl?: string | null
  }

  export type ExtraUncheckedCreateInput = {
    id?: number
    note?: string | null
    streak?: number | null
    picUrl?: string | null
  }

  export type ExtraUpdateInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    picUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    picUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtraCreateManyInput = {
    id?: number
    note?: string | null
    streak?: number | null
    picUrl?: string | null
  }

  export type ExtraUpdateManyMutationInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    picUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    picUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavingsEntryCreateInput = {
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type SavingsEntryUncheckedCreateInput = {
    id?: number
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type SavingsEntryUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryCreateManyInput = {
    id?: number
    amount: number
    note?: string | null
    createdAt?: Date | string
  }

  export type SavingsEntryUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    monthlyReview?: MonthlyReviewCreateNestedOneWithoutBestPieceInput
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
    monthlyReview?: MonthlyReviewUncheckedCreateNestedOneWithoutBestPieceInput
  }

  export type WeeklySubmissionUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
    monthlyReview?: MonthlyReviewUpdateOneWithoutBestPieceNestedInput
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
    monthlyReview?: MonthlyReviewUncheckedUpdateOneWithoutBestPieceNestedInput
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
    month: number
    year: number
    notes?: string | null
    bestPiece?: WeeklySubmissionCreateNestedOneWithoutMonthlyReviewInput
  }

  export type MonthlyReviewUncheckedCreateInput = {
    id?: number
    month: number
    year: number
    notes?: string | null
    bestPieceId?: number | null
  }

  export type MonthlyReviewUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bestPiece?: WeeklySubmissionUpdateOneWithoutMonthlyReviewNestedInput
  }

  export type MonthlyReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bestPieceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MonthlyReviewCreateManyInput = {
    id?: number
    month: number
    year: number
    notes?: string | null
    bestPieceId?: number | null
  }

  export type MonthlyReviewUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExtraOrderByRelevanceInput = {
    fields: ExtraOrderByRelevanceFieldEnum | ExtraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExtraCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    streak?: SortOrder
    picUrl?: SortOrder
  }

  export type ExtraAvgOrderByAggregateInput = {
    id?: SortOrder
    streak?: SortOrder
  }

  export type ExtraMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    streak?: SortOrder
    picUrl?: SortOrder
  }

  export type ExtraMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    streak?: SortOrder
    picUrl?: SortOrder
  }

  export type ExtraSumOrderByAggregateInput = {
    id?: SortOrder
    streak?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SavingsEntryOrderByRelevanceInput = {
    fields: SavingsEntryOrderByRelevanceFieldEnum | SavingsEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SavingsEntryCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SavingsEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type SavingsEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SavingsEntryMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SavingsEntrySumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MonthlyReviewNullableScalarRelationFilter = {
    is?: MonthlyReviewWhereInput | null
    isNot?: MonthlyReviewWhereInput | null
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

  export type WeeklySubmissionNullableScalarRelationFilter = {
    is?: WeeklySubmissionWhereInput | null
    isNot?: WeeklySubmissionWhereInput | null
  }

  export type MonthlyReviewOrderByRelevanceInput = {
    fields: MonthlyReviewOrderByRelevanceFieldEnum | MonthlyReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MonthlyReviewMonthYearCompoundUniqueInput = {
    month: number
    year: number
  }

  export type MonthlyReviewCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    notes?: SortOrder
    bestPieceId?: SortOrder
  }

  export type MonthlyReviewSumOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    bestPieceId?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MonthlyReviewCreateNestedOneWithoutBestPieceInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput
    connect?: MonthlyReviewWhereUniqueInput
  }

  export type MonthlyReviewUncheckedCreateNestedOneWithoutBestPieceInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput
    connect?: MonthlyReviewWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonthlyReviewUpdateOneWithoutBestPieceNestedInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput
    upsert?: MonthlyReviewUpsertWithoutBestPieceInput
    disconnect?: MonthlyReviewWhereInput | boolean
    delete?: MonthlyReviewWhereInput | boolean
    connect?: MonthlyReviewWhereUniqueInput
    update?: XOR<XOR<MonthlyReviewUpdateToOneWithWhereWithoutBestPieceInput, MonthlyReviewUpdateWithoutBestPieceInput>, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
  }

  export type MonthlyReviewUncheckedUpdateOneWithoutBestPieceNestedInput = {
    create?: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
    connectOrCreate?: MonthlyReviewCreateOrConnectWithoutBestPieceInput
    upsert?: MonthlyReviewUpsertWithoutBestPieceInput
    disconnect?: MonthlyReviewWhereInput | boolean
    delete?: MonthlyReviewWhereInput | boolean
    connect?: MonthlyReviewWhereUniqueInput
    update?: XOR<XOR<MonthlyReviewUpdateToOneWithWhereWithoutBestPieceInput, MonthlyReviewUpdateWithoutBestPieceInput>, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
  }

  export type WeeklySubmissionCreateNestedOneWithoutMonthlyReviewInput = {
    create?: XOR<WeeklySubmissionCreateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutMonthlyReviewInput
    connect?: WeeklySubmissionWhereUniqueInput
  }

  export type WeeklySubmissionUpdateOneWithoutMonthlyReviewNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutMonthlyReviewInput
    upsert?: WeeklySubmissionUpsertWithoutMonthlyReviewInput
    disconnect?: WeeklySubmissionWhereInput | boolean
    delete?: WeeklySubmissionWhereInput | boolean
    connect?: WeeklySubmissionWhereUniqueInput
    update?: XOR<XOR<WeeklySubmissionUpdateToOneWithWhereWithoutMonthlyReviewInput, WeeklySubmissionUpdateWithoutMonthlyReviewInput>, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MonthlyReviewCreateWithoutBestPieceInput = {
    month: number
    year: number
    notes?: string | null
  }

  export type MonthlyReviewUncheckedCreateWithoutBestPieceInput = {
    id?: number
    month: number
    year: number
    notes?: string | null
  }

  export type MonthlyReviewCreateOrConnectWithoutBestPieceInput = {
    where: MonthlyReviewWhereUniqueInput
    create: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
  }

  export type MonthlyReviewUpsertWithoutBestPieceInput = {
    update: XOR<MonthlyReviewUpdateWithoutBestPieceInput, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
    create: XOR<MonthlyReviewCreateWithoutBestPieceInput, MonthlyReviewUncheckedCreateWithoutBestPieceInput>
    where?: MonthlyReviewWhereInput
  }

  export type MonthlyReviewUpdateToOneWithWhereWithoutBestPieceInput = {
    where?: MonthlyReviewWhereInput
    data: XOR<MonthlyReviewUpdateWithoutBestPieceInput, MonthlyReviewUncheckedUpdateWithoutBestPieceInput>
  }

  export type MonthlyReviewUpdateWithoutBestPieceInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReviewUncheckedUpdateWithoutBestPieceInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklySubmissionCreateWithoutMonthlyReviewInput = {
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionUncheckedCreateWithoutMonthlyReviewInput = {
    id?: number
    title?: string | null
    description?: string | null
    image?: string | null
    hoursSpent?: number | null
    date: Date | string
    year: number
    weekNumber: number
  }

  export type WeeklySubmissionCreateOrConnectWithoutMonthlyReviewInput = {
    where: WeeklySubmissionWhereUniqueInput
    create: XOR<WeeklySubmissionCreateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewInput>
  }

  export type WeeklySubmissionUpsertWithoutMonthlyReviewInput = {
    update: XOR<WeeklySubmissionUpdateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewInput>
    create: XOR<WeeklySubmissionCreateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedCreateWithoutMonthlyReviewInput>
    where?: WeeklySubmissionWhereInput
  }

  export type WeeklySubmissionUpdateToOneWithWhereWithoutMonthlyReviewInput = {
    where?: WeeklySubmissionWhereInput
    data: XOR<WeeklySubmissionUpdateWithoutMonthlyReviewInput, WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewInput>
  }

  export type WeeklySubmissionUpdateWithoutMonthlyReviewInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySubmissionUncheckedUpdateWithoutMonthlyReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
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