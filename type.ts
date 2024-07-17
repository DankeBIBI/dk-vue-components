export * from "./dk-form/type"
export * from './dk-table/type'
export * from './dk-dialog/type'
/**可以接受ref的值并返回对应类型，不是ref返回原来的类型 */
export type vRefType<T> = T | Ref<T>