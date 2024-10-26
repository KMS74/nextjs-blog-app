import Layout from "../../../components/layout";
import { getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";
import utilStyles from "../../../styles/utils.module.css";

export async function generateMetadata({ params }, parent) {
  const id = (await params).id;

  const post = await getPostData(id);

  return {
    title: post.title,
    description: "This is a post on the blog site",
  };
}

const PostPage = async ({ params }) => {
  const id = (await params).id;
  const postData = await getPostData(id);

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