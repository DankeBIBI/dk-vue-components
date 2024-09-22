export * from "./src/dk-form/src/type"
export * from './src/dk-table'
export * from './src/dk-dialog'
/**可以接受ref的值并返回对应类型，不是ref返回原来的类型 */
export type vRefType<T> = T | Ref<T>