import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('localhost:3000/blogs')
  // const { error, isPending, data: blogs } = useFetch('https://my-json-server.typicode.com/arduino731/React-portfolio/blogs')
  // const { error, isPending, data: blogs } = useFetch('https://arduino731.github.io/data/db.json')
  const { error, isPending, data: blogs } = useFetch("./data/db.json");
  

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
