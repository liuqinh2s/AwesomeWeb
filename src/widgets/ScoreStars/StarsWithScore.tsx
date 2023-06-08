import { Stars } from "./Stars";

interface IStarsWithScore {
  score: number; // 评分
}

export const StarsWithScore = (props: IStarsWithScore) => {
  const { score } = props;
  return (
    <>
      <div>
        <Stars score={score}></Stars>
        <span style={{ color: "#ffac2d" }}>
          {Number(score / 10).toFixed(1)}
        </span>
      </div>
    </>
  );
};
