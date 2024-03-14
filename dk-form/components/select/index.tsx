import { __dkItemOptions, __dkItemSelectOptions } from "../../type";
import { vRef } from "../../../utils/computed";
/**
 * @description 下拉选择模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: __dkItemOptions, vModel: any) => (
    <>
        <el-select
            v-model={vModel[option.prop]}
            placeholder={option.placeholder ?? `请选择${option.title}`}
            size={option.size}
            style="width: 240px"
        >
            {
                option?.selectOptions && vRef(option.selectOptions).map((item: __dkItemSelectOptions) => {
                    return <el-option
                        label={item.label}
                        value={item.value}
                        onClick={() => {
                            option.trigger && option.trigger.change && option.trigger.change({ value: item.value, item })
                        }}
                    />
                })
            }

        </el-select>
    </>
)
const a = '' as __DK_VUE_COMPONENTS_EXPORT