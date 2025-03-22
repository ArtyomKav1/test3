import ItemContainer from "./ItemContainer";
import { useEffect, useState } from "react";
import loader from "../assets/loader.svg";
import { getNews } from "../api/api";
import { AppStateType } from "../redux/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { ActionsDialogs } from "../redux/app-reducer";

function Main() {
  const [day, setDay] = useState(-1);
  const posts = useSelector((state: AppStateType) => state.app.posts);
  const dispath = useDispatch();
  useEffect(() => {
    const setPost = async function (date: string) {
      const data = await getNews(date);
      if (data.status === 200) {
        dispath(ActionsDialogs.addPosts(data.data.articles));
      } else {
        alert("server error");
      }
    };
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - day);
    const data = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate() - 1}`;
    setPost(data);
  }, [day]);
  const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setDay((prevDay) => prevDay + 1);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    const targetElement = document.getElementById("loader");
    if (targetElement) {
      observer.observe(targetElement);
    }
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        {posts.map((item) => (
          <div>
            <ItemContainer itemArray={item} />
          </div>
        ))}
        <div id="loader" className="flex justify-center py-[20px] h-[120px]">
          <img className="animate-spin" src={loader} alt="loader" />
        </div>
      </div>
    </>
  );
}
export default Main;
