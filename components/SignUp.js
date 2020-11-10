import React, { useEffect } from "react";
import Template from "./Template";

const SimpleSignup = () => {
  return (
    <>
      <Template
        title="Simple signup form"
        source="form"
        author="Chouaib Belagoun"
        authorFrom="https://dribbble.com/chouaibblgn45"
        html={`
        <div class="signup">
          <h1 class="signup-heading">Sign up</h1>
          <a href="#" class="signup-google">
            <i class="fab fa-google signup-google-icon"></i>
            <span class="signup-google-text">Sign up with Google</span>
          </a>
          <div class="signup-or">
            <span class="signup-or-text">Or</span>
          </div>

          <form action="javscript:voi(0);" class="signup-form" autocomplete="off">
            <div class="form-group">
            <label for="name" class="form-label">Full name</label>
            <input type="text" class="form-input" id="name" placeholder="Eg: John Doe">
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-input" id="email" placeholder="Eg: johndoe@email.com">
          </div>
          <button type="submit" class="form-submit">Sign up</button>
            </form>
          <p class="signup-already">Already have an account ? <a href="#" class="signup-already-link">Login</a></p>
        </div>
        `}
        css={`
          .signup {
            padding: 40px 20px;
            background-color: white;
            border-radius: 30px;
            width: 100%;
          }
          .signup-heading {
            text-align: center;
            font-weight: 600;
            color: #363a40;
            font-size: 35px;
            margin-bottom: 35px;
          }
          .signup-google {
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            width: 100%;
            border-radius: 16px;
            background-color: #4c6ef4;
            text-decoration: none;
            padding: 8px;
            margin-bottom: 45px;
            box-shadow: 0 10px 20px -5px rgba(76, 110, 244, 0.9);
          }
          .signup-google-icon {
            width: 50px;
            height: 50px;
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            color: #ff7870;
            border-radius: 10px;
            background-color: white;
            font-size: 25px;
          }
          .signup-google-text {
            color: white;
            font-weight: 500;
            display: block;
            margin: 0 auto;
          }
          .signup-or {
            color: #363a40;
            display: block;
            text-align: center;
            position: relative;
            margin-bottom: 55px;
          }
          .signup-or-text {
            display: inline-block;
            padding: 5px 20px;
            background-color: white;
            position: relative;
            font-size: 14px;
          }
          .signup-or:before {
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            background-color: #999;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .signup-already {
            text-align: center;
            color: #363a40;
            font-size: 13px;
          }
          .signup-already-link {
            color: #4c6ef4;
            text-decoration: none;
          }

          .form-group {
            margin-bottom: 25px;
          }

          .form-label {
            display: inline-block;
            cursor: pointer;
            color: #363a40;
            margin-bottom: 15px;
            font-size: 13px;
          }

          .form-input {
            display: block;
            width: 100%;
            padding: 20px;
            border-radius: 15px;
            border: 0;
            outline: none;
            font-family: "Poppins", sans-serif;
            background-color: #f2f3f5;
            color: #363a40;
            font-size: 16px;
          }
          .form-input::-webkit-input-placeholder {
            color: #b4bdc1;
          }

          .form-submit {
            display: block;
            margin-top: 45px;
            width: 100%;
            padding: 20px;
            color: white;
            text-align: center;
            cursor: pointer;
            border: 0;
            border-radius: 15px;
            background-color: #81c91d;
            font-size: 16px;
            font-weight: 500;
            font-family: "Poppins", sans-serif;
            margin-bottom: 20px;
            box-shadow: 0 10px 20px -5px rgba(129, 201, 29, 0.9);
            outline: none;
          }

          @media screen and (max-width: 767px) {
            .signup {
              padding: 30px 20px;
            }
          }
        `}
      ></Template>
    </>
  );
};

const LargeSignup = () => {
  return (
    <>
      <Template
        title="Large SignUp UI"
        source="form"
        author="Chouaib Belagoun"
        authorFrom="https://dribbble.com/chouaibblgn45"
        html={`
        <div class="signup">
          <img src="https://imgur.com/aILP3CD.png" alt="" class="signup-image">
          <div class="signup-container">
            <div class="tab">
              <div class="tab-item is-active">Sign up</div>
              <div class="tab-item">Sign in</div>
            </div>
            <h1 class="signup-heading">Sign up</h1>
            <form class="signup-form" autocomplete="off">
              <div class="form-group">
                <label for="name"  class="form-label">Full name</label>
                <input type="text" id="name" class="form-input" placeholder="Ex: John Doe" required name="name">
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-input" placeholder="Ex: johndoe@email.com" required name="email">
              </div>
              <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-input" placeholder="************" required name="password">
              </div>
              <div class="form-group">
                <label for="re-password" class="form-label">Repeat password</label>
                <input type="password" id="re-password" class="form-input" placeholder="************" required name="re-password">
              </div>
              <div class="form-group signup-term">
                By clicking you agree with our <a href="#" class="signup-term-link">Term of use.</a>
              </div>
              <button type="submit" class="btn btn--gradient">Sign up</button>
            </form>
          </div>
        </div>
        `}
        css={`
          .form-group {
            margin-bottom: 25px;
          }

          .form-label {
            display: inline-block;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 10px;
            cursor: pointer;
            letter-spacing: 1px;
          }

          .form-input {
            display: block;
            width: 100%;
            padding: 15px;
            border-radius: 12px;
            background-color: #f8f9fb;
            border: 0;
            color: #212144;
            font-size: 13px;
            transition: all 0.25s ease;
          }
          .form-input:focus {
            background-color: white;
            box-shadow: 0 10px 20px -5px rgba(163, 165, 178, 0.4);
            -webkit-box-shadow: 0 10px 20px -5px rgba(163, 165, 178, 0.4);
          }
          .form-input::-webkit-input-placeholder {
            color: #a3a5b2;
          }

          .btn {
            display: inline-block;
            border: 0;
            border-radius: 10px;
            text-align: center;
            font-size: 14px;
            padding: 15px;
            text-transform: uppercase;
            background-color: transparent;
          }
          .btn--gradient {
            background-image: linear-gradient(to bottom, #ff1d75, #f8902f);
            width: 100%;
            color: white;
          }

          .tab {
            align-self: center;
            display: inline-flex;
            padding: 5px;
            background-color: #f8f9fb;
            border-radius: 10px;
            margin-bottom: 50px;
          }
          .tab-item {
            text-transform: uppercase;
            font-size: 14px;
            padding: 7.5px 15px;
            border-radius: inherit;
            cursor: pointer;
            text-align: center;
            font-weight: 300;
          }
          .tab-item.is-active {
            background-image: linear-gradient(to bottom, #ff1d75, #f8902f);
            color: white;
          }

          .signup {
            width: 100%;
            max-width: 1200px;
            height: 100%;
            background-color: white;
            position: relative;
            z-index: 2;
            border-radius: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
          }
          .signup-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .signup-container {
            padding: 100px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }
          .signup-heading {
            font-size: 45px;
            font-weight: bold;
            color: #212144;
            margin-bottom: 30px;
          }
          .signup-form {
            width: 100%;
          }
          .signup-term {
            font-size: 12px;
            font-weight: 500;
            line-height: 1.6;
          }
          .signup-term-link {
            color: #2979ff;
          }

          @media screen and (max-width: 1023px) {
            body:before,
            body:after {
              display: none;
            }

            .signup {
              display: block;
            }
            .signup-container {
              padding: 50px 20px;
            }
            .signup-image {
              display: none;
            }
          }
          @media screen and (max-width: 767px) {
            .signup-container {
              max-width: 100%;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { SimpleSignup, LargeSignup };
