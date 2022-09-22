<script setup>
import loginAnimation from "@/assets/json/loginAnimation.json";

const account = ref("");
const password = ref("");
const isPasswordShow = ref(false);

const seePasswordIcon = computed(() => {
  const image = isPasswordShow.value ? "eye-open" : "eye-off";
  return new URL(`/src/assets/icons/${image}.svg`, import.meta.url);
});

const inputAcc = ref(null);
const inputPwd = ref(null);
const passwordTypeUpdate = () => {
  isPasswordShow.value = !isPasswordShow.value;
  inputPwd.value.type =
    inputPwd.value.type === "password" ? "text" : "password";
};

const rememberMe = ref(false);

const onLogin = () => {
  router.push({ path: "/" });
};

onMounted(() => {
  inputAcc.value.focus();
});
</script>

<template>
  <div class="index-container container">
    <div class="row">
      <div class="col-6 animation-div">
        <Vue3Lottie :animationData="loginAnimation" width="385" />
      </div>
      <div class="col-6 login-div">
        <div class="logo">
          <img src="@/assets/icons/logo.svg" alt="" />
          <span>Todos App</span>
        </div>
        <span class="welcome-message">Welcome Back!!</span>
        <div class="input-group">
          <div class="form-floating account">
            <input
              ref="inputAcc"
              v-model="account"
              type="text"
              class="form-control"
              placeholder="帳號"
            />
            <label>
              <img src="@/assets/icons/login-account.svg" alt="" />
              <span>帳號</span>
            </label>
          </div>
          <div class="form-floating password">
            <input
              ref="inputPwd"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="密碼"
            />
            <label>
              <img src="@/assets/icons/login-password.svg" alt="" />
              <span>密碼</span>
            </label>
            <img
              :src="seePasswordIcon"
              alt=""
              class="eye"
              @click="passwordTypeUpdate"
            />
          </div>
        </div>
        <div class="function-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="rememberMe"
            />
            <label class="form-check-label" for="flexCheckDefault">
              記住我
            </label>
          </div>
          <span class="forgot-password">忘記密碼？</span>
        </div>
        <button class="btn login-btn" @click="onLogin">
          登入
          <img src="@/assets/icons/arrow-right-light.svg" alt="" />
        </button>
        <div class="system-info">
          <span class="copyright">2022@童綜合醫院</span>
          <span class="version">Released v.1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-container {
  height: 100%;

  & > .row {
    height: inherit;
  }
}

.animation-div {
  & > div {
    // max-width: 385px;
  }
}

.login-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    max-width: 255px;
  }

  .logo {
    margin-bottom: 45px;

    img {
      margin-right: 7px;
    }

    span {
      font-size: 18px;
      color: #333333;
    }
  }

  .welcome-message {
    display: inline-block;
    margin-bottom: 35px;
    font-size: 32px;
    font-weight: bold;
    color: #333333;
  }

  .input-group {
    margin-bottom: 10px;
    flex-direction: column;

    label {
      display: flex;
      align-items: center;
      color: #9c9c9c;
      transition: all 0.3s;

      img {
        margin-right: 20px;
      }
    }

    .form-control {
      width: 100%;
      background-color: transparent;
      padding-right: 50px !important;

      &:focus {
        border-color: rgba(14, 173, 105, 0.3);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(14, 173, 105, 0.3);
      }

      &:focus ~ label img,
      &:not(:placeholder-shown) ~ label img {
        display: none;
      }
    }

    .account,
    .password {
      position: relative;
      width: 100%;
    }

    .account .form-control {
      border-radius: 5px 5px 0 0 !important;
    }

    .password {
      top: -1px;
      left: 1px;

      .form-control {
        border-radius: 0 0 5px 5px !important;
      }
    }

    .eye {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      padding: 4px;
      cursor: pointer;
    }
  }

  .function-group {
    margin-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    label {
      cursor: pointer;
    }
    .forgot-password {
      font-size: 13px;
      color: #378e3c;
      cursor: pointer;
    }
  }
}

.btn {
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  padding: 14px 0 13px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  box-shadow: 0px 5px 10px #21883833;
  transition: all 0.3s;

  img {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 26px;
    height: 26px;
    transform: translateY(-50%) scale(0.8);
  }

  &.login-btn {
    color: #ffffff;
    background-image: linear-gradient(270deg, #4eb164 0%, #218838 100%);
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(90deg, #4eb164 0%, #218838 100%);
      z-index: -1;
      transition: opacity 0.5s linear;
      opacity: 0;
    }
    &:hover {
      color: #ffffff;
    }
    &:hover::before {
      opacity: 1;
    }
    &:focus {
      color: #ffffff;
      border-color: transparent;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(53, 172, 104, 0.3);
    }
  }
}

.system-info {
  .copyright,
  .version {
    margin: 0 3px;
    font-size: 10px;
    color: #868d96;
  }
}
</style>
