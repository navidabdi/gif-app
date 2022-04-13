import { useStateContext } from '../contexts/StateGif';

const GifBox = ({ gif }: { gif: any }) => {
  // const [giphData, fetchData] = useStateContext();
  return (
    <article className="p-4 shadow-sm rounded-sm bg-white flex flex-col gap-4">
      <img
        className="w-full h-full object-cover rounded-sm"
        src={gif?.images?.fixed_height?.webp}
        alt={gif?.title}
        loading="lazy"
      />

      <div className="flex gap-2 items-center">
        {gif?.user?.avatar_url ? (
          <img
            className="object-cover w-10 h-10 rounded-full overflow-hidden border bg-blue-100"
            src={gif?.user?.avatar_url}
            alt={gif?.user?.username}
          />
        ) : (
          <div className="object-cover w-10 h-10 flex justify-center items-center rounded-full overflow-hidden border bg-blue-100">
            <p className="font-bold text-blue-500 text-lg">
              {gif?.user?.username
                ? gif?.user?.username[0].toUpperCase()
                : ':)'}
            </p>
          </div>
        )}
        <p className="text-gray-600">
          {gif?.user?.username ? gif?.user?.username : 'Unkown User'}
        </p>
      </div>
    </article>
  );
};

export default GifBox;
