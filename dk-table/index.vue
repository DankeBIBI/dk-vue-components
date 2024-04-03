<script setup lang="ts">
import { onMounted, ref } from "vue";
import { dkTableOptions } from "./type";
import elColumn from "./components/column";
import elPagination from "./components/pagination";
import elMenu from "./components/menu";

type propType = {
	tableOptions: dkTableOptions;
};
const props = withDefaults(defineProps<propType>(), {
	tableOptions: "" as any,
});
const { tableData, tableColumns, init, loading, pagination } =
	props.tableOptions();
onMounted(() => {
	// ready();
});
const size = ref<"large" | "default" | "small">("default");
function setSize(value) {
	size.value = value;
}
</script>
<template>
	<div class="dkTable">
		<div class="dkTable_menuBar fx_">
			<component
				:is="
					elMenu({
						init,
                        size,
						setSize,
					})
				"
			/>
		</div>
		<el-table
			v-loading="loading.loading"
			:element-loading-text="loading.tip"
			:element-loading-spinner="loading.svg.src"
			:element-loading-svg-view-box="loading.svg.position"
			:element-loading-background="loading.background"
			:data="tableData"
			:size="size"
			stripe
			border
			style="width: 100%; height: auto; flex: 1"
		>
			<component :is="elColumn(tableColumns)" />
		</el-table>
		<div class="dkTable_bottomBar fx_">
			<div class="dkTable_bottomBar_pagination">
				<component :is="elPagination({ pagination, init,size })" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.el-table__header-wrapper {
	background-color: #e3e3e3 !important;
}
.dkTable {
	background-color: #fff;
	width: 100%;
	height: 100%;
	padding: 10px 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	&_menuBar {
		margin-bottom: 10px;
		&_layout {
			margin-left: auto;
			&_btn {
				margin-right: 10px;
			}
		}
	}
	&_bottomBar {
		padding: 10px 10px;
		&_pagination {
			margin-left: auto;
		}
	}
}
</style>
