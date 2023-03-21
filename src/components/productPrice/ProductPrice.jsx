import React from 'react'
import { Price } from "./productPrice.style"

export default function ProductPrice({price}) {
  return (
    <Price>{price.toLocaleString()}원</Price>
  )
}
