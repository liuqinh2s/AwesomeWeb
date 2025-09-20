import { category } from '../../data'
import { CategoryBar } from "../../components/CategoryBar/CategoryBar";

export const MusicPage = () => {
  return <>
    <CategoryBar list={category} index={2}></CategoryBar>
  </>
}