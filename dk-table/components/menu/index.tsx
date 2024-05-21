import { Operation, Refresh, Select, SemiSelect } from "@element-plus/icons-vue";
import { defaultBtn, size } from "../data";
import { vRef } from "../../../utils/computed";
import { dkTableBtns, dkTableInit } from "../../type";
import { DKID } from "strap-trousers";
export default (option: {
    init: (e?: dkTableInit) => any,
    add: (e?: any) => any,
    setSize: (size: string) => void,
    btns: dkTableBtns[]
}) => (
    <>
        <div class="dkTable_menuBar_layout fx_y" >
            <div class="dkTable_menuBar_layout_btn  am_">
                {
                    vRef<dkTableBtns[]>(defaultBtn({
                        init: option.init,
                        add: option.add
                    })).concat(option.btns).map((item, index) => {
                        return (
                            <el-button size={size.value} type={item.type} onClick={item.trigger} key={index + DKID()}>
                                {
                                    item.text
                                }
                            </el-button>
                        )
                    })
                }
            </div>
            <div class="dkTable_menuBar_layout_btn mlAuto am_">
                <el-button link >
                    <el-icon onClick={() => option.init()}><Refresh /></el-icon>
                </el-button>
            </div>
            <div class="dkTable_menuBar_layout_btn am_">
                <el-dropdown trigger="click">
                    {
                        {
                            default: () => (
                                <div >
                                    <el-button link >
                                        <el-icon><Operation /></el-icon>
                                    </el-button>
                                </div>
                            ),
                            dropdown: () => (
                                <>
                                    <el-dropdown-menu>
                                        <el-dropdown-item icon={size.value == 'large' ? Select : SemiSelect} onClick={() => option.setSize('large')}>large</el-dropdown-item>
                                        <el-dropdown-item icon={size.value == 'default' ? Select : SemiSelect} onClick={() => option.setSize('default')}>default</el-dropdown-item>
                                        <el-dropdown-item icon={size.value == 'small' ? Select : SemiSelect} onClick={() => option.setSize('small')}>small</el-dropdown-item>
                                    </el-dropdown-menu>
                                </>
                            )
                        }
                    }
                </el-dropdown>
            </div >
        </div >
    </>
)

