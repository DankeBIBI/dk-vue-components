export function vRef<T>(value: { value: T } | any) {
	return value.value ? value.value : value;
}
