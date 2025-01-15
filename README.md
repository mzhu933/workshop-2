# workshop 2
setTimeout and setInterval
# URL: https://mzhu933.github.io/workshop-2/

### screenshot of process
<img width="363" alt="截屏2025-01-15 上午9 58 17" src="https://github.com/user-attachments/assets/68f516ea-24bf-4d84-a657-7b741d2fcab2" />
<img width="541" alt="截屏2025-01-15 上午9 58 38" src="https://github.com/user-attachments/assets/2a1239d8-10ce-4bd6-acc1-6c203bf9d4c7" />
- Command shift + P
- Create p5.js project

### setTimeout
<img width="793" alt="截屏2025-01-15 上午9 59 36" src="https://github.com/user-attachments/assets/696dffd6-dced-4ec5-87db-d717fa43b495" />

### setInterval:
- Create a shape that pulsates
- Or changes color every second
<img width="596" alt="截屏2025-01-15 上午10 00 10" src="https://github.com/user-attachments/assets/8765990e-6447-4167-83fe-50d811c0648e" />

- Stop the setInterval function at a certain point: Passing the function into a variable 
- Counter ++ (++means add one each times)
<img width="624" alt="截屏2025-01-15 上午10 00 46" src="https://github.com/user-attachments/assets/db0420e2-5f4e-4cf6-a2e0-867fa4864ab8" />

## my practice of setInterval: 
<img width="1218" alt="截屏2025-01-15 上午9 56 04" src="https://github.com/user-attachments/assets/ccd5a7e7-15cd-4939-865d-08ccbed51d85" />

- let counter = 0; // 计数器，记录生成的圆形数量
- let countInterval; // 用于存储 setInterval

- circle(random(0, 300), random(0, 300), 60); // 随机位置的圆形，直径为 60
- counter++; // 每次生成圆形后计数器 +1

- if (counter > 5) { // 当计数器大于 5 时停止 setInterval

- function mousePressed() {
- counter = 0; // 重置计数器
- countInterval = setInterval(makeCircle, 1000); // 每秒调用 makeCircle

- Add note in my language, I think this one is a bit complicated for me.

## practice in setTimeout
<img width="759" alt="截屏2025-01-15 上午10 01 30" src="https://github.com/user-attachments/assets/5332c6f7-8478-4d36-bd1e-88f18b0539b7" />
