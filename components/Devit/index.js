import Avatar from "components/Avatar"

export default function Devit({ avatar, username, content, createdAt, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span> · </span>
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>
        {`
          article {
            border-bottom: 1px solid #eee;
            display: flex;
            padding: 10px 15px;
          }

          div {
            padding-right: 4px;
          }

          p {
            margin: 0;
          }

          date {
            color: #555;
            font-size: 14px;
          }
        `}
      </style>
    </>
  )
}
