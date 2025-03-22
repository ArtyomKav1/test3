import stick from "../assets/stick.svg";

function Header(props: { setPopup: (arg: boolean) => void }) {
  return (
    <>
      <div className="flex justify-center relative h-[72px] items-center border-b-[1px] border-[#D9D9D9]">
        <div
          className="absolute w-[20px] h-[16px] left-[20px] flex flex-col gap-[4px] cursor-pointer"
          onClick={() => props.setPopup(true)}
        >
          <div>
            <img src={stick} alt="" />
          </div>
          <div>
            <img src={stick} alt="" />
          </div>
          <div>
            <img src={stick} alt="" />
          </div>
        </div>
        <div className="text-[24px] font-bold text-[#000000] tracking-[10%]">
          BESIDER
        </div>
      </div>
    </>
  );
}

export default Header;
