import { __dkItemOptions } from "../../type";
import { vRef } from "../../utils/computed";
/**
 * @description 输入模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: Partial<__dkItemOptions>, vModel: any) => (
    <>
        <el-input size={vRef(option.size)} v-model={vModel[String(option.prop)]} placeholder={option.placeholder ?? "请输入：" + option.title} onInput={(e) => {
            option.trigger && option.trigger.change && option.trigger.change({ value: e, item: {} })
        }}></el-input>
    </>
)