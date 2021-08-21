#  v-if vs v-show

- v-if sẽ không render nếu điều kiện sai, v-show vẫn render nhưng không hiển thị
- dùng v-show khi cần toggle nhiều, ngược lại dùng v-if

# v-if dùng với v-for

- không khuyến khích dùng v-if với v-for trong cùng 1 element

**VD**: trường hợp muốn lọc một mảng

- nếu muốn lọc, thì khai báo một computed property mới chứa những item muốn hiển thị.
- trong trường hợp muốn ẩn cả 1 list theo điều kiện v-if thì nên chuyển v-if lên thẻ cha