import React from 'react'
import { Button } from '../button/Button'
import { ModalArticle } from './modal.style'

export default function Modal({children, closeText, confirmText, modalClose, modalConfirm}) {
  return (
    <ModalArticle>
      <button className="close_btn" onClick={modalClose}></button>
      <p className="modal_text">{children}</p>
      <div className="btn_group">
        <Button className="yes no" onClick={modalClose}>
          {closeText}
        </Button>
        <Button className="yes" onClick={modalConfirm}>
          {confirmText}
        </Button>
      </div>
    </ModalArticle>
  )
}
