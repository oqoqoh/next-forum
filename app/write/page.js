//
export default function Write() {
  return (
    <div className="post-form">
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title" />
        <textarea name="content" row="15" cols="40" placeholder="content" />
        <button type="submit">post</button>
      </form>
    </div>
  );
}
