import { ElMessage } from "element-plus";

export function showTip(
	message,
	type: "success" | "warning" | "info" | "error"
) {
	ElMessage({
		message,
		type: type ?? "success",
	});
}
