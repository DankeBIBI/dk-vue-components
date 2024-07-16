import { Ref } from "vue";
import { dkTableColumn } from "../../type";
import { checkIsMobile, vRef } from "../../../utils/computed";

export default (option: dkTableColumn[] | Ref<dkTableColumn[]>) => (
    <>
        {
            vRef<dkTableColumn[]>(option).map((item, index) => {
                const list = vRef<dkTableColumn[]>(option)
                return (
                    <el-table-column
                        key={item.prop + index}
                        prop={item.prop}
                        label={item.label}
                        width={item.width ?? '200'}
                        fixed={checkIsMobile((e) => {
                            list[index].fixed = e ? false : item.fixed
                        }) ? false : item.fixed}
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



