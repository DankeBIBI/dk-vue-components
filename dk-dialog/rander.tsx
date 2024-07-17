import { h, ref } from "vue"
import type { dkDialogDto } from "./type"
import dkForm from "../dk-form"
import { dkFormRef } from "../type"
import { checkIsMobile } from "../utils/computed"
/**弹窗仓库 */
export const dkDialogStore = ref<dkDialogDto[]>([])
export const dkDialog = () => (
    <>
        {
            dkDialogStore.value.map((item, index) => {
                return (
                    <el-dialog
                        v-model={item}
                        title={item.title}
                        width="500"
                        key={index}
                        append-to-body
                        ref={e => setRef(e, item)}
                        style={buildStyle(item)}
                    >
                        {
                            {
                                default: () => item.rander ? h(item.rander, { ref: e => setRef(e, item), ...item.props }) : <>{item.content}</>,
                                footer: () => (
                                    <>
                                        <div class="dialog-footer">
                                            <el-button onClick={() => closeDkDialog()}>取消</el-button>
                                            <el-button type="primary" onClick={() => {
                                                item.confirm && item.confirm({
                                                    ref: item.ref,
                                                    getFormParams: () => getFormParams(item.ref),
                                                    close: closeDkDialog
                                                })
                                            }}>
                                                确定
                                            </el-button>
                                        </div>
                                    </>
                                )
                            }
                        }
                    </el-dialog >
                )

            })
        }
    </>
)
/**打开对话框 */
export function addDkDialog(options: dkDialogDto) {
    const { type } = options
    let data = {
        ...options
    } as any
    if (type == 'form') data.rander = dkForm
    dkDialogStore.value.push(data)
}
/**关闭当前对话框 */
export function closeDkDialog() {
    dkDialogStore.value.splice(dkDialogStore.value.length - 1, 1)
}
/**关闭所有对话框 */
export function closeAllDkDialog() {
    dkDialogStore.value = []
}
/**验证并获取表单数据 */
export async function getFormParams(ref: dkFormRef) {
    let data = {}
    await ref.ruleFormRef.validate((valid) => {
        if (valid) {
            return data = ref.formModel
        } else {
            return data = false
        }
    })
    return data
}
/**显示一个提示框 */
export function showModal(options: Pick<dkDialogDto, "title" | "content" | "cancel" | "confirm">) {
    const showModalRef = ref()
    addDkDialog({
        ...options,
        ref: showModalRef,
        type: 'default',
    })
}
/**组建样式 */
function buildStyle(item: dkDialogDto) {
    let styles = ''
    const { style } = item
    if (!style) return styles
    if (style.borderRadius) styles += `border-radius:${style.borderRadius}px;`
    if (style.backgroundColor) styles += `background-color:${style.backgroundColor};`
    if (style.marginTop) styles += `marginTop:${style.marginTop}px;`
    if (style.width) styles += `width:${style.width}px;`
    if (checkIsMobile()) styles += `width:${window.innerWidth * .86}px;`
    return styles
}
function setRef(e, item) {
    item.ref = e
}