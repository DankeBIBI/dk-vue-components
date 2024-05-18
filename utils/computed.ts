export function vRef<T>(value: { value: T } | any):T {
	return value.value ? value.value : value;
}
