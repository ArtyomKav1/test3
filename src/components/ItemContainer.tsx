import { itemType } from "../api/api"
import Item from "./item"
function ItemContainer(props: {itemArray: Array<itemType>}) {
    return (
        <>
            <div className="px-[20px] py-[10px]">
                <div className="text-[18px] font-bold">{props.itemArray[0] && props.itemArray[0].publishedAt.slice(0, 10)}</div>
                <div>
                    {
                        props.itemArray.map((item) => (<div><Item item={item} /></div>))
                    }
                </div>
            </div>
        </>
    )
}
export default ItemContainer
