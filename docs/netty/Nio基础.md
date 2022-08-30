# NIO基础

### 1 Channel & Buffer

#### ByteBuffer 正确使用姿势

1. 向buffer 写入数据
2. 调用flip（）切换至读模式
3. 从buffer读取数据 buffe.get()
4. 调用clear或者 compact() 切换写模式 (compact 在没有读完的情况下,保留之前的，继续往下写入)
5.  重复1～4步骤 

ByteBuffer结构

​	position 

​		写模式下 postion是写入位置，limt等于容量 capacity容量

​		 flip动作发生后，postion切换为读取位置，limit 读取限制 Capactiy容量

​	



​		



### 2 Selector

#### 	多线程版本

​		内存占用高。线程上下文切换成本高，只适合连接数少的场景

####     线程池版缺点

​		 阻塞模式下，线程仅能处理一个scoket连接

​		 仅适合短连接场景

#### 	Selector版本设计

​	Thread 管理 select ，select 监听 channel事件 





### 2.3 ByteBuffer 常见方法

#### 分配空间

可以使用 allocate 方法为 ByteBuffer 分配空间，其它 buffer 类也有该方法

```java
Bytebuffer buf = ByteBuffer.allocate(16);
```

#### 向 buffer 写入数据

有两种办法

- 调用 channel 的 read 方法
- 调用 buffer 自己的 put 方法

```java
int readBytes = channel.read(buf);
```

和

```java
buf.put((byte)127);
```

#### 从 buffer 读取数据

同样有两种办法

- 调用 channel 的 write 方法
- 调用 buffer 自己的 get 方法

```java
int writeBytes = channel.write(buf);
```

和

```java
byte b = buf.get();
```

get 方法会让 position 读指针向后走，如果想重复读取数据

- 可以调用 rewind 方法将 position 重新置为 0
- 或者调用 get(int i) 方法获取索引 i 的内容，它不会移动读指针

#### mark 和 reset

mark 是在读取时，做一个标记，即使 position 改变，只要调用 reset 就能回到 mark 的位置

> **注意**
>
> rewind 和 flip 都会清除 mark 位置

#### 字符串与 ByteBuffer 互转

```java
ByteBuffer buffer1 = StandardCharsets.UTF_8.encode("你好");
ByteBuffer buffer2 = Charset.forName("utf-8").encode("你好");

debug(buffer1);
debug(buffer2);

CharBuffer buffer3 = StandardCharsets.UTF_8.decode(buffer1);
System.out.println(buffer3.getClass());
System.out.println(buffer3.toString());
```

输出



 

​		

