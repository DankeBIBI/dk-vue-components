import { Ref } from "vue"
/**弹窗 */
export type dkDialogDto = {
    /**标题 */
    title: string | number
    /**类型 */
    type: 'default' | 'custom' | 'form'
    /**内容 */
    content?: string | number
    /** */
    ref: Ref<any>
    /**渲染器 */
    rander?: any,
    /**参数 */
    props?: any
    /**确认 */
    confirm?: (e: {
        /** */
        ref?: any
        /**当表单验证通过返回表单数据对象，否则返回undefined */
        getFormParams: () => any
        /**关闭弹窗 */
        close: () => void
    }) => void
    /**取消 */
    cancel?: (e?: any) => void
    /**弹窗关闭回调 */
    closeCallBack?: (e?: any) => void
    /**样式 */
    style?: {
        borderRadius?: number
        backgroundColor?: number
    }
}