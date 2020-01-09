// 策略模式场景
/*
    我们经常会遇到由于参数的变更，选择对应不同的操作(也就是多重if场景)
    最直接的想法就是使用switch() case的优化策略，但确实并不太好
    策略设计模式，就是来解决这种问题的
*/
// 策略实现类 (汽车)
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getprice = function (type) {
        return type + 10;
    };
    return Car;
}());
// 策略实现类 (汽车)
var Train = /** @class */ (function () {
    function Train() {
    }
    Train.prototype.getprice = function (type) {
        return type + 20;
    };
    return Train;
}());
// 策略实现类 (汽车)
var Plain = /** @class */ (function () {
    function Plain() {
    }
    Plain.prototype.getprice = function (type) {
        return type + 30;
    };
    return Plain;
}());
// 策略上下文context
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    // 策略执行方法
    Context.prototype.execute = function (type) {
        return this.strategy.getprice(type);
    };
    return Context;
}());
// 测试类调用
var train_price = new Context(new Train()).execute(("火车票："));
var plain_price = new Context(new Plain()).execute(("飞机票："));
document.body.innerHTML = train_price + " , " + plain_price;
