// components/Tabs/Tabs.js
Component({
  properties: {
    aaa:{
      type:String,
      value:""
    }
  },

  data: {
    tabs:[
      {
        id: 0,
        name:"未付款",
        isActive:true
      },
      {
        id: 1,
        name:"已付款",
        isActive:false
      },
      {
        id: 2,
        name:"待确认",
        isActive:false
      },
      {
        id: 3,
        name:"付款失败",
        isActive:false
      },
      {
        id: 4,
        name:"已取消",
        isActive:false
      }
    ]
  },
  methods: {
    handleItemtap(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
