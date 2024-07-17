import { dkFormOptions, dkItemOptions } from "../dk-form/type";
import { vRefType } from "../type";
import { vRef } from "."
/**生成校验规则 */
export function buildFormRule(options: vRefType<dkFormOptions>) {
    let rule = {};
    // [
    //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //   ],
    let list = vRef<dkFormOptions>(options).filter((item: dkItemOptions) => item.required);

    if (list.length == 0) return [];
    vRef<dkFormOptions>(options).forEach((item: dkItemOptions) => {
        /**当表单项没有被隐藏时 */
        if (!item.hidden) {
            rule[item.prop] = [
                { required: item.required, message: `请输入${item.title}`, trigger: "blur" },
            ];
        }
    });
    return rule;
}

/**生成表单model */
export function buildFormModel(options: vRefType<dkFormOptions>, formModel: Object) {
    let model = {};
    vRef<dkFormOptions>(options).forEach((item: dkItemOptions) => {
        /**当表单项没有被隐藏时 */
        if (!item.hidden) {
            if (item.type == "checkbox" || item.type == "upload")
                model[item.prop] = item.content ?? [];
            else model[item.prop] = item.content ?? "";
        }
    });
    if (formModel) {
        for (const k in model) {
            model[k] = formModel[k] ?? model[k];
        }
    }
    return model;
}
