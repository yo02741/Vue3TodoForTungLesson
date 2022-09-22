<script setup>
const timeSelect = ref("");
const isAddingNewTodo = ref(false);

const openAdding = () => {
  isAddingNewTodo.value = true;
};
const closeAdding = () => {
  isAddingNewTodo.value = false;
};

const addNew = () => {
  console.log("addNew");
  closeAdding();
};
</script>

<template>
  <div class="todo">
    <div class="title-group">
      <span class="title">今日</span>
      <span class="date">星期一 02-14-2022</span>
    </div>
    <div class="todo-list">
      <p class="message">
        您尚有
        <span>2</span>
        項待辦
      </p>
      <ul class="list">
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span class="describe">繳電費</span>
              <span class="time">10:00 AM</span>
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              <span class="describe">回電給老闆</span>
              <span class="time">11:00 AM</span>
            </label>
          </div>
        </li>
      </ul>
      <div v-if="isAddingNewTodo">
        <div class="add-area">
          <textarea></textarea>
          <div class="function-group">
            <el-date-picker
              v-model="timeSelect"
              type="datetime"
              placeholder="選擇時間"
            />
            <span class="alarm">
              <i class="bi bi-alarm"></i>
              提醒
            </span>
          </div>
        </div>
        <div class="function-btn-grouup">
          <button class="btn btn-primary" @click="addNew">確定增加</button>
          <button class="btn btn-secondary" @click="closeAdding">取消</button>
        </div>
      </div>
      <span v-else class="add-btn" @click="openAdding">
        <i class="bi bi-plus"></i>
        新增
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  width: 100%;
  padding: 60px 35px;
  background: #ffffff;
  .title-group {
    margin-bottom: 27px;
    .title {
      margin-right: 26px;
      font-size: 28px;
      font-weight: bold;
      color: #333333;
    }
    .date {
      font-weight: 16px;
      color: #868d96;
    }
  }
  .todo-list {
    .message {
      margin-bottom: 9px;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      span {
        color: #378e3c;
        font-weight: normal;
      }
    }
    ul.list {
      margin-bottom: 8px;
      li {
        position: relative;
        display: flex;
        padding: 9px 0;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        &:not(:first-child) {
          top: -1px;
        }
        .form-check {
          width: 100%;
        }
        label {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .describe {
          font-size: 16px;
        }
        .time {
          font-size: 13px;
          color: #378e3c;
        }
      }
    }

    .add-area {
      position: relative;
      margin-bottom: 9px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100px;
      max-height: 100px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      overflow: overlay;
      textarea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 8px 12px;
        border: 0;
        resize: none;
        &:focus {
          outline: 0;
        }
      }
      .function-group {
        position: absolute;
        bottom: 8px;
        left: 12px;
        display: flex;
        align-items: center;
        height: 26px;
        column-gap: 14px;
      }
    }

    .function-btn-grouup {
      display: flex;
      column-gap: 5px;
      button {
        color: #ffffff;
      }
    }

    .add-btn {
      display: inline-flex;
      align-items: center;
      column-gap: 10px;
      color: #868d96;

      cursor: pointer;
      transition: all 0.3s;
      i {
        font-size: 20px;
        &::before {
          border-radius: 50%;
        }
      }
      &:hover {
        color: #378e3c;
        i {
          color: #ffffff;
        }
        i::before {
          background: #378e3c;
        }
      }
    }
  }
}
</style>
