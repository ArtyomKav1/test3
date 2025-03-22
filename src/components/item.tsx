import { itemType } from "../api/api"

function Item(props: { item: itemType }) {
    return (
        <>
            <div className=" flex pt-[20px]">
                <div className="w-[99px] h-[74px] pt-[25px] mr-[15px]"><img src={props.item.urlToImage} width={99} height={74} alt="erroe api image" /></div>
                <div className="flex flex-col flex-1 gap-[5px]">
                    <div className="text-[#096FFA] text-[14px] font-extrabold">{props.item.source.name}</div>
                    <div className="text-[#000000] text-[16px] ">{props.item.title}</div>
                    <div className="text-[#6D787A] text-[14px] ">{props.item.publishedAt}</div>
                </div>
            </div>
        </>
    )
}
export default Item
