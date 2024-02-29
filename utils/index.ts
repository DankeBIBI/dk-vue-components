import { ElMessage } from "element-plus";
function showPop() {}

export function showTip(
	message,
	type: "success" | "warning" | "info" | "error"
) {
	ElMessage({
		message,
		type: type ?? "success",
	});
}
export * from './rule'
export * from './computed'