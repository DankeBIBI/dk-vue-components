<script setup lang="ts">
import { DKID } from "strap-trousers";
import { onMounted, ref, reactive, watchEffect } from "vue";
import { getComponent } from "./components/export.t";
import { buildFormModel, buildFormRule } from "../utils/rule";
import { pRef } from "./components/data";
import { dkFormOptions } from "./type";
type propsType = {
	options: dkFormOptions;
	formSize: "" | "large" | "default" | "small";
	ref: any;
};
const props = withDefaults(defineProps<propsType>(), {
	options: () => [] as dkFormOptions,
	formSize: "default",
	ref: "" as any,
});
const formModel = reactive(buildFormModel(props.options));
const ruleFormRef = ref<any>(null);
const rules = ref(buildFormRule(props.options));
onMounted(() => {
	console.log(props);
});
defineExpose({ formModel, ruleFormRef, pRef });
// watchEffect(() => (props.ref = { formModel, ruleFormRef, pRef }));
</script>
<template>
	<div class="dk-form" ref="ref">
		<el-form
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
				<el-form-item :label="item.title" :prop="item.prop">
					<component
						:is="getComponent({ ...item, size: props.formSize }, formModel)"
					></component>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>
<style lang="scss" scoped>
@import "./style/index.scss";
</style>
