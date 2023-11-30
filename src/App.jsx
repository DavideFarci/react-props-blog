import Header from './components/Header';
import './App.css';
import Card from './components/Card';
import { posts } from './posts';
import AllTags from './components/AllTags';

function App() {
  return (
    <>
      <Header />
      <AllTags posts={posts} />
      <div className="container mx-auto grid grid-cols-1 gap-8 px-2 py-8 md:grid-cols-2  lg:grid-cols-3">
        {posts.map((post) => {
          return <Card key={post.id} {...post} />;
        })}
      </div>
    </>
  );
}

export default App;
