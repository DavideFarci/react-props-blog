function TagsList({ tags }) {
  const colorMap = {
    'sviluppo-web': 'bg-green-800',
    html: 'bg-red-500',
    css: 'bg-blue-500',
    'front-end': 'bg-orange-500',
    'back-end': 'bg-black',
    js: 'bg-yellow-600',
    framework: 'bg-purple-600',
  };
  return (
    <ul className="mb-3">
      {tags.map((tag, i) => {
        return (
          <li
            key={i}
            className={`mr-3 inline px-2 py-1 text-white ${colorMap[tag]}`}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
  // return (
  //   <ul className="mb-3">
  //     {tags.map((tag, i) => (
  //       <li key={i} className={`mr-3 inline px-2 py-1 text-white`}>
  //         {tag}
  //       </li>
  //     ))}
  //   </ul>
  // );
}

const Card = ({ title, image, published, content, tags }) => {
  return (
    <div
      className={`${
        !published && 'hidden'
      } card rounded-md border border-green-800 bg-green-700 font-mono text-white shadow-md shadow-green-800 lg:max-w-md`}
    >
      <div className="flex items-center justify-center p-2">
        <img
          className="max-h-[300px]"
          src={image ? image : 'https://picsum.photos/400/300'}
          alt="imgCard"
        />
      </div>
      <div className="p-3">
        <h1 className="my-2 text-lg font-bold">{title}</h1>
        <p className="mb-3 text-sm">{content}</p>
        <TagsList tags={tags}></TagsList>
        <button className="btn-primary">More</button>
      </div>
    </div>
  );
};

export default Card;
