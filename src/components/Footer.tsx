import NewsApi from "../assets/NewsApi.svg";
function Footer() {
  return (
    <>
      <div className="pt-[30px] flex flex-col items-center text-[12px] text-[#000000]">
        <div className="flex gap-[20px] justify-center ">
          <div>Log In</div>
          <div>About Us</div>
          <div>Publishers</div>
          <div>Sitemap</div>
        </div>

        <div className="pt-[35px] flex flex-col items-center gap-[10px]">
          <div>Powered by</div>
          <div>
            <img src={NewsApi} alt="NewsApi" />
          </div>
        </div>

        <div className="pt-[30px] pb-[20px]">
          © 2023 Besider. Inspired by Insider
        </div>
      </div>
    </>
  );
}

export default Footer;
