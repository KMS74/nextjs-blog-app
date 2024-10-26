import Layout from "../../../components/layout";
import { getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";
import utilStyles from "../../../styles/utils.module.css";
import { de } from "date-fns/locale";

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

/*

import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    // any paths not returned by getStaticPaths will result in a 404 page.
    // This option is useful if you have a small number of paths to create, or new page data is not added often.
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
    
    */
