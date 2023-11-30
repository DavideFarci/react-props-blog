import { posts } from '../posts';

const arrTags = [];

// Ciclo su i post per recuperare tutti i tag
posts.map((post) => {
  arrTags.push(post.tags);
});

// Ottengo un array con tutti i singoli tag come elementi dell'array
const flatArr = arrTags.flat().map(String);

// Elimino i tag ripetuti
const finalTags = [...new Set(flatArr)];

const colorMap = {
  'sviluppo-web': 'bg-green-800',
  html: 'bg-red-500',
  css: 'bg-blue-500',
  'front-end': 'bg-orange-500',
  'back-end': 'bg-black',
  js: 'bg-yellow-600',
  framework: 'bg-purple-600',
};

const AllTags = () => {
  return (
    <div>
      <ul className="flex justify-center gap-4 py-8">
        {finalTags.map((tag, i) => {
          return (
            <li
              className={`mr-3 rounded-xl px-2 py-0.5 text-sm font-semibold text-white shadow-md ${colorMap[tag]}`}
              key={i}
            >
              <a href="#">{tag}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTags;
