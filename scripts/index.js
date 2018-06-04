class PraiseButton {
    constructor(docm,num){
        this.docm=docm;
        this.num=num;
    }
    addOne(){
        let that=this;
        this.docm.on('click',function () {
            console.log(that.num)
            that.num++
            that.docm.addClass('cc')
            setTimeout(function () {
                that.docm.removeClass('cc')
            },1000)
            return that.num
        })
    }
}

class Thumb extends PraiseButton{
    constructor(docm,num){
        super(docm,num)
    }
}

export {Thumb};