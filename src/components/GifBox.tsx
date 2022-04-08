import { useStateContext } from '../contexts/StateGif';

const GifBox = () => {
  const [giphData, fetchData] = useStateContext();
  return (
    <article className="container">
      <div>box</div>
      {console.log(giphData)}
    </article>
  );
};

export default GifBox;
