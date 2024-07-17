import { dkTablePagination } from "../../type"
import {checkIsMobile} from '../../../utils/computed' 
export default (option:{
    pagination:Partial<dkTablePagination>,
    init:Function,
    size:string
})=>(
    <>
    <el-pagination
				v-model:current-page={option.pagination.page}
				v-model:page-size={option.pagination.limit}
				page-sizes={option.pagination.pageSize}
				small={checkIsMobile()?true:(option.size == 'small' ?true:false)}
				disabled={false}
				background={false}
				layout={`total, ${checkIsMobile()?'':'sizes,'} prev, pager, next, jumper`}
				total={option.pagination.total}
				onSizeChange={(e)=>handleSizeChange(e,option.init,option.pagination)}
				onCurrentChange={(e)=>handleCurrentChange(e,option.init,option.pagination)}
			/>
    </>
)
const handleSizeChange = (_val: number,init:Function,option:Partial<dkTablePagination>) => {
    init({
        page:option.page,
        limit:option.limit
    })
  }
  const handleCurrentChange = (_val: number,init:Function,option:Partial<dkTablePagination>) => {
    init({
        page:option.page,
        limit:option.limit
    })
  }