export class Sags {
  constructor({
    name,
    folder,
    minify,
  }: {
    name: string;
    folder: string;
    minify: boolean;
  });

  set(key: string, data: any): boolean;
  delete(key: string): boolean;
  get(key: string): any;
  type(key: string): any;
  has(key: string): boolean;
  all(): any;
  deleteAll(): boolean;
  push(key: string, data: any): boolean;
  unpush(key: string, data: any): boolean;
  add(key: string, num: number): boolean;
  subtract(key: string, num: number): boolean;
  head(key: string): any;
  tail(key: string): any;
  nth(key: string, index: number): any;
  dbSize(): number;
}
