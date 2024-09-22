import { Plus } from "@element-plus/icons-vue";
import { dkItemOptions } from "../../type";
import { pRef, setRef } from "../data";
import { showTip } from "@/utils";
import { DKID } from "strap-trousers";
import { vRef } from "../../../../utils/computed";

/**
 * @description 上传模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: dkItemOptions, vModel: any) => (
    <>
        <el-upload
            ref={(e) => setRef(e, option.prop)}
            disabled={option.options?.disabled}
            file-list={option?.upload?.file_list}
            action={option?.upload?.url}
            list-type="picture-card"
            limit={option?.upload?.limit ?? 9}
            placeholder={option.placeholder ?? "请输入：" + option.title}
            on-success={(e, a, b) => onSuccess(e, option, vModel)}
            on-error={(e, a) => onError(e, a)}
            on-remove={(e, a) => onRemove(e, option, vModel)}
            before-upload={(e) => beforeUpload(e, option)}
            data={option?.upload?.data}
            size={vRef(option.size)}
        >
            <el-icon><Plus /></el-icon>
        </el-upload>
    </>
)
function onSuccess(e, option: dkItemOptions, vModel: any) {
    let src = option?.upload?.response(e)
    if (option?.upload?.response(e)) {
        if (option?.upload?.limit && (option?.upload?.limit > 1))
            vModel[option.prop].push(src)
        else
            vModel[option.prop] = src
        option?.upload.file_list.push({
            url: src,
            uid: Number(DKID({ length: 32, hasLowercase: false })),
            name: DKID({ length: 16 })
        })
    } else {
        showTip('上传失败', 'error')
        console.log(pRef.value[option.prop])
    }
}
function beforeUpload(e, option: dkItemOptions) {
    if (!option?.upload?.response) {
        showTip('请先配置response()', 'warning')
        return false
    }
}
function onRemove(e, option: dkItemOptions, vModel) {
    vModel[option.prop].splice(vModel[option.prop].findIndex(item => item == e.url), 1)
}
function onError(e, a) {
    showTip('上传失败', 'error')
}