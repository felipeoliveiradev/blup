export interface IRepository<Y, T> {
  create(prop: Y): Promise<T>;
  delete(prop: Y): Promise<T>;
  findByName(prop: Y): Promise<T>;
  findAll(prop: Y): Promise<T>;
  update(prop: Y): Promise<T>;
}
