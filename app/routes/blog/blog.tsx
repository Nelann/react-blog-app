import type { Route } from "./+types/blog";
import { allPosts } from "content-collections";
import { Link, useLoaderData } from "react-router";

export function loader({}: Route.LoaderArgs) {
  const posts = allPosts;
  return { posts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Nelan" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <section>
      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => (
          <Link
            key={post.title}
            to={`/blog/${post._meta.path}`}
            className="group flex flex-row items-start border border-foreground/5 hover:bg-foreground/5 dark:border-slate-200 dark:hover:bg-slate-200 p-1 hover:border-foreground/10 group rounded-md transition-all duration-200 ease-in-out gap-4"
            viewTransition
          >
            <img
              src={post.cover}
              className="aspect-square w-[60px] h-[60px] object-cover border border-foreground/5 shadow-sm rounded-md transition-all duration-200 ease-in-out group-hover:border-foreground/10 group-hover:bg-foreground/5 dark:border-slate-200 dark:group-hover:bg-slate-200"
            />
            <div>
              <h2 className="font-medium group-hover:text-zinc-800">
                {post.title}
              </h2>
              <p className="text-sm opacity-25 group-hover:text-zinc-700 group-hover:opacity-80">
                {post.date.getFullYear()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
