import { dkItemOptions, dkItemSelectOptions } from "../../type";
import { vRef } from "../../../utils/computed";
/**
 * @description 下拉选择模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: dkItemOptions, vModel: any) => (
    <>
        <el-select
            v-model={vModel[option.prop]}
            disabled={option.options?.disabled}
            placeholder={option.placeholder ?? `请选择${option.title}`}
            size={option.size}
            style="width: 240px"
        >
            {
                option?.selectOptions && vRef<typeof option.selectOptions>(option.selectOptions).map((item: dkItemSelectOptions) => {
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