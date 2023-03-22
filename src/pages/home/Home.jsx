import { Link } from 'react-router-dom'
import Product from '../product/Product'

export default function Home() {
  return (
    <>
        <Link to="/account/login">로그인</Link>
        <Product />
    </>
  )
}
