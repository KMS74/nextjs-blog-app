import Layout from "../../../components/layout";
import { getPostData, getAllPostsIds } from "../../../lib/posts";
import Date from "../../../components/Date";
import utilStyles from "../../../styles/utils.module.css";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }, parent) {
  const id = (await params).id;

  const post = await getPostData(id);

  return {
    title: post.title,
    description: "This is a post on the blog site",
  };
}

export async function generateStaticParams() {
  const paths = getAllPostsIds();
  return paths;
}

const PostPage = async ({ params }) => {
  const id = (await params).id;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default PostPage;
