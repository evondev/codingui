import React from "react";
import Template from "./Template";

const DatingForm = () => {
  return (
    <>
      <Template
        title="Dating Form"
        html={`
<div class="dating-app">
  <div class="dating__logo"><img src="https://image.ibb.co/nKu97x/heart.png" alt="dating app logo"/><span class="dating__slogan">Flirt and meet new people</span></div>
  <form class="dating__form" action="#">
    <input class="dating__inp" type="text" name="username" placeholder="Username"/>
    <input class="dating__inp" type="password" name="password" placeholder="Password"/>
    <button class="btn btn--primary mt-15">Login</button>
    <div class="text--center"><a class="dating__forgot-pwd" href="#">Forgot password?</a></div>
  </form>
  <div class="dating__footer"><span class="dating__account">Don't have an account?</span><a class="btn btn--secondary" href="#">Create</a></div>
</div>`}
        css={`
          .btn {
            padding: 1.5rem 2.5rem;
            color: white;
            border-radius: 4px;
            border: 0;
            cursor: pointer;
            box-shadow: none;
            outline: none;
            -webkit-transition: background-color 0.2s linear;
            transition: background-color 0.2s linear;
          }
          .btn--primary {
            background-color: #445ae3;
          }
          .btn--primary:hover {
            background-color: #f469fd;
          }
          .btn--secondary {
            background-color: #f469fd;
          }
          .btn--secondary:hover {
            background-color: #445ae3;
          }

          .dating-app {
            width: 100%;
            overflow: hidden;
            border-radius: 2rem;
            background-color: #fff;
            margin: 5rem auto;
            padding: 2rem 3rem;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            align-items: center;
            font-size: 1.2rem;
            color: #0d0e1c;
            box-shadow: 0 1rem 4rem rgba(13, 14, 28, 0.2);
            background-image: url("https://image.ibb.co/cLSkfH/dating_bgd.png");
            background-repeat: no-repeat;
            background-size: 110%;
            background-position: -1rem -1rem;
          }
          .dating__logo {
            margin-top: 4rem;
            width: 100%;
            text-align: center;
          }
          .dating__logo img {
            margin: 0 auto 1.5rem;
          }
          .dating__form {
            margin-top: 8.5rem;
            display: -webkit-box;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            width: 100%;
          }
          .dating__form > * {
            width: 100%;
            font-family: "Montserrat", sans-serif;
          }
          .dating__inp {
            border: 0;
            border-bottom: 1px solid #e9e7fc;
            padding: 1.5rem 0;
            margin-bottom: 1.5rem;
            box-shadow: none;
            outline: none;
            color: #0d0e1c;
            font-size: 1.4rem;
            font-weight: 600;
          }
          .dating__inp::-webkit-input-placeholder {
            color: #0d0e1c;
          }
          .dating__inp::-moz-placeholder {
            color: #0d0e1c;
          }
          .dating__inp:-ms-input-placeholder {
            color: #0d0e1c;
          }
          .dating__inp::-ms-input-placeholder {
            color: #0d0e1c;
          }
          .dating__inp::placeholder {
            color: #0d0e1c;
          }
          .dating__forgot-pwd {
            display: block;
            margin-top: 1.5rem;
            color: #88879a;
            transition: color 0.2s ease-in;
          }
          .dating__forgot-pwd:hover {
            color: #f469fd;
          }
          .dating__footer {
            width: 100%;
            margin-top: 6rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }
        `}
      ></Template>
    </>
  );
};

export { DatingForm };
