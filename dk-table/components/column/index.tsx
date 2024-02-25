import { __tableColumn } from "../../type";

export default (option: __tableColumn[]) => (
    <>
        {
            option.map((item, index) => {
                return (
                    <el-table-column
                        key={item.prop + index}
                        prop={item.prop}
                        label={item.label}
                        width={item.width ?? '100'}
                        fixed={item.fixed ?? false}
                        show-overflow-tooltip={item.tooltip ?? false}
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


