AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickCounter: { type: "number", default: 0 }
  },
  tick:function(){
    var rot = this.el.getAttribute("rotation")
    this.data.moveX+=0.01
    rot.x = this.data.moveX
    this.el.setAttribute("rotation", {
        x:rot.x, y:rot.y, z:rot.z
    })
}
})

AFRAME.registerComponent("car-model",{
  schema:{
      moveY:{type: "number", default:-3}
  },
  tick: function(){
      window.addEventListener("click", e =>{
          this.data.clickCounter = this.data.clickCounter+1;
          if(this.data.clickCounter === 1){
            const rotation = {x:0, y:100, z:0};
            this.el.setAttribute("rotation", rotation);
          }
          else if(this.data.clickCounter === 2){
            const rotation = {x:0, y:100, z:0}
          }
      })
  }
})
