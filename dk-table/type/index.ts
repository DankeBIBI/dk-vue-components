import { Ref } from "vue";
/**默认或者响应式数组 */
export type defaultOrRefArray<T> = T[] | Ref<T[]>;

export type dkTableOptionsCallback = {
    tableData: Ref<any[]> | any[];
    tableColumns: Ref<dkTableColumn[]> | dkTableColumn[],
    init: (e?: dkTableInit) => any,
    loading: dkTableLoading,
    pagination: dkTablePagination,
    add:(e?: any) => any
}
export type dkTableOptions = () => dkTableOptionsCallback
export type dkTableInit = {
    page: number,
    limit: number
}
export type dkTableLoading = {
    loading: boolean,
    background: string,
    tip: string,
    svg: {
        position: string,
        src: string
    }
}
export type dkTablePagination = {
    page: number,
    limit: number,
    pageSize: number[],
    total: number,
}
export interface dkTableColumn {
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
    fixed?: true | false | 'left' | 'right' 
    /**当内容过长被隐藏时显示 tooltip */
    tooltip?: boolean
    cellRander?: ({ row, column, $index }) => any,
    /**表头对齐方式， 若不设置该项，则使用表格的对齐方式 */
    align?: 'left' | 'center' | 'right'
}

export interface dkTableBtns {
    type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    icon?: string
    size?: 'large' | 'medium' | 'small' | 'mini'
    text?: string | number,
    trigger:Function
}