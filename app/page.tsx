import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        My Portfolio
      </h1>
      <p className='mb-4'>
        {`I'm a New York based software engineer with two years of experience working at pre-seed and seed-stage startups. I have a background in the hospitality industry `}
      </p>
      <div className='my-8'>
        <BlogPosts />
      </div>
    </section>
  );
}
