export default async function SSGPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'force-cache',
  });

  const post = await res.json();

  return (
    <div>
      <h1>SSG</h1>
      <p>{post.title}</p>
      <p>{new Date().toISOString()}</p>
    </div>
  );
}
