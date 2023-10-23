import { game, category } from "../../data";
import { useParams } from "react-router-dom";
import { CategoryBar } from "../../components/CategoryBar/CategoryBar";

export const GamePage = () => {
  const param = useParams() || {};
  return <>
    <CategoryBar list={category} index={6}></CategoryBar>
    <iframe src={game[(param.id || 0) as number].source} style={{ width: '100vw', height: 'calc(100vh - 129px)', borderWidth: '0px'}}></iframe>
  </>
}