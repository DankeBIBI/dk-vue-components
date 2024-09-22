import { ref } from "vue";
import { dkTableBtns, dkTableOptionsCallback } from "../type";


export const size = ref<"large" | "default" | "small">("default");
/**默认的按钮组 */
export const defaultBtn = (options: Partial<dkTableOptionsCallback>) => {
    return [
        {
            text: '增加',
            type: 'primary',
            trigger: options.add,
        }
    ] as dkTableBtns[]
}