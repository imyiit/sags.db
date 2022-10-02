interface Options {
  /**
   * The name of the database file
   * @default db
   */
  name?: string;
  /**
   * The relative path of folder for database file
   * @default ./
   */
  folder?: string;
  /**
   * Whether to minify the database file.
   * @default true
   */
  minify?: boolean;
}

declare class Sags {
  constructor(options: Options);

  private db: object;

  //private dbSize(): number;
  private saveDB(data: object): void;

  /**
   * @param key Location of key in the key hierarchy
   */
  add(key: string, num: number): boolean;
  /**
   * @returns All database
   */
  all(): object;
  /**
   * Database size in kb
   */
  dbSize(): number;
  /**
   * Deletes specified data
   * @param key Location of key in the key hierarchy
   */
  delete(key: string): boolean;
  /**
   * Deletes all database
   */
  deleteAll(): boolean;
  /**
   * Gets specified data
   * @param key Location of key in the key hierarchy
   */
  get(key: string): string | object | number | undefined;
  /**
   * Checking whether the key hierarchy has given key
   * @param key Location of key in the key hierarchy
   */
  has(key: string): boolean;
  /**
   * @param key Location of key in the key hierarchy
   */
  head(key: string): string | object | number | undefined;
  /**
   * @param key Location of key in the key hierarchy
   */
  nth(key: string, index: number): string | object | number | undefined;
  /**
   * Pushes given data to an array
   * @param key Location of key in the key hierarchy
   */
  push(key: string, data: any): boolean;
  /**
   * Sets specified data *(Overwrites existing data if exists)*
   * @param key Location of key in the key hierarchy
   */
  set(key: string, data: any): boolean;
  /**
   * @param key Location of key in the key hierarchy
   */
  subtract(key: string, num: number): boolean;
  /**
   * @param key Location of key in the key hierarchy
   */
  tail(key: string): string | object | number | undefined;
  /**
   * Checks type of data
   * @param key Location of key in the key hierarchy
   */
  type(
    key: string
  ):
    | "bigint"
    | "boolean"
    | "function"
    | "number"
    | "object"
    | "string"
    | "symbol"
    | "undefined"
    | "array";
  /**
   * Unpushes given data from an array
   * @param key Location of key in the key hierarchy
   */
  unpush(key: string, data: any): boolean;
}

export = Sags;
