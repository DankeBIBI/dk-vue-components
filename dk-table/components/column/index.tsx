import { Ref } from "vue";
import { __tableColumn } from "../../type";
import { vRef } from "../../../utils/computed";

export default (option: __tableColumn[] | Ref<__tableColumn[]>) => (
    <>
        {
            vRef(option).map((item, index) => {
                return (
                    <el-table-column
                        key={item.prop + index}
                        prop={item.prop}
                        label={item.label}
                        width={item.width ?? '100'}
                        fixed={item.fixed ?? false}
                        show-overflow-tooltip={item.tooltip ?? false}
                        align={item.align ?? 'center'}
                    >
                        {

                            {
                                default: (scope) =>
                                (
                                    item.cellRander ?
                                        item.cellRander(scope) : null
                                )
                            }

                        }
                    </el-table-column>
                )
            })
        }
    </>
)

const rander = (scope) => (
    <>
        <el-text>12312321</el-text>
    </>

)


