<script setup lang="ts">
import { tableOptions } from "./type";
type propType = {
	tableOptions: tableOptions;
};
const props = withDefaults(defineProps<propType>(), {
	tableOptions: "" as any,
});
const { tableData, tableColumns } = props.tableOptions();
console.log("🚀 -- 》》 ~ tableColumns:", tableColumns);
</script>
<template>
	<div class="">
		<el-table :data="tableData" style="width: 100%">
			<el-table-column
				v-for="(item, index) in tableColumns"
				:key="item.prop + index"
				:prop="item.prop"
				:label="item.label"
				:width="item.width"
			/>
		</el-table>
	</div>
</template>
<style lang="scss" scoped></style>
