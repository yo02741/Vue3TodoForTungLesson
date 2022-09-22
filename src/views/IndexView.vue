<script setup></script>

<template>
  <Header />
  <div class="login-container">
    <Navbar />
    <Todo />
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100%;
  & > * {
    height: inherit;
  }
}
</style>
