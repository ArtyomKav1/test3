import x from "../assets/x.svg"


function Popap(props: { setPopap: (arg: boolean) => void }) {
    return (
        <>
            <div className="w-screen h-screen flex items-center relative">
                <div className="absolute right-[20px] top-[20px] pointer cursor-pointer" onClick={()=>props.setPopap(false)}><img src={x} alt="" /></div>
                <div className=" flex flex-col gap-[28px] px-[20px] text-[22px] font-bold text-[#000000] ">
                    <div>SCIENCE</div>
                    <div>GENERAL</div>
                    <div>ENTERTAINMENT</div>
                    <div>TECHNOLOGY</div>
                    <div>BUSINESS</div>
                    <div>HEALTH</div>
                    <div>SPORTS</div>
                </div>
            </div>
        </>
    )
}

export default Popap
