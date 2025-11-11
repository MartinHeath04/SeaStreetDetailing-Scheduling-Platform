
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model AddOn
 * 
 */
export type AddOn = $Result.DefaultSelection<Prisma.$AddOnPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Unavailability
 * 
 */
export type Unavailability = $Result.DefaultSelection<Prisma.$UnavailabilityPayload>
/**
 * Model SmsLog
 * 
 */
export type SmsLog = $Result.DefaultSelection<Prisma.$SmsLogPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  pending: 'pending',
  pending_payment: 'pending_payment',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  payment_failed: 'payment_failed'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const SmsDirection: {
  inbound: 'inbound',
  outbound: 'outbound'
};

export type SmsDirection = (typeof SmsDirection)[keyof typeof SmsDirection]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type SmsDirection = $Enums.SmsDirection

export const SmsDirection: typeof $Enums.SmsDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Services
 * const services = await prisma.service.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addOn`: Exposes CRUD operations for the **AddOn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddOns
    * const addOns = await prisma.addOn.findMany()
    * ```
    */
  get addOn(): Prisma.AddOnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unavailability`: Exposes CRUD operations for the **Unavailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unavailabilities
    * const unavailabilities = await prisma.unavailability.findMany()
    * ```
    */
  get unavailability(): Prisma.UnavailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smsLog`: Exposes CRUD operations for the **SmsLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmsLogs
    * const smsLogs = await prisma.smsLog.findMany()
    * ```
    */
  get smsLog(): Prisma.SmsLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    Service: 'Service',
    AddOn: 'AddOn',
    Booking: 'Booking',
    Unavailability: 'Unavailability',
    SmsLog: 'SmsLog',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "service" | "addOn" | "booking" | "unavailability" | "smsLog" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      AddOn: {
        payload: Prisma.$AddOnPayload<ExtArgs>
        fields: Prisma.AddOnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddOnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddOnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          findFirst: {
            args: Prisma.AddOnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddOnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          findMany: {
            args: Prisma.AddOnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          create: {
            args: Prisma.AddOnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          createMany: {
            args: Prisma.AddOnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddOnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          delete: {
            args: Prisma.AddOnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          update: {
            args: Prisma.AddOnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          deleteMany: {
            args: Prisma.AddOnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddOnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddOnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          upsert: {
            args: Prisma.AddOnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          aggregate: {
            args: Prisma.AddOnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddOn>
          }
          groupBy: {
            args: Prisma.AddOnGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddOnGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddOnCountArgs<ExtArgs>
            result: $Utils.Optional<AddOnCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Unavailability: {
        payload: Prisma.$UnavailabilityPayload<ExtArgs>
        fields: Prisma.UnavailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnavailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnavailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findFirst: {
            args: Prisma.UnavailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnavailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findMany: {
            args: Prisma.UnavailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          create: {
            args: Prisma.UnavailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          createMany: {
            args: Prisma.UnavailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnavailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          delete: {
            args: Prisma.UnavailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          update: {
            args: Prisma.UnavailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          deleteMany: {
            args: Prisma.UnavailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnavailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnavailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          upsert: {
            args: Prisma.UnavailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          aggregate: {
            args: Prisma.UnavailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnavailability>
          }
          groupBy: {
            args: Prisma.UnavailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnavailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityCountAggregateOutputType> | number
          }
        }
      }
      SmsLog: {
        payload: Prisma.$SmsLogPayload<ExtArgs>
        fields: Prisma.SmsLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmsLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmsLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          findFirst: {
            args: Prisma.SmsLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmsLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          findMany: {
            args: Prisma.SmsLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>[]
          }
          create: {
            args: Prisma.SmsLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          createMany: {
            args: Prisma.SmsLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmsLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>[]
          }
          delete: {
            args: Prisma.SmsLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          update: {
            args: Prisma.SmsLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          deleteMany: {
            args: Prisma.SmsLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmsLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmsLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>[]
          }
          upsert: {
            args: Prisma.SmsLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          aggregate: {
            args: Prisma.SmsLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmsLog>
          }
          groupBy: {
            args: Prisma.SmsLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmsLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmsLogCountArgs<ExtArgs>
            result: $Utils.Optional<SmsLogCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    service?: ServiceOmit
    addOn?: AddOnOmit
    booking?: BookingOmit
    unavailability?: UnavailabilityOmit
    smsLog?: SmsLogOmit
    payment?: PaymentOmit
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
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
    smsLogs: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
    smsLogs?: boolean | BookingCountOutputTypeCountSmsLogsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountSmsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmsLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    durationMin: number | null
    basePriceCents: number | null
  }

  export type ServiceSumAggregateOutputType = {
    durationMin: number | null
    basePriceCents: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    durationMin: number | null
    basePriceCents: number | null
    active: boolean | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    durationMin: number | null
    basePriceCents: number | null
    active: boolean | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    durationMin: number
    basePriceCents: number
    active: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    durationMin?: true
    basePriceCents?: true
  }

  export type ServiceSumAggregateInputType = {
    durationMin?: true
    basePriceCents?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    durationMin?: true
    basePriceCents?: true
    active?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    durationMin?: true
    basePriceCents?: true
    active?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    durationMin?: true
    basePriceCents?: true
    active?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    durationMin: number
    basePriceCents: number
    active: boolean
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    durationMin?: boolean
    basePriceCents?: boolean
    active?: boolean
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    durationMin?: boolean
    basePriceCents?: boolean
    active?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    durationMin?: boolean
    basePriceCents?: boolean
    active?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    durationMin?: boolean
    basePriceCents?: boolean
    active?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "durationMin" | "basePriceCents" | "active", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      durationMin: number
      basePriceCents: number
      active: boolean
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly durationMin: FieldRef<"Service", 'Int'>
    readonly basePriceCents: FieldRef<"Service", 'Int'>
    readonly active: FieldRef<"Service", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model AddOn
   */

  export type AggregateAddOn = {
    _count: AddOnCountAggregateOutputType | null
    _avg: AddOnAvgAggregateOutputType | null
    _sum: AddOnSumAggregateOutputType | null
    _min: AddOnMinAggregateOutputType | null
    _max: AddOnMaxAggregateOutputType | null
  }

  export type AddOnAvgAggregateOutputType = {
    priceCents: number | null
    durationMin: number | null
  }

  export type AddOnSumAggregateOutputType = {
    priceCents: number | null
    durationMin: number | null
  }

  export type AddOnMinAggregateOutputType = {
    id: string | null
    name: string | null
    priceCents: number | null
    durationMin: number | null
    active: boolean | null
  }

  export type AddOnMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priceCents: number | null
    durationMin: number | null
    active: boolean | null
  }

  export type AddOnCountAggregateOutputType = {
    id: number
    name: number
    priceCents: number
    durationMin: number
    active: number
    _all: number
  }


  export type AddOnAvgAggregateInputType = {
    priceCents?: true
    durationMin?: true
  }

  export type AddOnSumAggregateInputType = {
    priceCents?: true
    durationMin?: true
  }

  export type AddOnMinAggregateInputType = {
    id?: true
    name?: true
    priceCents?: true
    durationMin?: true
    active?: true
  }

  export type AddOnMaxAggregateInputType = {
    id?: true
    name?: true
    priceCents?: true
    durationMin?: true
    active?: true
  }

  export type AddOnCountAggregateInputType = {
    id?: true
    name?: true
    priceCents?: true
    durationMin?: true
    active?: true
    _all?: true
  }

  export type AddOnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddOn to aggregate.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddOns
    **/
    _count?: true | AddOnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddOnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddOnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddOnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddOnMaxAggregateInputType
  }

  export type GetAddOnAggregateType<T extends AddOnAggregateArgs> = {
        [P in keyof T & keyof AggregateAddOn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddOn[P]>
      : GetScalarType<T[P], AggregateAddOn[P]>
  }




  export type AddOnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddOnWhereInput
    orderBy?: AddOnOrderByWithAggregationInput | AddOnOrderByWithAggregationInput[]
    by: AddOnScalarFieldEnum[] | AddOnScalarFieldEnum
    having?: AddOnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddOnCountAggregateInputType | true
    _avg?: AddOnAvgAggregateInputType
    _sum?: AddOnSumAggregateInputType
    _min?: AddOnMinAggregateInputType
    _max?: AddOnMaxAggregateInputType
  }

  export type AddOnGroupByOutputType = {
    id: string
    name: string
    priceCents: number
    durationMin: number
    active: boolean
    _count: AddOnCountAggregateOutputType | null
    _avg: AddOnAvgAggregateOutputType | null
    _sum: AddOnSumAggregateOutputType | null
    _min: AddOnMinAggregateOutputType | null
    _max: AddOnMaxAggregateOutputType | null
  }

  type GetAddOnGroupByPayload<T extends AddOnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddOnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddOnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddOnGroupByOutputType[P]>
            : GetScalarType<T[P], AddOnGroupByOutputType[P]>
        }
      >
    >


  export type AddOnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceCents?: boolean
    durationMin?: boolean
    active?: boolean
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceCents?: boolean
    durationMin?: boolean
    active?: boolean
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceCents?: boolean
    durationMin?: boolean
    active?: boolean
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectScalar = {
    id?: boolean
    name?: boolean
    priceCents?: boolean
    durationMin?: boolean
    active?: boolean
  }

  export type AddOnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceCents" | "durationMin" | "active", ExtArgs["result"]["addOn"]>

  export type $AddOnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddOn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priceCents: number
      durationMin: number
      active: boolean
    }, ExtArgs["result"]["addOn"]>
    composites: {}
  }

  type AddOnGetPayload<S extends boolean | null | undefined | AddOnDefaultArgs> = $Result.GetResult<Prisma.$AddOnPayload, S>

  type AddOnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddOnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddOnCountAggregateInputType | true
    }

  export interface AddOnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddOn'], meta: { name: 'AddOn' } }
    /**
     * Find zero or one AddOn that matches the filter.
     * @param {AddOnFindUniqueArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddOnFindUniqueArgs>(args: SelectSubset<T, AddOnFindUniqueArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddOn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddOnFindUniqueOrThrowArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddOnFindUniqueOrThrowArgs>(args: SelectSubset<T, AddOnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddOn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindFirstArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddOnFindFirstArgs>(args?: SelectSubset<T, AddOnFindFirstArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddOn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindFirstOrThrowArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddOnFindFirstOrThrowArgs>(args?: SelectSubset<T, AddOnFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddOns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddOns
     * const addOns = await prisma.addOn.findMany()
     * 
     * // Get first 10 AddOns
     * const addOns = await prisma.addOn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addOnWithIdOnly = await prisma.addOn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddOnFindManyArgs>(args?: SelectSubset<T, AddOnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddOn.
     * @param {AddOnCreateArgs} args - Arguments to create a AddOn.
     * @example
     * // Create one AddOn
     * const AddOn = await prisma.addOn.create({
     *   data: {
     *     // ... data to create a AddOn
     *   }
     * })
     * 
     */
    create<T extends AddOnCreateArgs>(args: SelectSubset<T, AddOnCreateArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddOns.
     * @param {AddOnCreateManyArgs} args - Arguments to create many AddOns.
     * @example
     * // Create many AddOns
     * const addOn = await prisma.addOn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddOnCreateManyArgs>(args?: SelectSubset<T, AddOnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddOns and returns the data saved in the database.
     * @param {AddOnCreateManyAndReturnArgs} args - Arguments to create many AddOns.
     * @example
     * // Create many AddOns
     * const addOn = await prisma.addOn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddOns and only return the `id`
     * const addOnWithIdOnly = await prisma.addOn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddOnCreateManyAndReturnArgs>(args?: SelectSubset<T, AddOnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddOn.
     * @param {AddOnDeleteArgs} args - Arguments to delete one AddOn.
     * @example
     * // Delete one AddOn
     * const AddOn = await prisma.addOn.delete({
     *   where: {
     *     // ... filter to delete one AddOn
     *   }
     * })
     * 
     */
    delete<T extends AddOnDeleteArgs>(args: SelectSubset<T, AddOnDeleteArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddOn.
     * @param {AddOnUpdateArgs} args - Arguments to update one AddOn.
     * @example
     * // Update one AddOn
     * const addOn = await prisma.addOn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddOnUpdateArgs>(args: SelectSubset<T, AddOnUpdateArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddOns.
     * @param {AddOnDeleteManyArgs} args - Arguments to filter AddOns to delete.
     * @example
     * // Delete a few AddOns
     * const { count } = await prisma.addOn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddOnDeleteManyArgs>(args?: SelectSubset<T, AddOnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddOns
     * const addOn = await prisma.addOn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddOnUpdateManyArgs>(args: SelectSubset<T, AddOnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddOns and returns the data updated in the database.
     * @param {AddOnUpdateManyAndReturnArgs} args - Arguments to update many AddOns.
     * @example
     * // Update many AddOns
     * const addOn = await prisma.addOn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddOns and only return the `id`
     * const addOnWithIdOnly = await prisma.addOn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddOnUpdateManyAndReturnArgs>(args: SelectSubset<T, AddOnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddOn.
     * @param {AddOnUpsertArgs} args - Arguments to update or create a AddOn.
     * @example
     * // Update or create a AddOn
     * const addOn = await prisma.addOn.upsert({
     *   create: {
     *     // ... data to create a AddOn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddOn we want to update
     *   }
     * })
     */
    upsert<T extends AddOnUpsertArgs>(args: SelectSubset<T, AddOnUpsertArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnCountArgs} args - Arguments to filter AddOns to count.
     * @example
     * // Count the number of AddOns
     * const count = await prisma.addOn.count({
     *   where: {
     *     // ... the filter for the AddOns we want to count
     *   }
     * })
    **/
    count<T extends AddOnCountArgs>(
      args?: Subset<T, AddOnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddOnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddOnAggregateArgs>(args: Subset<T, AddOnAggregateArgs>): Prisma.PrismaPromise<GetAddOnAggregateType<T>>

    /**
     * Group by AddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnGroupByArgs} args - Group by arguments.
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
      T extends AddOnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddOnGroupByArgs['orderBy'] }
        : { orderBy?: AddOnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddOnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddOnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddOn model
   */
  readonly fields: AddOnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddOn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddOnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AddOn model
   */
  interface AddOnFieldRefs {
    readonly id: FieldRef<"AddOn", 'String'>
    readonly name: FieldRef<"AddOn", 'String'>
    readonly priceCents: FieldRef<"AddOn", 'Int'>
    readonly durationMin: FieldRef<"AddOn", 'Int'>
    readonly active: FieldRef<"AddOn", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AddOn findUnique
   */
  export type AddOnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn findUniqueOrThrow
   */
  export type AddOnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn findFirst
   */
  export type AddOnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddOns.
     */
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn findFirstOrThrow
   */
  export type AddOnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddOns.
     */
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn findMany
   */
  export type AddOnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter, which AddOns to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn create
   */
  export type AddOnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data needed to create a AddOn.
     */
    data: XOR<AddOnCreateInput, AddOnUncheckedCreateInput>
  }

  /**
   * AddOn createMany
   */
  export type AddOnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddOns.
     */
    data: AddOnCreateManyInput | AddOnCreateManyInput[]
  }

  /**
   * AddOn createManyAndReturn
   */
  export type AddOnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data used to create many AddOns.
     */
    data: AddOnCreateManyInput | AddOnCreateManyInput[]
  }

  /**
   * AddOn update
   */
  export type AddOnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data needed to update a AddOn.
     */
    data: XOR<AddOnUpdateInput, AddOnUncheckedUpdateInput>
    /**
     * Choose, which AddOn to update.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn updateMany
   */
  export type AddOnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddOns.
     */
    data: XOR<AddOnUpdateManyMutationInput, AddOnUncheckedUpdateManyInput>
    /**
     * Filter which AddOns to update
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to update.
     */
    limit?: number
  }

  /**
   * AddOn updateManyAndReturn
   */
  export type AddOnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data used to update AddOns.
     */
    data: XOR<AddOnUpdateManyMutationInput, AddOnUncheckedUpdateManyInput>
    /**
     * Filter which AddOns to update
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to update.
     */
    limit?: number
  }

  /**
   * AddOn upsert
   */
  export type AddOnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The filter to search for the AddOn to update in case it exists.
     */
    where: AddOnWhereUniqueInput
    /**
     * In case the AddOn found by the `where` argument doesn't exist, create a new AddOn with this data.
     */
    create: XOR<AddOnCreateInput, AddOnUncheckedCreateInput>
    /**
     * In case the AddOn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddOnUpdateInput, AddOnUncheckedUpdateInput>
  }

  /**
   * AddOn delete
   */
  export type AddOnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Filter which AddOn to delete.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn deleteMany
   */
  export type AddOnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddOns to delete
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to delete.
     */
    limit?: number
  }

  /**
   * AddOn without action
   */
  export type AddOnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    priceCents: number | null
  }

  export type BookingSumAggregateOutputType = {
    priceCents: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    email: string | null
    phone: string | null
    serviceId: string | null
    addOnIds: string | null
    startAtUtc: Date | null
    endAtUtc: Date | null
    address: string | null
    notes: string | null
    status: $Enums.BookingStatus | null
    priceCents: number | null
    stripePaymentIntentId: string | null
    gcalEventId: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    email: string | null
    phone: string | null
    serviceId: string | null
    addOnIds: string | null
    startAtUtc: Date | null
    endAtUtc: Date | null
    address: string | null
    notes: string | null
    status: $Enums.BookingStatus | null
    priceCents: number | null
    stripePaymentIntentId: string | null
    gcalEventId: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    customerName: number
    email: number
    phone: number
    serviceId: number
    addOnIds: number
    startAtUtc: number
    endAtUtc: number
    address: number
    notes: number
    status: number
    priceCents: number
    stripePaymentIntentId: number
    gcalEventId: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    priceCents?: true
  }

  export type BookingSumAggregateInputType = {
    priceCents?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    customerName?: true
    email?: true
    phone?: true
    serviceId?: true
    addOnIds?: true
    startAtUtc?: true
    endAtUtc?: true
    address?: true
    notes?: true
    status?: true
    priceCents?: true
    stripePaymentIntentId?: true
    gcalEventId?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    customerName?: true
    email?: true
    phone?: true
    serviceId?: true
    addOnIds?: true
    startAtUtc?: true
    endAtUtc?: true
    address?: true
    notes?: true
    status?: true
    priceCents?: true
    stripePaymentIntentId?: true
    gcalEventId?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    customerName?: true
    email?: true
    phone?: true
    serviceId?: true
    addOnIds?: true
    startAtUtc?: true
    endAtUtc?: true
    address?: true
    notes?: true
    status?: true
    priceCents?: true
    stripePaymentIntentId?: true
    gcalEventId?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    customerName: string
    email: string
    phone: string
    serviceId: string
    addOnIds: string
    startAtUtc: Date
    endAtUtc: Date
    address: string
    notes: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId: string | null
    gcalEventId: string | null
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    serviceId?: boolean
    addOnIds?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    address?: boolean
    notes?: boolean
    status?: boolean
    priceCents?: boolean
    stripePaymentIntentId?: boolean
    gcalEventId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    smsLogs?: boolean | Booking$smsLogsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    serviceId?: boolean
    addOnIds?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    address?: boolean
    notes?: boolean
    status?: boolean
    priceCents?: boolean
    stripePaymentIntentId?: boolean
    gcalEventId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    serviceId?: boolean
    addOnIds?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    address?: boolean
    notes?: boolean
    status?: boolean
    priceCents?: boolean
    stripePaymentIntentId?: boolean
    gcalEventId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    serviceId?: boolean
    addOnIds?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    address?: boolean
    notes?: boolean
    status?: boolean
    priceCents?: boolean
    stripePaymentIntentId?: boolean
    gcalEventId?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "email" | "phone" | "serviceId" | "addOnIds" | "startAtUtc" | "endAtUtc" | "address" | "notes" | "status" | "priceCents" | "stripePaymentIntentId" | "gcalEventId" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    smsLogs?: boolean | Booking$smsLogsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      smsLogs: Prisma.$SmsLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      email: string
      phone: string
      serviceId: string
      addOnIds: string
      startAtUtc: Date
      endAtUtc: Date
      address: string
      notes: string | null
      status: $Enums.BookingStatus
      priceCents: number
      stripePaymentIntentId: string | null
      gcalEventId: string | null
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    smsLogs<T extends Booking$smsLogsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$smsLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly customerName: FieldRef<"Booking", 'String'>
    readonly email: FieldRef<"Booking", 'String'>
    readonly phone: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly addOnIds: FieldRef<"Booking", 'String'>
    readonly startAtUtc: FieldRef<"Booking", 'DateTime'>
    readonly endAtUtc: FieldRef<"Booking", 'DateTime'>
    readonly address: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly priceCents: FieldRef<"Booking", 'Int'>
    readonly stripePaymentIntentId: FieldRef<"Booking", 'String'>
    readonly gcalEventId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking.smsLogs
   */
  export type Booking$smsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    where?: SmsLogWhereInput
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    cursor?: SmsLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Unavailability
   */

  export type AggregateUnavailability = {
    _count: UnavailabilityCountAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  export type UnavailabilityMinAggregateOutputType = {
    id: string | null
    startAtUtc: Date | null
    endAtUtc: Date | null
    reason: string | null
  }

  export type UnavailabilityMaxAggregateOutputType = {
    id: string | null
    startAtUtc: Date | null
    endAtUtc: Date | null
    reason: string | null
  }

  export type UnavailabilityCountAggregateOutputType = {
    id: number
    startAtUtc: number
    endAtUtc: number
    reason: number
    _all: number
  }


  export type UnavailabilityMinAggregateInputType = {
    id?: true
    startAtUtc?: true
    endAtUtc?: true
    reason?: true
  }

  export type UnavailabilityMaxAggregateInputType = {
    id?: true
    startAtUtc?: true
    endAtUtc?: true
    reason?: true
  }

  export type UnavailabilityCountAggregateInputType = {
    id?: true
    startAtUtc?: true
    endAtUtc?: true
    reason?: true
    _all?: true
  }

  export type UnavailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailability to aggregate.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unavailabilities
    **/
    _count?: true | UnavailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type GetUnavailabilityAggregateType<T extends UnavailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailability[P]>
      : GetScalarType<T[P], AggregateUnavailability[P]>
  }




  export type UnavailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailabilityWhereInput
    orderBy?: UnavailabilityOrderByWithAggregationInput | UnavailabilityOrderByWithAggregationInput[]
    by: UnavailabilityScalarFieldEnum[] | UnavailabilityScalarFieldEnum
    having?: UnavailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailabilityCountAggregateInputType | true
    _min?: UnavailabilityMinAggregateInputType
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type UnavailabilityGroupByOutputType = {
    id: string
    startAtUtc: Date
    endAtUtc: Date
    reason: string | null
    _count: UnavailabilityCountAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  type GetUnavailabilityGroupByPayload<T extends UnavailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnavailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
        }
      >
    >


  export type UnavailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    reason?: boolean
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    reason?: boolean
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    reason?: boolean
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectScalar = {
    id?: boolean
    startAtUtc?: boolean
    endAtUtc?: boolean
    reason?: boolean
  }

  export type UnavailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startAtUtc" | "endAtUtc" | "reason", ExtArgs["result"]["unavailability"]>

  export type $UnavailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unavailability"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startAtUtc: Date
      endAtUtc: Date
      reason: string | null
    }, ExtArgs["result"]["unavailability"]>
    composites: {}
  }

  type UnavailabilityGetPayload<S extends boolean | null | undefined | UnavailabilityDefaultArgs> = $Result.GetResult<Prisma.$UnavailabilityPayload, S>

  type UnavailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnavailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnavailabilityCountAggregateInputType | true
    }

  export interface UnavailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unavailability'], meta: { name: 'Unavailability' } }
    /**
     * Find zero or one Unavailability that matches the filter.
     * @param {UnavailabilityFindUniqueArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnavailabilityFindUniqueArgs>(args: SelectSubset<T, UnavailabilityFindUniqueArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unavailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnavailabilityFindUniqueOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnavailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, UnavailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unavailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnavailabilityFindFirstArgs>(args?: SelectSubset<T, UnavailabilityFindFirstArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unavailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnavailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, UnavailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unavailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany()
     * 
     * // Get first 10 Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnavailabilityFindManyArgs>(args?: SelectSubset<T, UnavailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unavailability.
     * @param {UnavailabilityCreateArgs} args - Arguments to create a Unavailability.
     * @example
     * // Create one Unavailability
     * const Unavailability = await prisma.unavailability.create({
     *   data: {
     *     // ... data to create a Unavailability
     *   }
     * })
     * 
     */
    create<T extends UnavailabilityCreateArgs>(args: SelectSubset<T, UnavailabilityCreateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unavailabilities.
     * @param {UnavailabilityCreateManyArgs} args - Arguments to create many Unavailabilities.
     * @example
     * // Create many Unavailabilities
     * const unavailability = await prisma.unavailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnavailabilityCreateManyArgs>(args?: SelectSubset<T, UnavailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unavailabilities and returns the data saved in the database.
     * @param {UnavailabilityCreateManyAndReturnArgs} args - Arguments to create many Unavailabilities.
     * @example
     * // Create many Unavailabilities
     * const unavailability = await prisma.unavailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unavailabilities and only return the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnavailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, UnavailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unavailability.
     * @param {UnavailabilityDeleteArgs} args - Arguments to delete one Unavailability.
     * @example
     * // Delete one Unavailability
     * const Unavailability = await prisma.unavailability.delete({
     *   where: {
     *     // ... filter to delete one Unavailability
     *   }
     * })
     * 
     */
    delete<T extends UnavailabilityDeleteArgs>(args: SelectSubset<T, UnavailabilityDeleteArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unavailability.
     * @param {UnavailabilityUpdateArgs} args - Arguments to update one Unavailability.
     * @example
     * // Update one Unavailability
     * const unavailability = await prisma.unavailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnavailabilityUpdateArgs>(args: SelectSubset<T, UnavailabilityUpdateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unavailabilities.
     * @param {UnavailabilityDeleteManyArgs} args - Arguments to filter Unavailabilities to delete.
     * @example
     * // Delete a few Unavailabilities
     * const { count } = await prisma.unavailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnavailabilityDeleteManyArgs>(args?: SelectSubset<T, UnavailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unavailabilities
     * const unavailability = await prisma.unavailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnavailabilityUpdateManyArgs>(args: SelectSubset<T, UnavailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailabilities and returns the data updated in the database.
     * @param {UnavailabilityUpdateManyAndReturnArgs} args - Arguments to update many Unavailabilities.
     * @example
     * // Update many Unavailabilities
     * const unavailability = await prisma.unavailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unavailabilities and only return the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnavailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, UnavailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unavailability.
     * @param {UnavailabilityUpsertArgs} args - Arguments to update or create a Unavailability.
     * @example
     * // Update or create a Unavailability
     * const unavailability = await prisma.unavailability.upsert({
     *   create: {
     *     // ... data to create a Unavailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unavailability we want to update
     *   }
     * })
     */
    upsert<T extends UnavailabilityUpsertArgs>(args: SelectSubset<T, UnavailabilityUpsertArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityCountArgs} args - Arguments to filter Unavailabilities to count.
     * @example
     * // Count the number of Unavailabilities
     * const count = await prisma.unavailability.count({
     *   where: {
     *     // ... the filter for the Unavailabilities we want to count
     *   }
     * })
    **/
    count<T extends UnavailabilityCountArgs>(
      args?: Subset<T, UnavailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnavailabilityAggregateArgs>(args: Subset<T, UnavailabilityAggregateArgs>): Prisma.PrismaPromise<GetUnavailabilityAggregateType<T>>

    /**
     * Group by Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityGroupByArgs} args - Group by arguments.
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
      T extends UnavailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailabilityGroupByArgs['orderBy'] }
        : { orderBy?: UnavailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnavailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unavailability model
   */
  readonly fields: UnavailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unavailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnavailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Unavailability model
   */
  interface UnavailabilityFieldRefs {
    readonly id: FieldRef<"Unavailability", 'String'>
    readonly startAtUtc: FieldRef<"Unavailability", 'DateTime'>
    readonly endAtUtc: FieldRef<"Unavailability", 'DateTime'>
    readonly reason: FieldRef<"Unavailability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unavailability findUnique
   */
  export type UnavailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findUniqueOrThrow
   */
  export type UnavailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findFirst
   */
  export type UnavailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findFirstOrThrow
   */
  export type UnavailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findMany
   */
  export type UnavailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter, which Unavailabilities to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability create
   */
  export type UnavailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data needed to create a Unavailability.
     */
    data: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
  }

  /**
   * Unavailability createMany
   */
  export type UnavailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unavailabilities.
     */
    data: UnavailabilityCreateManyInput | UnavailabilityCreateManyInput[]
  }

  /**
   * Unavailability createManyAndReturn
   */
  export type UnavailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Unavailabilities.
     */
    data: UnavailabilityCreateManyInput | UnavailabilityCreateManyInput[]
  }

  /**
   * Unavailability update
   */
  export type UnavailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data needed to update a Unavailability.
     */
    data: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
    /**
     * Choose, which Unavailability to update.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability updateMany
   */
  export type UnavailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unavailabilities.
     */
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Unavailabilities to update
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to update.
     */
    limit?: number
  }

  /**
   * Unavailability updateManyAndReturn
   */
  export type UnavailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Unavailabilities.
     */
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Unavailabilities to update
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to update.
     */
    limit?: number
  }

  /**
   * Unavailability upsert
   */
  export type UnavailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The filter to search for the Unavailability to update in case it exists.
     */
    where: UnavailabilityWhereUniqueInput
    /**
     * In case the Unavailability found by the `where` argument doesn't exist, create a new Unavailability with this data.
     */
    create: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
    /**
     * In case the Unavailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
  }

  /**
   * Unavailability delete
   */
  export type UnavailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Filter which Unavailability to delete.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability deleteMany
   */
  export type UnavailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailabilities to delete
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to delete.
     */
    limit?: number
  }

  /**
   * Unavailability without action
   */
  export type UnavailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
  }


  /**
   * Model SmsLog
   */

  export type AggregateSmsLog = {
    _count: SmsLogCountAggregateOutputType | null
    _min: SmsLogMinAggregateOutputType | null
    _max: SmsLogMaxAggregateOutputType | null
  }

  export type SmsLogMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    direction: $Enums.SmsDirection | null
    toNumber: string | null
    body: string | null
    status: string | null
    createdAt: Date | null
  }

  export type SmsLogMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    direction: $Enums.SmsDirection | null
    toNumber: string | null
    body: string | null
    status: string | null
    createdAt: Date | null
  }

  export type SmsLogCountAggregateOutputType = {
    id: number
    bookingId: number
    direction: number
    toNumber: number
    body: number
    status: number
    createdAt: number
    _all: number
  }


  export type SmsLogMinAggregateInputType = {
    id?: true
    bookingId?: true
    direction?: true
    toNumber?: true
    body?: true
    status?: true
    createdAt?: true
  }

  export type SmsLogMaxAggregateInputType = {
    id?: true
    bookingId?: true
    direction?: true
    toNumber?: true
    body?: true
    status?: true
    createdAt?: true
  }

  export type SmsLogCountAggregateInputType = {
    id?: true
    bookingId?: true
    direction?: true
    toNumber?: true
    body?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type SmsLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsLog to aggregate.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmsLogs
    **/
    _count?: true | SmsLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmsLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmsLogMaxAggregateInputType
  }

  export type GetSmsLogAggregateType<T extends SmsLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSmsLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmsLog[P]>
      : GetScalarType<T[P], AggregateSmsLog[P]>
  }




  export type SmsLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmsLogWhereInput
    orderBy?: SmsLogOrderByWithAggregationInput | SmsLogOrderByWithAggregationInput[]
    by: SmsLogScalarFieldEnum[] | SmsLogScalarFieldEnum
    having?: SmsLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmsLogCountAggregateInputType | true
    _min?: SmsLogMinAggregateInputType
    _max?: SmsLogMaxAggregateInputType
  }

  export type SmsLogGroupByOutputType = {
    id: string
    bookingId: string | null
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status: string | null
    createdAt: Date
    _count: SmsLogCountAggregateOutputType | null
    _min: SmsLogMinAggregateOutputType | null
    _max: SmsLogMaxAggregateOutputType | null
  }

  type GetSmsLogGroupByPayload<T extends SmsLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmsLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmsLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmsLogGroupByOutputType[P]>
            : GetScalarType<T[P], SmsLogGroupByOutputType[P]>
        }
      >
    >


  export type SmsLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    direction?: boolean
    toNumber?: boolean
    body?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["smsLog"]>

  export type SmsLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    direction?: boolean
    toNumber?: boolean
    body?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["smsLog"]>

  export type SmsLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    direction?: boolean
    toNumber?: boolean
    body?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["smsLog"]>

  export type SmsLogSelectScalar = {
    id?: boolean
    bookingId?: boolean
    direction?: boolean
    toNumber?: boolean
    body?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type SmsLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "direction" | "toNumber" | "body" | "status" | "createdAt", ExtArgs["result"]["smsLog"]>
  export type SmsLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }
  export type SmsLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }
  export type SmsLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | SmsLog$bookingArgs<ExtArgs>
  }

  export type $SmsLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmsLog"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string | null
      direction: $Enums.SmsDirection
      toNumber: string
      body: string
      status: string | null
      createdAt: Date
    }, ExtArgs["result"]["smsLog"]>
    composites: {}
  }

  type SmsLogGetPayload<S extends boolean | null | undefined | SmsLogDefaultArgs> = $Result.GetResult<Prisma.$SmsLogPayload, S>

  type SmsLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmsLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmsLogCountAggregateInputType | true
    }

  export interface SmsLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmsLog'], meta: { name: 'SmsLog' } }
    /**
     * Find zero or one SmsLog that matches the filter.
     * @param {SmsLogFindUniqueArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmsLogFindUniqueArgs>(args: SelectSubset<T, SmsLogFindUniqueArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmsLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmsLogFindUniqueOrThrowArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmsLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SmsLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindFirstArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmsLogFindFirstArgs>(args?: SelectSubset<T, SmsLogFindFirstArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindFirstOrThrowArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmsLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SmsLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmsLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmsLogs
     * const smsLogs = await prisma.smsLog.findMany()
     * 
     * // Get first 10 SmsLogs
     * const smsLogs = await prisma.smsLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smsLogWithIdOnly = await prisma.smsLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmsLogFindManyArgs>(args?: SelectSubset<T, SmsLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmsLog.
     * @param {SmsLogCreateArgs} args - Arguments to create a SmsLog.
     * @example
     * // Create one SmsLog
     * const SmsLog = await prisma.smsLog.create({
     *   data: {
     *     // ... data to create a SmsLog
     *   }
     * })
     * 
     */
    create<T extends SmsLogCreateArgs>(args: SelectSubset<T, SmsLogCreateArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmsLogs.
     * @param {SmsLogCreateManyArgs} args - Arguments to create many SmsLogs.
     * @example
     * // Create many SmsLogs
     * const smsLog = await prisma.smsLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmsLogCreateManyArgs>(args?: SelectSubset<T, SmsLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmsLogs and returns the data saved in the database.
     * @param {SmsLogCreateManyAndReturnArgs} args - Arguments to create many SmsLogs.
     * @example
     * // Create many SmsLogs
     * const smsLog = await prisma.smsLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmsLogs and only return the `id`
     * const smsLogWithIdOnly = await prisma.smsLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmsLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SmsLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmsLog.
     * @param {SmsLogDeleteArgs} args - Arguments to delete one SmsLog.
     * @example
     * // Delete one SmsLog
     * const SmsLog = await prisma.smsLog.delete({
     *   where: {
     *     // ... filter to delete one SmsLog
     *   }
     * })
     * 
     */
    delete<T extends SmsLogDeleteArgs>(args: SelectSubset<T, SmsLogDeleteArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmsLog.
     * @param {SmsLogUpdateArgs} args - Arguments to update one SmsLog.
     * @example
     * // Update one SmsLog
     * const smsLog = await prisma.smsLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmsLogUpdateArgs>(args: SelectSubset<T, SmsLogUpdateArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmsLogs.
     * @param {SmsLogDeleteManyArgs} args - Arguments to filter SmsLogs to delete.
     * @example
     * // Delete a few SmsLogs
     * const { count } = await prisma.smsLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmsLogDeleteManyArgs>(args?: SelectSubset<T, SmsLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmsLogs
     * const smsLog = await prisma.smsLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmsLogUpdateManyArgs>(args: SelectSubset<T, SmsLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsLogs and returns the data updated in the database.
     * @param {SmsLogUpdateManyAndReturnArgs} args - Arguments to update many SmsLogs.
     * @example
     * // Update many SmsLogs
     * const smsLog = await prisma.smsLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmsLogs and only return the `id`
     * const smsLogWithIdOnly = await prisma.smsLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SmsLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SmsLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmsLog.
     * @param {SmsLogUpsertArgs} args - Arguments to update or create a SmsLog.
     * @example
     * // Update or create a SmsLog
     * const smsLog = await prisma.smsLog.upsert({
     *   create: {
     *     // ... data to create a SmsLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmsLog we want to update
     *   }
     * })
     */
    upsert<T extends SmsLogUpsertArgs>(args: SelectSubset<T, SmsLogUpsertArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogCountArgs} args - Arguments to filter SmsLogs to count.
     * @example
     * // Count the number of SmsLogs
     * const count = await prisma.smsLog.count({
     *   where: {
     *     // ... the filter for the SmsLogs we want to count
     *   }
     * })
    **/
    count<T extends SmsLogCountArgs>(
      args?: Subset<T, SmsLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmsLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmsLogAggregateArgs>(args: Subset<T, SmsLogAggregateArgs>): Prisma.PrismaPromise<GetSmsLogAggregateType<T>>

    /**
     * Group by SmsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogGroupByArgs} args - Group by arguments.
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
      T extends SmsLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmsLogGroupByArgs['orderBy'] }
        : { orderBy?: SmsLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmsLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmsLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmsLog model
   */
  readonly fields: SmsLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmsLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmsLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends SmsLog$bookingArgs<ExtArgs> = {}>(args?: Subset<T, SmsLog$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SmsLog model
   */
  interface SmsLogFieldRefs {
    readonly id: FieldRef<"SmsLog", 'String'>
    readonly bookingId: FieldRef<"SmsLog", 'String'>
    readonly direction: FieldRef<"SmsLog", 'SmsDirection'>
    readonly toNumber: FieldRef<"SmsLog", 'String'>
    readonly body: FieldRef<"SmsLog", 'String'>
    readonly status: FieldRef<"SmsLog", 'String'>
    readonly createdAt: FieldRef<"SmsLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmsLog findUnique
   */
  export type SmsLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog findUniqueOrThrow
   */
  export type SmsLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog findFirst
   */
  export type SmsLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsLogs.
     */
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog findFirstOrThrow
   */
  export type SmsLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsLogs.
     */
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog findMany
   */
  export type SmsLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter, which SmsLogs to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog create
   */
  export type SmsLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SmsLog.
     */
    data: XOR<SmsLogCreateInput, SmsLogUncheckedCreateInput>
  }

  /**
   * SmsLog createMany
   */
  export type SmsLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmsLogs.
     */
    data: SmsLogCreateManyInput | SmsLogCreateManyInput[]
  }

  /**
   * SmsLog createManyAndReturn
   */
  export type SmsLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * The data used to create many SmsLogs.
     */
    data: SmsLogCreateManyInput | SmsLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmsLog update
   */
  export type SmsLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SmsLog.
     */
    data: XOR<SmsLogUpdateInput, SmsLogUncheckedUpdateInput>
    /**
     * Choose, which SmsLog to update.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog updateMany
   */
  export type SmsLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmsLogs.
     */
    data: XOR<SmsLogUpdateManyMutationInput, SmsLogUncheckedUpdateManyInput>
    /**
     * Filter which SmsLogs to update
     */
    where?: SmsLogWhereInput
    /**
     * Limit how many SmsLogs to update.
     */
    limit?: number
  }

  /**
   * SmsLog updateManyAndReturn
   */
  export type SmsLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * The data used to update SmsLogs.
     */
    data: XOR<SmsLogUpdateManyMutationInput, SmsLogUncheckedUpdateManyInput>
    /**
     * Filter which SmsLogs to update
     */
    where?: SmsLogWhereInput
    /**
     * Limit how many SmsLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmsLog upsert
   */
  export type SmsLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SmsLog to update in case it exists.
     */
    where: SmsLogWhereUniqueInput
    /**
     * In case the SmsLog found by the `where` argument doesn't exist, create a new SmsLog with this data.
     */
    create: XOR<SmsLogCreateInput, SmsLogUncheckedCreateInput>
    /**
     * In case the SmsLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmsLogUpdateInput, SmsLogUncheckedUpdateInput>
  }

  /**
   * SmsLog delete
   */
  export type SmsLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
    /**
     * Filter which SmsLog to delete.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog deleteMany
   */
  export type SmsLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsLogs to delete
     */
    where?: SmsLogWhereInput
    /**
     * Limit how many SmsLogs to delete.
     */
    limit?: number
  }

  /**
   * SmsLog.booking
   */
  export type SmsLog$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * SmsLog without action
   */
  export type SmsLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsLog
     */
    omit?: SmsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmsLogInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amountCents: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amountCents: number | null
    status: string | null
    providerRef: string | null
    paidAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amountCents: number | null
    status: string | null
    providerRef: string | null
    paidAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    amountCents: number
    status: number
    providerRef: number
    paidAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountCents?: true
  }

  export type PaymentSumAggregateInputType = {
    amountCents?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    amountCents?: true
    status?: true
    providerRef?: true
    paidAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amountCents?: true
    status?: true
    providerRef?: true
    paidAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    amountCents?: true
    status?: true
    providerRef?: true
    paidAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    bookingId: string
    amountCents: number
    status: string
    providerRef: string | null
    paidAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amountCents?: boolean
    status?: boolean
    providerRef?: boolean
    paidAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amountCents?: boolean
    status?: boolean
    providerRef?: boolean
    paidAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amountCents?: boolean
    status?: boolean
    providerRef?: boolean
    paidAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amountCents?: boolean
    status?: boolean
    providerRef?: boolean
    paidAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amountCents" | "status" | "providerRef" | "paidAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amountCents: number
      status: string
      providerRef: string | null
      paidAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly amountCents: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly providerRef: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    durationMin: 'durationMin',
    basePriceCents: 'basePriceCents',
    active: 'active'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AddOnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceCents: 'priceCents',
    durationMin: 'durationMin',
    active: 'active'
  };

  export type AddOnScalarFieldEnum = (typeof AddOnScalarFieldEnum)[keyof typeof AddOnScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    email: 'email',
    phone: 'phone',
    serviceId: 'serviceId',
    addOnIds: 'addOnIds',
    startAtUtc: 'startAtUtc',
    endAtUtc: 'endAtUtc',
    address: 'address',
    notes: 'notes',
    status: 'status',
    priceCents: 'priceCents',
    stripePaymentIntentId: 'stripePaymentIntentId',
    gcalEventId: 'gcalEventId',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const UnavailabilityScalarFieldEnum: {
    id: 'id',
    startAtUtc: 'startAtUtc',
    endAtUtc: 'endAtUtc',
    reason: 'reason'
  };

  export type UnavailabilityScalarFieldEnum = (typeof UnavailabilityScalarFieldEnum)[keyof typeof UnavailabilityScalarFieldEnum]


  export const SmsLogScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    direction: 'direction',
    toNumber: 'toNumber',
    body: 'body',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type SmsLogScalarFieldEnum = (typeof SmsLogScalarFieldEnum)[keyof typeof SmsLogScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amountCents: 'amountCents',
    status: 'status',
    providerRef: 'providerRef',
    paidAt: 'paidAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'SmsDirection'
   */
  export type EnumSmsDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmsDirection'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    durationMin?: IntFilter<"Service"> | number
    basePriceCents?: IntFilter<"Service"> | number
    active?: BoolFilter<"Service"> | boolean
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    basePriceCents?: SortOrder
    active?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    durationMin?: IntFilter<"Service"> | number
    basePriceCents?: IntFilter<"Service"> | number
    active?: BoolFilter<"Service"> | boolean
    bookings?: BookingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    basePriceCents?: SortOrder
    active?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    durationMin?: IntWithAggregatesFilter<"Service"> | number
    basePriceCents?: IntWithAggregatesFilter<"Service"> | number
    active?: BoolWithAggregatesFilter<"Service"> | boolean
  }

  export type AddOnWhereInput = {
    AND?: AddOnWhereInput | AddOnWhereInput[]
    OR?: AddOnWhereInput[]
    NOT?: AddOnWhereInput | AddOnWhereInput[]
    id?: StringFilter<"AddOn"> | string
    name?: StringFilter<"AddOn"> | string
    priceCents?: IntFilter<"AddOn"> | number
    durationMin?: IntFilter<"AddOn"> | number
    active?: BoolFilter<"AddOn"> | boolean
  }

  export type AddOnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceCents?: SortOrder
    durationMin?: SortOrder
    active?: SortOrder
  }

  export type AddOnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddOnWhereInput | AddOnWhereInput[]
    OR?: AddOnWhereInput[]
    NOT?: AddOnWhereInput | AddOnWhereInput[]
    name?: StringFilter<"AddOn"> | string
    priceCents?: IntFilter<"AddOn"> | number
    durationMin?: IntFilter<"AddOn"> | number
    active?: BoolFilter<"AddOn"> | boolean
  }, "id">

  export type AddOnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceCents?: SortOrder
    durationMin?: SortOrder
    active?: SortOrder
    _count?: AddOnCountOrderByAggregateInput
    _avg?: AddOnAvgOrderByAggregateInput
    _max?: AddOnMaxOrderByAggregateInput
    _min?: AddOnMinOrderByAggregateInput
    _sum?: AddOnSumOrderByAggregateInput
  }

  export type AddOnScalarWhereWithAggregatesInput = {
    AND?: AddOnScalarWhereWithAggregatesInput | AddOnScalarWhereWithAggregatesInput[]
    OR?: AddOnScalarWhereWithAggregatesInput[]
    NOT?: AddOnScalarWhereWithAggregatesInput | AddOnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AddOn"> | string
    name?: StringWithAggregatesFilter<"AddOn"> | string
    priceCents?: IntWithAggregatesFilter<"AddOn"> | number
    durationMin?: IntWithAggregatesFilter<"AddOn"> | number
    active?: BoolWithAggregatesFilter<"AddOn"> | boolean
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    customerName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    addOnIds?: StringFilter<"Booking"> | string
    startAtUtc?: DateTimeFilter<"Booking"> | Date | string
    endAtUtc?: DateTimeFilter<"Booking"> | Date | string
    address?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    priceCents?: IntFilter<"Booking"> | number
    stripePaymentIntentId?: StringNullableFilter<"Booking"> | string | null
    gcalEventId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    payments?: PaymentListRelationFilter
    smsLogs?: SmsLogListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    serviceId?: SortOrder
    addOnIds?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    address?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    priceCents?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    gcalEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    smsLogs?: SmsLogOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    customerName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    addOnIds?: StringFilter<"Booking"> | string
    startAtUtc?: DateTimeFilter<"Booking"> | Date | string
    endAtUtc?: DateTimeFilter<"Booking"> | Date | string
    address?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    priceCents?: IntFilter<"Booking"> | number
    stripePaymentIntentId?: StringNullableFilter<"Booking"> | string | null
    gcalEventId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    payments?: PaymentListRelationFilter
    smsLogs?: SmsLogListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    serviceId?: SortOrder
    addOnIds?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    address?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    priceCents?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    gcalEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    customerName?: StringWithAggregatesFilter<"Booking"> | string
    email?: StringWithAggregatesFilter<"Booking"> | string
    phone?: StringWithAggregatesFilter<"Booking"> | string
    serviceId?: StringWithAggregatesFilter<"Booking"> | string
    addOnIds?: StringWithAggregatesFilter<"Booking"> | string
    startAtUtc?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endAtUtc?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    address?: StringWithAggregatesFilter<"Booking"> | string
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    priceCents?: IntWithAggregatesFilter<"Booking"> | number
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    gcalEventId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UnavailabilityWhereInput = {
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    id?: StringFilter<"Unavailability"> | string
    startAtUtc?: DateTimeFilter<"Unavailability"> | Date | string
    endAtUtc?: DateTimeFilter<"Unavailability"> | Date | string
    reason?: StringNullableFilter<"Unavailability"> | string | null
  }

  export type UnavailabilityOrderByWithRelationInput = {
    id?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    reason?: SortOrderInput | SortOrder
  }

  export type UnavailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    startAtUtc?: DateTimeFilter<"Unavailability"> | Date | string
    endAtUtc?: DateTimeFilter<"Unavailability"> | Date | string
    reason?: StringNullableFilter<"Unavailability"> | string | null
  }, "id">

  export type UnavailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: UnavailabilityCountOrderByAggregateInput
    _max?: UnavailabilityMaxOrderByAggregateInput
    _min?: UnavailabilityMinOrderByAggregateInput
  }

  export type UnavailabilityScalarWhereWithAggregatesInput = {
    AND?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    OR?: UnavailabilityScalarWhereWithAggregatesInput[]
    NOT?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unavailability"> | string
    startAtUtc?: DateTimeWithAggregatesFilter<"Unavailability"> | Date | string
    endAtUtc?: DateTimeWithAggregatesFilter<"Unavailability"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"Unavailability"> | string | null
  }

  export type SmsLogWhereInput = {
    AND?: SmsLogWhereInput | SmsLogWhereInput[]
    OR?: SmsLogWhereInput[]
    NOT?: SmsLogWhereInput | SmsLogWhereInput[]
    id?: StringFilter<"SmsLog"> | string
    bookingId?: StringNullableFilter<"SmsLog"> | string | null
    direction?: EnumSmsDirectionFilter<"SmsLog"> | $Enums.SmsDirection
    toNumber?: StringFilter<"SmsLog"> | string
    body?: StringFilter<"SmsLog"> | string
    status?: StringNullableFilter<"SmsLog"> | string | null
    createdAt?: DateTimeFilter<"SmsLog"> | Date | string
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type SmsLogOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    direction?: SortOrder
    toNumber?: SortOrder
    body?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type SmsLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmsLogWhereInput | SmsLogWhereInput[]
    OR?: SmsLogWhereInput[]
    NOT?: SmsLogWhereInput | SmsLogWhereInput[]
    bookingId?: StringNullableFilter<"SmsLog"> | string | null
    direction?: EnumSmsDirectionFilter<"SmsLog"> | $Enums.SmsDirection
    toNumber?: StringFilter<"SmsLog"> | string
    body?: StringFilter<"SmsLog"> | string
    status?: StringNullableFilter<"SmsLog"> | string | null
    createdAt?: DateTimeFilter<"SmsLog"> | Date | string
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id">

  export type SmsLogOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    direction?: SortOrder
    toNumber?: SortOrder
    body?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SmsLogCountOrderByAggregateInput
    _max?: SmsLogMaxOrderByAggregateInput
    _min?: SmsLogMinOrderByAggregateInput
  }

  export type SmsLogScalarWhereWithAggregatesInput = {
    AND?: SmsLogScalarWhereWithAggregatesInput | SmsLogScalarWhereWithAggregatesInput[]
    OR?: SmsLogScalarWhereWithAggregatesInput[]
    NOT?: SmsLogScalarWhereWithAggregatesInput | SmsLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmsLog"> | string
    bookingId?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    direction?: EnumSmsDirectionWithAggregatesFilter<"SmsLog"> | $Enums.SmsDirection
    toNumber?: StringWithAggregatesFilter<"SmsLog"> | string
    body?: StringWithAggregatesFilter<"SmsLog"> | string
    status?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SmsLog"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amountCents?: IntFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    providerRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    bookingId?: StringFilter<"Payment"> | string
    amountCents?: IntFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    providerRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
    amountCents?: IntWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    providerRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    durationMin: number
    basePriceCents: number
    active?: boolean
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    durationMin: number
    basePriceCents: number
    active?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    durationMin: number
    basePriceCents: number
    active?: boolean
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddOnCreateInput = {
    id?: string
    name: string
    priceCents?: number
    durationMin?: number
    active?: boolean
  }

  export type AddOnUncheckedCreateInput = {
    id?: string
    name: string
    priceCents?: number
    durationMin?: number
    active?: boolean
  }

  export type AddOnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    durationMin?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddOnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    durationMin?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddOnCreateManyInput = {
    id?: string
    name: string
    priceCents?: number
    durationMin?: number
    active?: boolean
  }

  export type AddOnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    durationMin?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddOnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    durationMin?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingCreateInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    smsLogs?: SmsLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    serviceId: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    smsLogs?: SmsLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    smsLogs?: SmsLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    smsLogs?: SmsLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    serviceId: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailabilityCreateInput = {
    id?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    reason?: string | null
  }

  export type UnavailabilityUncheckedCreateInput = {
    id?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    reason?: string | null
  }

  export type UnavailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnavailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnavailabilityCreateManyInput = {
    id?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    reason?: string | null
  }

  export type UnavailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnavailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SmsLogCreateInput = {
    id?: string
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
    booking?: BookingCreateNestedOneWithoutSmsLogsInput
  }

  export type SmsLogUncheckedCreateInput = {
    id?: string
    bookingId?: string | null
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutSmsLogsNestedInput
  }

  export type SmsLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogCreateManyInput = {
    id?: string
    bookingId?: string | null
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
    booking: BookingCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    bookingId: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    bookingId: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    basePriceCents?: SortOrder
    active?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    durationMin?: SortOrder
    basePriceCents?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    basePriceCents?: SortOrder
    active?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    basePriceCents?: SortOrder
    active?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    durationMin?: SortOrder
    basePriceCents?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AddOnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceCents?: SortOrder
    durationMin?: SortOrder
    active?: SortOrder
  }

  export type AddOnAvgOrderByAggregateInput = {
    priceCents?: SortOrder
    durationMin?: SortOrder
  }

  export type AddOnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceCents?: SortOrder
    durationMin?: SortOrder
    active?: SortOrder
  }

  export type AddOnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceCents?: SortOrder
    durationMin?: SortOrder
    active?: SortOrder
  }

  export type AddOnSumOrderByAggregateInput = {
    priceCents?: SortOrder
    durationMin?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SmsLogListRelationFilter = {
    every?: SmsLogWhereInput
    some?: SmsLogWhereInput
    none?: SmsLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SmsLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    serviceId?: SortOrder
    addOnIds?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priceCents?: SortOrder
    stripePaymentIntentId?: SortOrder
    gcalEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    priceCents?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    serviceId?: SortOrder
    addOnIds?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priceCents?: SortOrder
    stripePaymentIntentId?: SortOrder
    gcalEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    serviceId?: SortOrder
    addOnIds?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priceCents?: SortOrder
    stripePaymentIntentId?: SortOrder
    gcalEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    priceCents?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type UnavailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    reason?: SortOrder
  }

  export type UnavailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    reason?: SortOrder
  }

  export type UnavailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    startAtUtc?: SortOrder
    endAtUtc?: SortOrder
    reason?: SortOrder
  }

  export type EnumSmsDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SmsDirection | EnumSmsDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SmsDirection[]
    notIn?: $Enums.SmsDirection[]
    not?: NestedEnumSmsDirectionFilter<$PrismaModel> | $Enums.SmsDirection
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type SmsLogCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    direction?: SortOrder
    toNumber?: SortOrder
    body?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    direction?: SortOrder
    toNumber?: SortOrder
    body?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    direction?: SortOrder
    toNumber?: SortOrder
    body?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSmsDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmsDirection | EnumSmsDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SmsDirection[]
    notIn?: $Enums.SmsDirection[]
    not?: NestedEnumSmsDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SmsDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmsDirectionFilter<$PrismaModel>
    _max?: NestedEnumSmsDirectionFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    providerRef?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    providerRef?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    providerRef?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SmsLogCreateNestedManyWithoutBookingInput = {
    create?: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput> | SmsLogCreateWithoutBookingInput[] | SmsLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SmsLogCreateOrConnectWithoutBookingInput | SmsLogCreateOrConnectWithoutBookingInput[]
    createMany?: SmsLogCreateManyBookingInputEnvelope
    connect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SmsLogUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput> | SmsLogCreateWithoutBookingInput[] | SmsLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SmsLogCreateOrConnectWithoutBookingInput | SmsLogCreateOrConnectWithoutBookingInput[]
    createMany?: SmsLogCreateManyBookingInputEnvelope
    connect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SmsLogUpdateManyWithoutBookingNestedInput = {
    create?: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput> | SmsLogCreateWithoutBookingInput[] | SmsLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SmsLogCreateOrConnectWithoutBookingInput | SmsLogCreateOrConnectWithoutBookingInput[]
    upsert?: SmsLogUpsertWithWhereUniqueWithoutBookingInput | SmsLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: SmsLogCreateManyBookingInputEnvelope
    set?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    disconnect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    delete?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    connect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    update?: SmsLogUpdateWithWhereUniqueWithoutBookingInput | SmsLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: SmsLogUpdateManyWithWhereWithoutBookingInput | SmsLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: SmsLogScalarWhereInput | SmsLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SmsLogUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput> | SmsLogCreateWithoutBookingInput[] | SmsLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SmsLogCreateOrConnectWithoutBookingInput | SmsLogCreateOrConnectWithoutBookingInput[]
    upsert?: SmsLogUpsertWithWhereUniqueWithoutBookingInput | SmsLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: SmsLogCreateManyBookingInputEnvelope
    set?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    disconnect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    delete?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    connect?: SmsLogWhereUniqueInput | SmsLogWhereUniqueInput[]
    update?: SmsLogUpdateWithWhereUniqueWithoutBookingInput | SmsLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: SmsLogUpdateManyWithWhereWithoutBookingInput | SmsLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: SmsLogScalarWhereInput | SmsLogScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutSmsLogsInput = {
    create?: XOR<BookingCreateWithoutSmsLogsInput, BookingUncheckedCreateWithoutSmsLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSmsLogsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumSmsDirectionFieldUpdateOperationsInput = {
    set?: $Enums.SmsDirection
  }

  export type BookingUpdateOneWithoutSmsLogsNestedInput = {
    create?: XOR<BookingCreateWithoutSmsLogsInput, BookingUncheckedCreateWithoutSmsLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSmsLogsInput
    upsert?: BookingUpsertWithoutSmsLogsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutSmsLogsInput, BookingUpdateWithoutSmsLogsInput>, BookingUncheckedUpdateWithoutSmsLogsInput>
  }

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    upsert?: BookingUpsertWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentsInput, BookingUpdateWithoutPaymentsInput>, BookingUncheckedUpdateWithoutPaymentsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
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

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumSmsDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SmsDirection | EnumSmsDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SmsDirection[]
    notIn?: $Enums.SmsDirection[]
    not?: NestedEnumSmsDirectionFilter<$PrismaModel> | $Enums.SmsDirection
  }

  export type NestedEnumSmsDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmsDirection | EnumSmsDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SmsDirection[]
    notIn?: $Enums.SmsDirection[]
    not?: NestedEnumSmsDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SmsDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmsDirectionFilter<$PrismaModel>
    _max?: NestedEnumSmsDirectionFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BookingCreateWithoutServiceInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutBookingInput
    smsLogs?: SmsLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    smsLogs?: SmsLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    customerName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    addOnIds?: StringFilter<"Booking"> | string
    startAtUtc?: DateTimeFilter<"Booking"> | Date | string
    endAtUtc?: DateTimeFilter<"Booking"> | Date | string
    address?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    priceCents?: IntFilter<"Booking"> | number
    stripePaymentIntentId?: StringNullableFilter<"Booking"> | string | null
    gcalEventId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    durationMin: number
    basePriceCents: number
    active?: boolean
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    durationMin: number
    basePriceCents: number
    active?: boolean
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
  }

  export type SmsLogCreateWithoutBookingInput = {
    id?: string
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUncheckedCreateWithoutBookingInput = {
    id?: string
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
  }

  export type SmsLogCreateOrConnectWithoutBookingInput = {
    where: SmsLogWhereUniqueInput
    create: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput>
  }

  export type SmsLogCreateManyBookingInputEnvelope = {
    data: SmsLogCreateManyBookingInput | SmsLogCreateManyBookingInput[]
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    basePriceCents?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amountCents?: IntFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    providerRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type SmsLogUpsertWithWhereUniqueWithoutBookingInput = {
    where: SmsLogWhereUniqueInput
    update: XOR<SmsLogUpdateWithoutBookingInput, SmsLogUncheckedUpdateWithoutBookingInput>
    create: XOR<SmsLogCreateWithoutBookingInput, SmsLogUncheckedCreateWithoutBookingInput>
  }

  export type SmsLogUpdateWithWhereUniqueWithoutBookingInput = {
    where: SmsLogWhereUniqueInput
    data: XOR<SmsLogUpdateWithoutBookingInput, SmsLogUncheckedUpdateWithoutBookingInput>
  }

  export type SmsLogUpdateManyWithWhereWithoutBookingInput = {
    where: SmsLogScalarWhereInput
    data: XOR<SmsLogUpdateManyMutationInput, SmsLogUncheckedUpdateManyWithoutBookingInput>
  }

  export type SmsLogScalarWhereInput = {
    AND?: SmsLogScalarWhereInput | SmsLogScalarWhereInput[]
    OR?: SmsLogScalarWhereInput[]
    NOT?: SmsLogScalarWhereInput | SmsLogScalarWhereInput[]
    id?: StringFilter<"SmsLog"> | string
    bookingId?: StringNullableFilter<"SmsLog"> | string | null
    direction?: EnumSmsDirectionFilter<"SmsLog"> | $Enums.SmsDirection
    toNumber?: StringFilter<"SmsLog"> | string
    body?: StringFilter<"SmsLog"> | string
    status?: StringNullableFilter<"SmsLog"> | string | null
    createdAt?: DateTimeFilter<"SmsLog"> | Date | string
  }

  export type BookingCreateWithoutSmsLogsInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSmsLogsInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    serviceId: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSmsLogsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSmsLogsInput, BookingUncheckedCreateWithoutSmsLogsInput>
  }

  export type BookingUpsertWithoutSmsLogsInput = {
    update: XOR<BookingUpdateWithoutSmsLogsInput, BookingUncheckedUpdateWithoutSmsLogsInput>
    create: XOR<BookingCreateWithoutSmsLogsInput, BookingUncheckedCreateWithoutSmsLogsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutSmsLogsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutSmsLogsInput, BookingUncheckedUpdateWithoutSmsLogsInput>
  }

  export type BookingUpdateWithoutSmsLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSmsLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateWithoutPaymentsInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutBookingsInput
    smsLogs?: SmsLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    serviceId: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
    smsLogs?: SmsLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    smsLogs?: SmsLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smsLogs?: SmsLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyServiceInput = {
    id?: string
    customerName: string
    email: string
    phone: string
    addOnIds?: string
    startAtUtc: Date | string
    endAtUtc: Date | string
    address: string
    notes?: string | null
    status: $Enums.BookingStatus
    priceCents: number
    stripePaymentIntentId?: string | null
    gcalEventId?: string | null
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    smsLogs?: SmsLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    smsLogs?: SmsLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addOnIds?: StringFieldUpdateOperationsInput | string
    startAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    endAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    priceCents?: IntFieldUpdateOperationsInput | number
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    gcalEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: string
    amountCents: number
    status: string
    providerRef?: string | null
    paidAt?: Date | string | null
  }

  export type SmsLogCreateManyBookingInput = {
    id?: string
    direction: $Enums.SmsDirection
    toNumber: string
    body: string
    status?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SmsLogUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSmsDirectionFieldUpdateOperationsInput | $Enums.SmsDirection
    toNumber?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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