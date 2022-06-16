import AppLayout from "components/AppLayout"
import Devit from "components/Devit"
import useUser from "hooks/useUser"

import { fetchLatestDevits } from "firebaseConfig/client"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ createdAt, content, id, userId, username, avatar }) => {
              return (
                <Devit
                  avatar={avatar}
                  createdAt={createdAt}
                  id={id}
                  key={id}
                  content={content}
                  username={username}
                  userId={userId}
                />
              )
            }
          )}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}
