# Computed vs methods
- Computed chỉ load lại khi các property phụ thuộc thay đổi
- methods sẽ luôn chạy
# Computed vs watch 
- computed có thể watch được nhiều property chỉ trong một function
# Computed setter 

```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

