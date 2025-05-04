import { redirect, useLoaderData, useParams } from "react-router";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { Route } from "./+types/[slug]";

export async function loader({ params }: Route.LoaderArgs) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw redirect("/blog", { status: 404 });
  }

  return {
    post,
  };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data.post.title} | Nelan` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PostDetail() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <section>
      <div className="py-10 text-center">
        <h2 className="font-semibold text-3xl leading-relaxed">{post.title}</h2>
        <p>{post.date.getFullYear()}</p>
      </div>
      <div className="my-8">
        <img
          src={post.cover}
          alt={post.title}
          className="rounded-md"
          decoding="async"
          loading="eager"
        />
      </div>
      <article className="prose dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:underline max-w-2xl mx-auto">
        <MDXContent
          code={post.mdx}
          components={{
            code: ({ children, inline, className, ...props }) => {
              const hasLang = /language-(\w+)/.exec(className || "");
              return !inline && hasLang ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={hasLang[1]}
                  PreTag="div"
                  className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                  showLineNumbers={true}
                  useInlineStyles={true}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props} />
              );
            },
          }}
        />
      </article>
    </section>
  );
}
