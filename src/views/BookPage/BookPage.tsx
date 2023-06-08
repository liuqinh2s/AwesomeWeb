import { useParams } from "react-router-dom";
import { book, category } from "../../data";
import { CategoryBar } from "../../components/CategoryBar/CategoryBar";
import {EBook} from '../../components/EBook/EBook';

export const BookPage = () => {
  const param = useParams() || {};
  return (
    <>
      <CategoryBar list={category} index={1}></CategoryBar>
      <EBook source={book[(param.id || 0) as number].source}></EBook>
    </>
  );
};
