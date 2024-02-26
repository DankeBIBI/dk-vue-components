<script setup lang="ts">
import { onMounted } from "vue";
import { __tableOptions } from "./type";
import elColumn from "./components/column";
import elPagination from "./components/pagination";
type propType = {
	tableOptions: __tableOptions;
};
const props = withDefaults(defineProps<propType>(), {
	tableOptions: "" as any,
});
const { tableData, tableColumns, init, loading, pagination } =
	props.tableOptions();
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
						// tableData = [];
						init();
					}
				"
				>刷新</el-button
			>
		</div>
		<el-table
			v-loading="loading.loading"
			:element-loading-text="loading.tip"
			:element-loading-spinner="loading.svg.src"
			:element-loading-svg-view-box="loading.svg.position"
			:element-loading-background="loading.background"
			:data="tableData"
			stripe
			border
			style="width: 100%; height: auto; flex: 1"
		>
			<component :is="elColumn(tableColumns)" />
		</el-table>
		<div class="dkTable_bottomBar fx_">
			<div class="dkTable_bottomBar_pagination">
				<component :is="elPagination({pagination,init})" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.dkTable {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	&_bottomBar {
        padding: 10px 10px;
		&_pagination {
            margin-left: auto;
		}
	}
}
</style>
