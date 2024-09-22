// import Input from "./input/index.vue";
import Input from "./input";
import Radio from "./radio";
import Select from "./select";
import checkbox from "./checkbox";
import date from "./date";
import upload from "./upload";
import { dkItemOptions } from "../type/index";
export { Input, Radio, Select, checkbox };
export function getComponent(item: dkItemOptions, ruleForm: any) {
    const ComponentMap = {
        input: Input,
        radio: Radio,
        select: Select,
        checkbox: checkbox,
        date: date,
        month: date,
        year: date,
        upload: upload
    };
    return ComponentMap[item.type](item, ruleForm);
}
