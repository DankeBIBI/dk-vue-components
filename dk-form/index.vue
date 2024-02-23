<script setup lang="ts">
import { DKID } from "strap-trousers";
import { onMounted, ref, reactive } from "vue";
import { getComponent } from "./components/export.t";
import { buildFormRule, buildFormModel } from "./utils/rule";
import { pRef } from "./components/data";
type propsType = {
	options: dkFormOptions;
	formSize: "" | "large" | "default" | "small";
};
const props = withDefaults(defineProps<propsType>(), {
	options: () => [] as dkFormOptions,
	formSize: "default",
});
const formModel = reactive(buildFormModel(props.options));
const ruleFormRef = ref<any>(null);
const rules = ref(buildFormRule(props.options));
onMounted(() => {
});
defineExpose({ formModel, ruleFormRef, pRef });
</script>
<template>
	<div class="dk-form">
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
