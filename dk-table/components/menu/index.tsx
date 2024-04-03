import { Operation, Plus, Refresh, Select, SemiSelect } from "@element-plus/icons-vue";
import { dkTableColumn } from "../../type";
import { Ref } from "vue";

export default (option: {
    init: Function,
    size: string,
    setSize: (size: string) => void,
}) => (
    <>
        <div class="dkTable_menuBar_layout fx_y" >
            <div class="dkTable_menuBar_layout_btn am_">
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
                                        <el-dropdown-item icon={option.size == 'large' ? Select : SemiSelect} onClick={() => option.setSize('large')}>large</el-dropdown-item>
                                        <el-dropdown-item icon={option.size == 'default' ? Select : SemiSelect} onClick={() => option.setSize('default')}>default</el-dropdown-item>
                                        <el-dropdown-item icon={option.size == 'small' ? Select : SemiSelect} onClick={() => option.setSize('small')}>small</el-dropdown-item>
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

