import { Menu } from "@element-plus/icons-vue"
import { Route } from '@/route'
import { DKID } from 'strap-trousers'
/**菜单 */
export const MenuRander = (item: routeListDto, index: number) => (
    <>
        {
            item.children && item.children.length > 0 ?
                subMenuRander(item, index)
                :
                menuItemRander(item, index)
        }
    </>
)
/**菜单项 */
const menuItemRander = (item: routeListDto, index: number, is_sub?: any) => (
    <>
        <el-menu-item key={index}
            index={is_sub ? index + '-' + 1 : index + 1}
            onClick={() => Route.push(item.path)}>
            {
                {
                    title: () => (
                        <>
                            <span>{item?.meta?.title}</span>
                        </>
                    ),
                    default: () => (
                        <>
                            <el-icon>
                                <Menu />
                            </el-icon>
                        </>
                    )
                }
            }
        </el-menu-item>
    </>
)
/**可展开菜单 */
const subMenuRander = (item: routeListDto, index: number) => (
    <>
        {
            <el-sub-menu
                key={index}
                index={index + 1}
            >
                {
                    {
                        title: () => (
                            <>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span onClick={() => Route.push(item.path)}>{item?.meta?.title}</span>
                            </>
                        ),
                        default: () => (
                            <>
                                {
                                    item.children && item.children.length > 0 && item.children.map((sub_item, sub_index) => {
                                        return (
                                            <>
                                                {
                                                    sub_item.children && sub_item.children.length > 0 ?
                                                        subMenuRander(sub_item, sub_index)
                                                        :
                                                        menuItemRander(sub_item, sub_index, 1)
                                                }
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                }
            </el-sub-menu>
        }

    </>
)