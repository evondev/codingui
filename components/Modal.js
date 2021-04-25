import React from "react";
import styled, { css } from "styled-components";

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 10000;
  display: flex;
  align-items: ${(props) => (props.top ? "flex-start" : "center")};
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  & > div {
    width: 100%;
    max-width: ${(props) => props.maxWidth || "1200px"};
    margin: 0 auto;
    max-height: 80vh;
    overflow-y: auto;
    height: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #eee;
    padding: ${(props) => props.padding || null};
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .btn__close-modal {
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    background-color: #ecf0ff;
    z-index: 99;
    @media screen and (max-width: 767px) {
      top: 5px;
      right: 5px;
    }
  }
  .modal-heading {
    color: #ff6bcb;
    font-weight: bold;
    font-size: 25px;
    @media screen and (max-width: 1023px) {
      font-size: 20px;
    }
  }

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
      & > div {
        margin-top: ${(props) => (props.top ? "150px" : "0")};
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        box-sizing: border-box;
        position: relative;
      }
    `};
`;

const Modal = ({
  showModal,
  hideModal,
  modalRef,
  children,
  maxWidth,
  padding,
  modalClassName = "",
  className,
}) => {
  return (
    <ModalStyles
      open={showModal}
      maxWidth={maxWidth}
      padding={padding}
      className={modalClassName}
    >
      <div className={className} ref={modalRef}>
        <i className="fa fa-times btn__close-modal" onClick={hideModal}></i>
        {children}
      </div>
    </ModalStyles>
  );
};

export default Modal;
