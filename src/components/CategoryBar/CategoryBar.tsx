import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryBar.less";

interface ICategoryBar {
  index: number; // 选中哪个分类
  list: Array<{ title: string; path: string }>; // 分类列表
}

export const CategoryBar = (props: ICategoryBar) => {
  const { list, index } = props;
  const navigate = useNavigate();
  const [_index, setIndex] = useState(index);
  const li = () => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      const { title, path } = list[i];
      res.push(
        <li
          key={i}
          className={i === _index ? "active" : ""}
          onClick={() => {
            setIndex(i);
            navigate("/" + path);
          }}
        >
          {title}
        </li>
      );
    }
    return res;
  };
  return (
    <>
      <ul className="category">{li()}</ul>
    </>
  );
};
