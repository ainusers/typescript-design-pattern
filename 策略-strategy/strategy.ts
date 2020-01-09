// 策略模式场景
/*
    我们经常会遇到由于参数的变更，选择对应不同的操作(也就是多重if场景)
    最直接的想法就是使用switch() case的优化策略，但确实并不太好
    策略设计模式，就是来解决这种问题的
*/

// 策略特点
// 根据形参的不同，选择不同的应对策略，理论上讲：策略之间是可以相互替换的

// 策略设计模式组成
/*
    1.策略接口
    2.策略接口实现类
    3.上下文context调用
    4.测试类test
*/

// 举个栗子
/*
    买票回家，我现在买的是火车票，我想看一下车票的价格
    if(ticket == "汽车票"){
        return 10;
    }else if(ticket == "火车票"){
        return 20;
    }else if(ticket == "飞机"){
        return 30;
    }
*/

// 策略接口
interface Strategy<T>{
    getprice(var1: T): T;
}
// 策略实现类 (汽车)
class Car implements Strategy<string>{
    public getprice(type: string): string {
        return type + 10;
    }
}
// 策略实现类 (汽车)
class Train implements Strategy<string>{
    public getprice(type: string): string {
        return type + 20;
    }
}
// 策略实现类 (汽车)
class Plain implements Strategy<string>{
    public getprice(type: string): string {
        return type + 30;
    }
}
// 策略上下文context
class Context {
    private strategy: Strategy<any>;
    public constructor(strategy: Strategy<any>) {
        this.strategy = strategy;
    }
    // 策略执行方法
    public execute(type: string){
        return this.strategy.getprice(type);
    }
}
// 测试类调用
let train_price = new Context(new Train()).execute(("火车票："))
let plain_price = new Context(new Plain()).execute(("飞机票："))
document.body.innerHTML = train_price + " , " + plain_price;