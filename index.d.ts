interface Options {
  /**
   * @default db
   */
  name: string;
  /**
   * @default ./
   */
  folder: string;
  /**
   * @default true
   */
  minify: boolean;
}

type data =
  | string
  | Object
  | Array<string | Object | number | boolean>
  | number
  | boolean;

declare class Sags {
  constructor(options: Options);

  private db: object;

  //private dbSize(): number;
  private saveDB(data: object): void;

  /**
   * @param key Need for add number
   * @param num Number size
   */
  add(key: string, num: number): boolean;
  /**
   * Get all database
   */
  all(): object;
  /**
   * Database kb size
   */
  dbSize(): number;
  /**
   * Delete data
   * @param key Need for delete data
   */
  delete(key: string): boolean;
  /**
   * Delete all database
   */
  deleteAll(): boolean;
  /**
   * Get data
   * @param key Need for get data
   */
  get(key: string): data;
  /**
   * Checking database for this data
   * @param key Need for check has data
   */
  has(key: string): boolean;
  /**
   * @param key Need for find head
   */
  head(key: string): data;
  /**
   * @param key Need for find element
   * @param index Index number
   */
  nth(key: string, index: number): data;
  /**
   * Push data to array
   * @param key Need for push data
   * @param data Pushing item
   */
  push(key: string, data: data): boolean;
  /**
   * Set data
   * @param key Need for save data
   * @param data Saved data
   */
  set(key: string, data: data): boolean;
  /**
   * @param key Need for subtract number
   * @param num Number size
   */
  subtract(key: string, num: number): boolean;
  /**
   * @param key Need for find tail
   */
  tail(key: string): data;
  /**
   * Checking data type
   * @param key Need for check type of data
   */
  type(key: string): data;
  /**
   * Unpush an element from array
   * @param key Need for unpush data from array
   * @param data Unpushing item
   */
  unpush(key: string, data: data): boolean;
}

export = Sags;
