interface ObjectConstructor {
  keys<T extends object>(o: T): (keyof T)[];
}
