import { useStateContext } from '../contexts/StateGif';
import GifBox from './GifBox';
import Loading from './Loading';

const GifBoxes = () => {
  const { isLoading, giphData } = useStateContext();
  return (
    <>
      {console.log(isLoading)}
      {isLoading ? (
        <Loading />
      ) : (
        <section className="grid gap-5 container my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {giphData?.map((gif: any) => (
            <GifBox key={gif.id} gif={gif} />
          ))}
        </section>
      )}
    </>
  );
};

export default GifBoxes;
