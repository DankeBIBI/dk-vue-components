import { Ref } from "vue";
export type __tableOptionsCallback = {
    tableData: Ref<any[]> | any[];
    tableColumns: Ref<__tableColumn[]> | __tableColumn[],
    init: (e?: __tableInit) => any,
    loading: __tableLoading,
    pagination: __tablePagination
}
export type __tableOptions = () => __tableOptionsCallback
export type __tableInit = {
    page: number,
    limit: number
}
export type __tableLoading = {
    loading: boolean,
    background: string,
    tip: string,
    svg: {
        position: string,
        src: string
    }
}
export type __tablePagination = {
    page: number,
    limit: number,
    pageSize: number[],
    total: number,
}
export interface __tableColumn {
    /**	显示的标题 */
    label: string
    /**	字段名称 对应列内容的字段名， 也可以使用 property属性 */
    prop: string
    /**对应列的宽度 */
    width?: string | number
    /**对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮 */
    type?: 'selection' | 'index' | 'expand'
    /**	如果设置了 type=index，可以通过传递 index 属性来自定义索引 */
    index?: number | ((number) => {})
    /**对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 */
    minWidth?: string | number
    /**列是否固定在左侧或者右侧。 true 表示固定在左侧 */
    fixed?: true | 'left' | 'right'
    /**当内容过长被隐藏时显示 tooltip */
    tooltip?: boolean
    cellRander?: ({ row, column, $index }) => any
}