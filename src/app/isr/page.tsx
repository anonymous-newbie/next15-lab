export const revalidate = 10;

export default async function ISRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  const post = await res.json();

  return (
    <div>
      <h1>ISR</h1>
      <p>{post.title}</p>
      <p>{new Date().toISOString()}</p>
    </div>
  );
}
