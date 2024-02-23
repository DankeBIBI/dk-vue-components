import { __dkFormOptions, __dkItemOptions } from "../type";

/**生成校验规则 */
export function buildFormRule(options: __dkFormOptions) {
	let rule = {};
	// [
	//     { required: true, message: 'Please input Activity name', trigger: 'blur' },
	//     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
	//   ],
	let list = options.filter((item: __dkItemOptions) => item.required);

	if (list.length == 0) return [];
	options.forEach((item: __dkItemOptions) => {
		rule[item.prop] = [
			{ required: true, message: `请输入${item.title}`, trigger: "blur" },
		];
	});
	return rule;
}

/**生成表单model */
export function buildFormModel(options: __dkFormOptions) {
	let model = {};
	options.forEach((item: __dkItemOptions) => {
		if (item.type == "checkbox" || item.type == "upload")
			model[item.prop] = item.content ?? [];
		else model[item.prop] = item.content ?? "";
	});
	console.log("🚀 -- 》》 ~ model:", model)
	return model;
}
