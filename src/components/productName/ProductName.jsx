import React from 'react'
import { PName } from "./productName.style"

export default function ProductName({product_name}) {
  return (
    <PName>{product_name}</PName>
  )
}
