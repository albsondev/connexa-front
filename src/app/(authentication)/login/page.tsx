import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import LoginForm from '@/app/(authentication)/login/login'
import { SearchParams } from '@/types/next'
import { getDictionary } from '@/locales/dictionary'
import Image from 'next/image'
import loginImage from '@/../public/assets/login/svg-login.svg'
import brandConnexa from '@/../public/assets/brand/logo-connexa-api.png'

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { callbackUrl } = searchParams
  const dict = await getDictionary()

  const getCallbackUrl = () => {
    if (!callbackUrl) {
      return '/'
    }

    return callbackUrl.toString()
  }

  return (
    <Row className="d-flex align-items-center justify-content-between content-login">
      <Col xs={12} md={8} className="mx-auto my-auto login-form">
        <div className="text-center text-dark">
          <Image
            src={brandConnexa}
            alt="Brand"
            style={{
              maxWidth: '40%',
              height: 'auto',
              marginBottom: '1.75em',
            }}
          />
          <h1>{dict.login.title}</h1>
          <p className="text-secondary mb-5">{dict.login.description}</p>
        </div>
        <LoginForm callbackUrl={getCallbackUrl()} />
      </Col>
      <Col xs={12} md={4} className="d-none d-md-block login-sign">
        <div className="text-center">
          <Image src={loginImage} alt="Login" width={200} height={200} />
          <h2>{dict.login.signup.title}</h2>
          <p>{dict.login.signup.description}</p>
          <Link className="btn btn-lg btn-outline-light mt-3" href="/register">
            {dict.signup.register_now}
          </Link>
        </div>
      </Col>
    </Row>
  )
}
