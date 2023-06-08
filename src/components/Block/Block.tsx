import { ISimpleCard, SimpleCard } from "../Card/SimpleCard";
import "./Block.less";

interface IBlock {
  data: ISimpleCard[];
}

export const Block = (props: IBlock) => {
  const { data } = props;
  const html = () => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      res.push(
        <div key={i} className="card-wrap">
          <SimpleCard
            name={data[i].name}
            cover={data[i].cover}
            score={data[i].score}
            id={i + ""}
          ></SimpleCard>
        </div>
      );
    }
    return res;
  };
  return (
    <>
      <div className="block">{html()}</div>
    </>
  );
};
