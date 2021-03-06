import { useEffect } from "react"
import Head from "next/head"

import Button from "components/Button"
import GitHub from "components/Icons/Github"
import Logo from "components/Icons/Logo"

import { colors } from "styles/theme"

import { loginWithGithub } from "../firebaseConfig/client"
import { useRouter } from "next/router"
import useUser, { USER_STATES } from "hooks/useUser"

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGithub().catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>devter ð¦</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Logo width="100" />
        <h1>Devter</h1>
        <h2>
          Talk about development
          <br /> with developers ð©âð»ð¨âð»
        </h2>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GitHub fill="#fff" width={24} height={24} />
              Login with GitHub
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && <img src="/spinner.gif"></img>}
        </div>
      </section>

      <style jsx>
        {`
          img {
            width: 120px;
          }

          div {
            margin-top: 16px;
          }

          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }

          h1 {
            color: ${colors.primary};
            font-weight: 800;
            font-size: 32px;
            margin-bottom: 16px;
          }

          h2 {
            color: ${colors.secondary};
            font-ð¸ize: 21px;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
