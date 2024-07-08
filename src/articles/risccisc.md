# RISC 对比 CISC

> 原文链接：[RISC vs. CISC](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/)

探究 RISC 指令集架构优缺点的最简单方式就是将其与它的“前辈” CISC 指令集架构作比较。

## 将内存中的两数相乘

下图是一个通用计算机存储方案的示意图。主存被划分成 6 行 4 列，分别从 1 开始编号。执行单元负责进行所有计算，它只能对已经加载到 A、B、C、D、E 或 F 这 6 个寄存器之一的数据进行操作。假设我们想计算两个数的乘积——其中一个数存储在 2 行 3 列，另一个数存储在 5 行 2 列，然后将乘积存回到 2 行 3 列。

![](/articles/memoryfig.gif)

## CISC 方式

CISC 架构的主要目标是用尽可能少的汇编代码行数完成任务。为了实现这一目标，处理器硬件被设计成能够理解并执行一系列操作。对于上述这个特定任务，CISC 处理器会准备好一个特定的指令（我们称之为“MULT”）。当执行这条指令时，它会将两个值加载到不同的寄存器中，在执行单元中对操作数进行乘法运算，然后将乘积存储在适当的寄存器中。因此，两数相乘这一整个任务可以通过一个指令来完成：

```
MULT 2:3, 5:2
```

MULT 被称为“复杂指令”。它直接操作计算机的内存，不需要程序员明确调用任何加载或存储功能指令。例如，如果我们让“a”表示位置 2:3 的值，“b”表示位置 5:2 的值，那么这个命令与 C 语言中的语句 `a = a * b` 是相同的。

这种系统的主要优点之一是，编译器在将高级语言语句翻译成汇编代码时所需的工作量非常少。由于代码长度相对较短，存储指令所需的 RAM 也很少。重点是将复杂的指令直接构建到硬件中。

## RISC 方式

RISC 架构的处理器只使用可在一个时钟周期内执行的简单指令。因此，上述的“MULT”命令可以被拆分为三个独立的命令：“LOAD”将数据从内存移动到寄存器，“PROD”计算寄存器内两个操作数的乘积，“STORE”将数据从寄存器移动到内存。为了执行上述的确切步骤，程序员需要编写四行汇编代码：

```
LOAD A, 2:3
LOAD B, 5:2
PROD A, B
STORE 2:3, A
```

这种方式看起来更加低效。由于代码行数更多，需要更多的 RAM 来存储汇编级别的指令。编译器还必须做更多的工作，将高级语言语句转换为这种形式的代码。

| **CISC**                                                          | **RISC**                                                              |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| Emphasis on hardware                                              | Emphasis on software                                                  |
| Includes multi-clock complex instructions                         | Single-clock, reduced instruction only                                |
| Memory-to-memory: "LOAD" and "STORE" incorporated in instructions | Register to register: "LOAD" and "STORE" are independent instructions |
| Small code sizes, high cycles per second                          | Low cycles per second, large code sizes                               |
| Transistors used for storing complex instructions                 | Spends more transistors on memory registers                           |

然而，RISC 策略也带来了一些非常重要的优势。由于每条指令只需要一个时钟周期来执行，整个程序的执行时间大致与多周期的“MULT”指令相同。这些 RISC 的“简化指令”占用的硬件晶体管空间较少，为通用寄存器留下了更多的空间。由于所有指令的执行时间相同（即一个时钟周期），流水线操作成为可能。

将 “LOAD” 与 “STORE” 拆分成两个独立的指令实际上减少了计算机必需的工作量。在执行完诸如 CISC 的“MULT”复杂指令后，处理器自动擦除寄存器。如果有个操作数需要被用于另一个计算，那么处理器必须重新将数据从内存中加载到寄存器里。而在 RISC 中，操作数会一直保留在寄存器中，直到另一个值替换掉它。

## 性能等式

下面的等式通常用于表达计算机的性能：

![](/articles/performanceeq.gif)

CISC 试图最小化每个程序中指令的数量，牺牲每条指令的周期数。与之相反，RICS 则追求减少每条指令的周期数，但是以增加程序的指令数量为代价。

## RISC 发展的障碍

尽管基于 RISC 的处理优势，但其在商界站稳脚跟也花了超过十年的时间。这在很大程度上是由于缺乏软件支持所致。

尽管苹果公司的 Power Macintosh 系列采用了基于 RISC 的芯片，并且 Windows NT  也兼容RISC，但 Windows 3.1 和 Windows 95 是为 CISC 处理器设计的。许多公司不愿冒险采用新兴的 RISC 技术。由于缺乏商业兴趣，处理器开发商无法大规模制造 RISC 芯片以使其具有较强的价格竞争力。

![](/articles/roadblock.jpg)

另一个主要的阻碍则是英特尔的存在。尽管它们的 CISC 芯片变得越来越笨重和难以开发，但英特尔有资源进行开发，并能生产出强大的处理器。尽管 RISC 芯片在特定领域可能超越了英特尔的努力，但这些差异不足以说服购买者改变技术。

## RISC 的整体优势

今天，Intel x86 架构可以说是仍然保留了 CISC 架构的唯一芯片。这主要归因于计算机技术其他领域的进步。RAM 的价格大幅下降。1977 年，1MB 的 DRAM 约售价为 5000 美元。到了 1994 年，同样容量的内存只需 6 美元（根据通货膨胀调整）。另外，编译器技术也变得更加成熟，使得 RISC 对 RAM 的使用和对软件的重视变得更为理想。
