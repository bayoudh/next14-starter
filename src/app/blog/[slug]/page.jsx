import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
    
  const post = await getPost(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/19342868/pexels-photo-19342868/free-photo-of-rhume-froid-neige-voitures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          fill 
          className={styles.img} 
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
            width={50} 
            height={50} 
            src="https://images.pexels.com/photos/19342868/pexels-photo-19342868/free-photo-of-rhume-froid-neige-voitures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className={styles.avatar} 
          />
          {post && (
            <Suspense fallback={<div>Loading.......</div>}>
              <PostUser userid={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
