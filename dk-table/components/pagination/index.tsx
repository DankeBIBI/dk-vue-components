import { __tablePagination } from "../../type"

export default (option:{
    pagination:Partial<__tablePagination>,
    init:Function
})=>(
    <>
    <el-pagination
				v-model:current-page={option.pagination.page}
				v-model:page-size={option.pagination.limit}
				page-sizes={option.pagination.pageSize}
				small={false}
				disabled={false}
				background={false}
				layout="total, sizes, prev, pager, next, jumper"
				total={option.pagination.total}
				onSizeChange={(e)=>handleSizeChange(e,option.init,option.pagination)}
				onCurrentChange={(e)=>handleCurrentChange(e,option.init,option.pagination)}
			/>
    </>
)
const handleSizeChange = (val: number,init:Function,option:Partial<__tablePagination>) => {
    console.log("🚀 -- 》》 ~ val:", val)
    init({
        page:option.page,
        limit:option.limit
    })
  }
  const handleCurrentChange = (val: number,init:Function,option:Partial<__tablePagination>) => {
    console.log("🚀 -- 》》 ~ val:", val)
    init({
        page:option.page,
        limit:option.limit
    })
  }