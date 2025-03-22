import x from "../assets/x.svg";
const popupMenu = [
  "SCIENCE",
  "GENERAL",
  "ENTERTAINMENT",
  "TECHNOLOGY",
  "BUSINESS",
  "HEALTH",
  "SPORTS",
];
function Popup(props: { setPopup: (arg: boolean) => void }) {
  return (
    <>
      <div className="w-screen h-screen flex items-center relative">
        <div
          className="absolute right-[20px] top-[20px] pointer cursor-pointer"
          onClick={() => props.setPopup(false)}
        >
          <img src={x} alt="" />
        </div>
        <div className=" flex flex-col gap-[28px] px-[20px] text-[22px] font-bold text-[#000000] ">
          {popupMenu.map((item: string) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Popup;
