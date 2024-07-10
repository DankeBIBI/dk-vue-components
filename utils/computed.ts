export function vRef<T>(value: { value: T } | any):T {
	return value.value ? value.value : value;
}
/**检测是否为移动端 */
export const checkIsMobile = (): boolean => {
    return window.innerWidth < 768;
}