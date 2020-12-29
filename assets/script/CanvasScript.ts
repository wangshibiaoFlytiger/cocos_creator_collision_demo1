// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // 佩奇节点
    @property(cc.Node)
    peiqi: cc.Node = null;

    // 球体节点
    @property(cc.Node)
    ball: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      //监听peiqi节点的拖动事件: 发生拖动，则累加节点的横纵坐标值
      this.peiqi.on(cc.Node.EventType.TOUCH_MOVE, function(event){
        console.log("您挪动了物体")
        var delta =event.getDelta();
        this.peiqi.x +=delta.x;
        this.peiqi.y +=delta.y;
        }, this);
    }

    /**
     * 是否发生了碰撞: 若node_1和node_2节点间的距离长度大于r，则认为发生了碰撞
     * @param node_1 
     * @param node_2 
     * @param r 
     */
    isCollided(node_1 , node_2 , r){
        //简单的勾股定理
      let dy = node_2.y - node_1.y ;
      let dx = node_2.x - node_1.x ;
      if( r*r >= (dy*dy + dx*dx))
      {
          console.log("碰撞了!");
      }
    }

    start () {
    }

    update (dt) {
        // 定义节点间的距离，达到该距离，则认为发生碰撞
        let distance = 100;
        //查询是否发生了碰撞
        this.isCollided(this.peiqi,this.ball, distance);
    }
}
