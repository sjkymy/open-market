import { Container, LoginTit, LoginForm, LinkGroup, JoinLink } from "./login.style";
import { Inp } from "../../../components/userInput/Inp"
import { Button } from "../../../components/button/Button"

export default function Login() {
  return (
    <Container>
      <LoginTit>로그인</LoginTit>
      <LoginForm>
        <Inp type="email" placeholder="이메일 계정"/>
        <Inp type="password" placeholder="비밀번호"/>
        <Button
          type="button"
          className="large"
        >로그인</Button>
      </LoginForm>
      <LinkGroup>
        <JoinLink to="../join">회원가입</JoinLink>
        <JoinLink to="#" className="divide">비밀번호 찾기</JoinLink>
      </LinkGroup>
    </Container>
  )
}
