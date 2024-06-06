<script setup lang="ts">
import { DKID } from "strap-trousers";
import { ref, reactive } from "vue";
import { getComponent } from "./components/export.t";
import { buildFormModel, buildFormRule } from "../utils/rule";
import { pRef } from "./components/data";
import { dkFormOptions, dkItemOptions } from "./type";
type propsType = {
	options: dkFormOptions;
	formSize: "" | "large" | "default" | "small";
	ref: any;
	sourceTarget: boolean;
	draggableClassName: string;
};
const props = withDefaults(defineProps<propsType>(), {
	options: () => [] as dkFormOptions,
	formSize: "default",
	ref: "" as any,
	sourceTarget: false,
	draggableClassName: "",
});
const formModel = reactive(buildFormModel(props.options));
const ruleFormRef = ref<any>(null);
const rules = ref(buildFormRule(props.options));
const emit = defineEmits(["itemTrigger"]);
defineExpose({ formModel, ruleFormRef, pRef });
function itemTrigger(item: dkItemOptions) {
	emit("itemTrigger", item);
}
</script>
<template>
	<div class="dk-form" ref="ref">
		<el-form
			:class="`${props.draggableClassName}`"
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
</style>
