import { dkItemOptions } from "../../type";
/**
 * @description 日期模块
 * @author Dankebibi
 * @link [email]1580074116@qq.com
 * @date 2024-2-20 11:51:30
 */
export default (option: dkItemOptions, vModel: any) => (
    <>
        {
            option.type == 'date' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="date"
                    placeholder="Pick a date"
                    onChange={e => {
                        option.trigger && option.trigger.change && option.trigger.change({ value: e, item: option })
                    }}
                /> : null
        }
        {
            option.type == 'month' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="month"
                    placeholder="Pick a month"
                    onChange={e => {
                        option.trigger && option.trigger.change && option.trigger.change({ value: e, item: option })
                    }}
                /> : null
        }
        {
            option.type == 'year' ?
                <el-date-picker
                    v-model={vModel[option.prop]}
                    type="year"
                    placeholder="Pick a year"
                    onChange={e => {
                        option.trigger && option.trigger.change && option.trigger.change({ value: e, item: option })
                    }}
                /> : null
        }
    </>
)