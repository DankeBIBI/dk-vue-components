<script setup lang="ts">
import { DKID } from "strap-trousers";
import { ref, reactive } from "vue";
import { getComponent } from "./components/export.t";
import { buildFormModel, buildFormRule } from "../utils/rule";
import { checkIsMobile } from "../utils/computed";
import { pRef } from "./components/data";
import type { dkFormOptions, dkItemOptions, dkFormPropsType } from "./type";
const props = withDefaults(defineProps<dkFormPropsType>(), {
	options: () => [] as dkFormOptions,
	formSize: "default",
	ref: "" as any,
	sourceTarget: false,
	draggableClassName: "",
	row: 1,
});
/**表单实例 */
const ruleFormRef = ref<any>(null);
/**表单规则 */
const rules = ref();
/**表单数据 */
const formModel = ref();
const emit = defineEmits(["itemTrigger"]);
function itemTrigger(item: dkItemOptions) {
	emit("itemTrigger", item);
}
/**监听配置改变 */
watch(
	() => props.options,
	() => {
		rules.value = buildFormRule(props.options);
		formModel.value = buildFormModel(props.options,formModel.value);
	},
	{
        /**监听器生成立即执行一次 */
		immediate: true,
		deep: true,
	}
);
/**组件对外暴露的参数 */
defineExpose({ formModel, ruleFormRef, pRef });
</script>
<template>
	<div class="dk-form" ref="ref">
		<el-form
			:class="`${props.draggableClassName} ${
				(checkIsMobile() ? 1 : props.row > 1) ? 'flex_wrap' : ''
			}`"
			ref="ruleFormRef"
			:model="formModel"
			:rules="rules"
			label-width="120px"
			:size="props.formSize"
			status-icon
			v-if="formModel"
		>
			<div
				class="dk-form_dk-item"
				v-for="(item, index) in props.options"
				:key="DKID() + index"
				:style="`width:${100 / (checkIsMobile() ? 1 : props.row)}%;${
					item.style
				}`"
				v-show="!item.hidden"
			>
				<el-form-item
					:label="item.title"
					:prop="item.prop"
					@click="itemTrigger(item)"
				>
					<component
						:is="
							getComponent(
								{
									...item,
									size: props.formSize,
									sourceTarget: props.sourceTarget,
								},
								formModel
							)
						"
					>
					</component>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>
<style lang="scss" scoped>
@import "./style/index.scss";
.flex_wrap {
	display: flex;
	flex-wrap: wrap;
}
</style>
