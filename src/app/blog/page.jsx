import PostCart from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data";
//FATCH DATA WIT API
/*const getData = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}});
    if(!res.ok){
        throw new Error("Something went wromg");
    }
    return res.json();
};*/
const BlogPage = async () => {

    // FETCH DATA WITH AN API
  //  const posts = await getData();
  
    // FETCH DATA WITh AN API
    // const posts = await getPosts();
    //FATCH DATA Without api
   const posts= await getPosts();
    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCart post={post} />
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogPage;