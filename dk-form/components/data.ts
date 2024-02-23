import { ref } from "vue";
/**public ref */
export const pRef = ref([]);
/**设置ref */
export const setRef = (ref: any, key: string) => {
	pRef.value[key] = ref;
};
