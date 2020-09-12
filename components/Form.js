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

const ContactForm = () => {
  return (
    <>
      <Template
        title="Contact form"
        source="form"
        author="Ivan Poddubchenko"
        authorFrom="https://dribbble.com/Art_John"
        html={`
        <div class="contact">
          <h2 class="contact-heading">Let's talk</h2>
          <p class="contact-notice">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo voluptas, id consequatur perferendis quibusdam a dolorem sit iste accusamus provident laborum cupiditate accusantium ab consectetur ipsam sapiente fugit repudiandae!</p>
          <form action="javascript:void(0)" class="contact-form" autocomplete="off">
            <div class="contact-form-group">
              <label for="name" class="contact-form-label">Your Name</label>
              <input id="name" type="text" class="contact-form-input"/>
            </div>
            <div class="contact-form-group">
              <label for="email" class="contact-form-label">Your Email</label>
              <input id="email" type="email" class="contact-form-input"/>
            </div>
            <div class="contact-form-group">
              <label for="message" class="contact-form-label">Your Message</label>
              <textarea name="message" id="message" class="contact-form-area" placeholder="Type something if you want"></textarea>
            </div>
            <button type="submit" class="contact-form-submit">Send Message</button>
          </form>
        </div>
        `}
        css={`
          .contact {
            max-width: 45rem;
          }
          .contact-heading {
            color: #4d49ba;
            font-weight: bold;
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          .contact-notice {
            font-weight: 300;
            line-height: 1.6;
            color: #7e95cc;
            margin-bottom: 3rem;
          }
          .contact-form-group {
            margin-bottom: 2rem;
          }
          .contact-form-label {
            color: #7e95cc;
            display: inline-block;
            margin-bottom: 1rem;
            font-weight: 500;
          }
          .contact-form-input,
          .contact-form-area {
            color: #7e95cc;
            display: block;
            width: 100%;
            padding: 1.5rem;
            background-color: #f5f6fd;
            border: 0;
            outline: none;
            resize: none;
          }
          .contact-form-input::-webkit-input-placeholder,
          .contact-form-area::-webkit-input-placeholder {
            color: #b2bada;
          }
          .contact-form-input {
            border-radius: 5rem;
          }
          .contact-form-area {
            min-height: 16rem;
            border-radius: 2rem;
            line-height: 1.6;
          }
          .contact-form-submit {
            color: white;
            padding: 1.5rem;
            width: 100%;
            max-width: 25rem;
            border-radius: 5rem;
            border: 0;
            outline: none;
            cursor: pointer;
            text-align: center;
            font-weight: 500;
            white-space: nowrap;
            letter-spacing: 1px;
            background-color: #7b78f8;
            box-shadow: 0 10px 20px 0 rgba(123, 120, 248, 0.5);
          }
          .contact-form-area::-webkit-scrollbar {
            width: 5px;
          }

          .contact-form-area::-webkit-scrollbar-track {
            border-radius: 3rem;
            background-color: #eee;
          }

          .contact-form-area::-webkit-scrollbar-thumb {
            border-radius: 3rem;
            background-color: #7b78f8;
          }
        `}
      ></Template>
    </>
  );
};

export { SearchForm, LoginForm, ContactForm };
