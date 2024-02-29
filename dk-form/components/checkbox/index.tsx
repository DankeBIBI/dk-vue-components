import { __dkItemOptions, __dkItemSelectOptions } from "../../type";
import { vRef } from "../../../utils/computed";
/**
 * @description 多选模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: __dkItemOptions, vModel: any) => (
    <>
        <el-checkbox-group v-model={vModel[option.prop]}>
            {
                option?.selectOptions && vRef(option.selectOptions).map((item: __dkItemSelectOptions) => {
                    return <el-checkbox label={item.value} onClick={() => {
                        option.trigger && option.trigger.change && option.trigger.change({ value: item.value, item })
                    }}>{item.label}</el-checkbox>
                })
            }
        </el-checkbox-group>
    </>
)