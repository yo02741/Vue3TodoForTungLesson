<script setup></script>

<template>
  <div class="navbar">
    <div class="search">
      <input type="text" class="form-control" placeholder="請輸入關鍵字 ..." />
    </div>
    <ul class="list">
      <li class="list-item">
        <span>今日</span>
        <div class="function-group">
          <span class="counter today">2</span>
          <i class="bi bi-chevron-right"></i>
        </div>
      </li>
      <li class="list-item">
        <span>預覽</span>
        <div class="function-group">
          <span class="counter preview">20</span>
          <i class="bi bi-chevron-right"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
  min-width: 256px;
  padding: 60px 15px;
  background: #f0f1f3;
  & > * {
    width: 100%;
  }
}

.list {
  display: flex;
  flex-direction: column;
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 14px;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background: #e0e0e0;
    }
  }
  .function-group {
    display: flex;
    align-items: center;
    column-gap: 10px;
    span.counter {
      padding: 3px 7px;
      border-radius: 15px;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      &.today {
        background: #378e3c;
      }
      &.preview {
        background: #ffc145;
      }
    }
    i {
      font-size: 14px;
    }
  }
}
</style>
