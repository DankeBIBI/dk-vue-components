import { dkItemOptions, dkItemSelectOptions } from "../../type";
import { vRef } from "../../../utils/computed";
/**
 * @description 选择模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: dkItemOptions, vModel: any) => (
    <>
        <el-radio-group 
        disabled={option.options?.disabled} 
        v-model={vModel[option.prop]}
        placeholder={option.placeholder ?? "请输入：" + option.title}>
            {
                option?.selectOptions && vRef<typeof option.selectOptions>(option.selectOptions).map((item: dkItemSelectOptions, index: number) => {
                    return <el-radio label={item.value} onClick={() => {
                        option.trigger && option.trigger.change && option.trigger.change({ value: item.value, item })
                    }}>{item.label}</el-radio>
                })
            }
        </el-radio-group>
    </>
)