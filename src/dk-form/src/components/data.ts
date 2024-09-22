import { ref } from "vue";
import { dkItemOptions } from "../type";
/**public ref */
export const pRef = ref([]);
/**设置ref */
export const setRef = (ref: any, key: string) => {
    pRef.value[key] = ref;
};

export const changeBindValueOfKey = (item: Partial<dkItemOptions>, vModel: any, value) => {
    if (item.changeBindValueOfKey) {
        item.changeBindValueOfKey(value)
        vModel[String(item.prop)] = value
    }
}
