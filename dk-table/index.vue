<script setup lang="ts">
import { onMounted } from "vue";
import { __tableOptions } from "./type";
import elColumn from "./components/column";
type propType = {
	tableOptions: __tableOptions;
};
const props = withDefaults(defineProps<propType>(), {
	tableOptions: "" as any,
});
const { tableData, tableColumns, init } = props.tableOptions();
onMounted(() => {
	// ready();
});
</script>
<template>
	<div class="dkTable">
		<div class="dkTable_menuBar">
			<el-button
				@click="
					() => {
						tableData = [];
						init();
					}
				"
				>刷新</el-button
			>
		</div>
		<el-table :data="tableData" border style="width: 100%; height: 100%">
			<component :is="elColumn(tableColumns)" />
		</el-table>
	</div>
</template>
<style lang="scss" scoped>
.dkTable {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
</style>
