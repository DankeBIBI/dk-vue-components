import { Plus } from "@element-plus/icons-vue";
import { __dkItemOptions } from "../../type";
import { pRef, setRef } from "../data";
import { showTip } from "@/utils";

/**
 * @description 上传模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: __dkItemOptions, vModel: any) => (
    <>
        <el-upload
            ref={(e) => setRef(e, option.prop)}
            file-list={option?.upload?.file_list}
            action={option?.upload?.url}
            list-type="picture-card"
            limit={option?.upload?.limit ?? 9}
            on-success={(e,a,b) => {
                console.log("🚀 -- 》》 ~ a,b:", a,b)
                return onSuccess(e, option, vModel)}
            }
            before-upload={(e) => beforeUpload(e, option)}
        >
            <el-icon><Plus /></el-icon>
        </el-upload>
    </>
)
function onSuccess(e, option: __dkItemOptions, vModel: any) {
    let src = option?.upload?.response(e)
    if (option?.upload?.response(e)) {
        if (option?.upload?.limit && (option?.upload?.limit > 1))
            vModel[option.prop].push(src)
        else
            vModel[option.prop] = src
    } else {
        showTip('上传失败', 'error')
        console.log(pRef.value[option.prop])
    }
}
function beforeUpload(e, option: __dkItemOptions) {
    if (!option?.upload?.response) {
        showTip('请先配置response()', 'warning')
        return false
    }
}