<script setup lang="ts">
import { dkDialog } from "./rander";
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
