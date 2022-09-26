<script setup></script>

<template>
  <div class="header">
    <h1 class="logo">
      <img src="@/assets/icons/logo-header.svg" alt="" />
      <span>Todos App</span>
    </h1>
    <ul class="function-group">
      <li class="add-btn">
        <img src="@/assets/icons/add-header.png" alt="" />
      </li>
      <li class="alert-btn">
        <img src="@/assets/icons/alert-header.png" alt="" />
      </li>
      <li class="user-info">
        <img src="@/assets/icons/user-header.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  padding: 0 15px;
  background: #378e3c;
  box-shadow: 0px 3px 6px #868d9659;
}

h1.logo {
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 10px;
  span {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }
}

.function-group {
  display: flex;
  align-items: center;
  column-gap: 10px;
  .add-btn,
  .alert-btn {
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background: #1c742f;
    }
  }
  li > img {
    cursor: pointer;
  }
}
</style>
