import Header from './components/Header';
import './App.css';
import Card from './components/Card';
import { posts } from './posts';

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap justify-center gap-4 px-2 py-8 md:px-0">
        {posts.map((post) => {
          return <Card key={post.id} {...post} />;
        })}
      </div>
    </>
  );
}

export default App;
