import React from "react";
import Template from "./Template";
import { useEffect } from "react";

const SearchForm = () => {
  return (
    <>
      <Template
        title="Search Input"
        source="form"
        html={`<div class="search-form"><i class="fal fa-search search-form__icon"></i><input type="text" placeholder="Search" class="search-form__input"/></div>`}
        css={`
          .search-form {
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
          }
          .search-form__icon {
            color: #999;
            flex-shrink: 0;
          }
          .search-form__input {
            padding: 0 1.5rem;
            flex: 1;
          }
        `}
      ></Template>
    </>
  );
};

const LoginForm = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      const loginForm = document.querySelector(".login-form");
      const showPasswordIcon =
        loginForm && loginForm.querySelector(".show-password");
      const inputPassword =
        loginForm && loginForm.querySelector(`input[type="password"`);
      showPasswordIcon?.addEventListener("click", function () {
        const inputPasswordType = inputPassword.getAttribute("type");
        inputPasswordType === "password"
          ? inputPassword.setAttribute("type", "text")
          : inputPassword.setAttribute("type", "password");
      });
    });
  }, []);
  return (
    <>
      <Template
        title="Login form"
        source="form"
        html={`
        <form class="login-form" autocomplete="off" action="#">
          <input type="email" name="email" placeholder="Email"/>
          <div class="input-icon">
            <input type="password" name="email" placeholder="Password"/>
            <i class="fa fa-eye show-password"></i>
          </div>
          <a href="#" class="forgot">Forgot password?</a>
          <button>Sign in</button>
        </form>
        `}
        css={`
          .login-form {
            max-width: 35rem;
            margin: 0 auto;
            padding: 1.5rem;
          }
          .login-form input {
            padding: 1.5rem;
            border: 1px solid #eee;
            color: #333;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            display: block;
            width: 100%;
            transition: border 0.25s linear;
            font-weight: normal;
          }
          .login-form input:focus {
            border-color: var(--primary);
          }
          .login-form .forgot {
            display: inline-block;
            text-transform: uppercase;
            color: #333;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }
          .login-form button {
            width: 100%;
            padding: 1.5rem;
            border-radius: 4px;
            color: white;
            background-color: var(--primary);
            text-transform: uppercase;
          }
          .login-form .input-icon {
            position: relative;
          }
          .login-form .input-icon input {
            padding-right: 4rem;
          }
          .login-form .input-icon i {
            position: absolute;
            top: 50%;
            right: 1.5rem;
            transform: translateY(-50%);
            color: #ccc;
            cursor: pointer;
          }
        `}
        js={`
        window.addEventListener("load", function () {
          const loginForm = document.querySelector(".login-form");
          const showPasswordIcon =
            loginForm && loginForm.querySelector(".show-password");
          const inputPassword =
            loginForm && loginForm.querySelector('input[type="password"');
          showPasswordIcon.addEventListener("click", function () {
            const inputPasswordType = inputPassword.getAttribute("type");
            inputPasswordType === "password"
              ? inputPassword.setAttribute("type", "text")
              : inputPassword.setAttribute("type", "password");
          });
        });
        `}
      ></Template>
    </>
  );
};

export { SearchForm, LoginForm };
