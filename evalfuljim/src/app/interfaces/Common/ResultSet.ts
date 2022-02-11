export interface ResultSet<T> {
  Success: boolean;
  ObjectResult: T;
  ErrorMessage: string;
}
