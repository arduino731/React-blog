import BlogList from "./BlogList";
import useFetch from "./useFetch";
import file from "./data/db.json";

// const {file2} = file;
console.log(file.blogs);

const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs')
  const { error, isPending, data: blogs } = useFetch(file.blogs);

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
