import type { FormInstance, UploadUserFile } from "element-plus";
/**dk表单类型 */
type dkFormOptions = dkItemOptions[];


/**dk表单项类型 */
interface dkItemOptions {
    /**字段 */
    prop: string;
    /**标题 */
    title: string;
    /**默认内容 */
    content: any;
    /**是否必填 */
    required?: boolean;
    /**dk表单项类型 */
    type: dkItemType;
    /**选项 */
    selectOptions?: dkItemSelectOptions[];
    placeholder?: string;
    /**可选配置 */
    options?: {
        /**是否禁用 */
        disabled?: boolean;
    };
    /**触发器 */
    trigger?: {
        /**当绑定值改变时 */
        change?: (e: {
            /**选中的值 */
            value: string | number;
            /**选项的内容 */
            item: any;
        }) => any;
    };
    /**上传配置 */
    upload?: {
        /**上传地址 */
        url: string;
        /**文件列表（预览） */
        file_list: UploadUserFile[];
        /**限制长度 */
        limit: number;
        /**接口返回图片的地址？ */
        response: (e) => string;
        /**上传附带的数据 */
        data: any
    };
    /**尺寸 */
    size?: "" | "large" | "default" | "small";
    style?: string

    /**拖拉拽 */
    name?: string
    id?: string
    isClone?: boolean
    children?: dkFormOptions
    sourceTarget?: boolean
    changeBindValueOfKey?: (e) => void
}
type dkItemType =
    /**输入框 */
    | "input"
    /**单选框*/
    | "radio"
    /**多选框 */
    | "checkbox"
    /**下拉选择 */
    | "select"
    /**日期选择 */
    | "date"
    /**月份选择 */
    | "month"
    /**年份选择 */
    | "year"
    /**上传 */
    | "upload";
/**dk表单项选项 */
interface dkItemSelectOptions {
    /**选中值 */
    label: string | number;
    /**显示值 */
    value: string | number;
}
/**表单实例 */
interface dkFormRef {
    formModel: any;
    ruleFormRef: FormInstance;
    pRef: any[];
}
/**表单配置 */
type dkFormPropsType = {
    options: dkFormOptions;
    formSize: "" | "large" | "default" | "small";
    ref: any;
    sourceTarget: boolean;
    draggableClassName: string;
    row?: number;
};
export type {
    dkFormOptions,
    dkItemOptions,
    dkItemSelectOptions,
    dkItemType,
    dkFormRef,
    dkFormPropsType
};
