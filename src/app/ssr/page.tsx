export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });

  const post = await res.json();

  return (
    <div>
      <h1>SSR</h1>
      <p>{post.title}</p>
      <p>{new Date().toISOString()}</p>
    </div>
  );
}
