import { useStateContext } from '../contexts/StateGif';

const GifBox = ({ gif }: { gif: any }) => {
  // const [giphData, fetchData] = useStateContext();
  return (
    <article className="p-3 shadow-sm rounded-sm bg-white">
      <img
        className="w-full h-full object-cover rounded-sm"
        src={gif?.images?.downsized?.url}
        alt={gif?.title}
        loading="lazy"
      />

      {/* {console.log(giphData?.images?.downsized?.url)} */}
    </article>
  );
};

export default GifBox;
