import { __dkItemOptions } from "../../type";
/**
 * @description 日期模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: __dkItemOptions, vModel: any) => (
    <>
        {
            option.type == 'date' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="date"
                    placeholder="Pick a date"
                /> : null
        }
        {
            option.type == 'month' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="month"
                    placeholder="Pick a month"
                /> : null
        }
        {
            option.type == 'year' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="year"
                    placeholder="Pick a year"
                /> : null
        }
    </>
)