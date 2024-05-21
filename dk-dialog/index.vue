<script setup lang="ts">
import { Ref, onMounted } from "vue";
import { dkDialog, store } from "./rander";
type propType = {
	store: any[];
};
const props = withDefaults(defineProps<propType>(), {
	store: "" as any,
});
onMounted(() => {
	store.value = props.store;
});
</script>
<template>
	<div class="dkDialog">
		<component :is="dkDialog()" />
	</div>
</template>
<style lang="scss" scoped>
.dkDialog {
	height: 100%;
	width: 100%;
}
</style>
