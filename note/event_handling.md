# biến `$event`

**VD**

```vue
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
methods: {
  warn: function (message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

# Event modifier

- `.stop` để ngăn hiện tượng nổi bọt
- `.prevent` để ngăn hành vi mặc định
- `.capture` khi muốn thêm event listener

- `.self` để chỉ lắng nghe sự kiện ở element này, không nghe ở element con
- `.once` để chỉ lắng nghe 1 lần
- `.passive` hành vi mặc định của sự kiện sẽ xảy ra ngay lập tức, thay vì đợi phần xử lí hoàn tất

# Key modifier

