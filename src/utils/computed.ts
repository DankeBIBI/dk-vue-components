import { ref } from "vue"
export function vRef<T>(value: { value: T } | any): T {
    return value.value ? value.value : value;
}
type checkIsMobileDto = boolean | string | number
export const isMobile = ref<boolean>(false)
/**
 * 检测是否为移动端 返回是否为移动端一个布尔值①
 * 当存在回调函数时，回调函数的参数为①，此时返回回调函数的返回值
 * @example
 * 普通使用
 * checkIsMobile() = true | false
 * 存在回调函数
 * checkIsMobile((e) => {
 * // e = true | false
 *    return  'test'
 * }) = 'test'
 * 
 *     
*/
export const checkIsMobile = (callback?: (e: boolean) => any): boolean => {
    const __isMobile = window.innerWidth < 768;
    if (isMobile.value != __isMobile && callback) return callback(__isMobile)
    isMobile.value = __isMobile
    return __isMobile
} 