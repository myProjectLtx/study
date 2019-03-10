//修改课程
export default {
    namespaced:true,
    state:{
      courseList: [
        {
            name: 'HTML超文本标记语言，标准通用标记语言下的一个应用。',
            price: 0,
            poster: 'https://f10.baidu.com/it/u=1510886367,3208044294&fm=72'
        },
        {
            name: 'CSS是一种用来表现HTML或XML等文件样式的计算机语言。',
            price: 0,
            poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056201035,193424164&fm=26&gp=0.jpg'
        },
        {
            name: 'JavaScript 是属于网络的脚本语言! ',
            price: 0,
            poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2827561061,1659221202&fm=26&gp=0.jpg'
        },
        {
            name: '小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想',
            price: 199,
            poster: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3492371506,1826246206&fm=26&gp=0.jpg'
        },
        {
            name: 'PHP（“超文本预处理器”）是一种通用开源脚本语言。',
            price: 199,
            poster: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=700651544,1605600705&fm=26&gp=0.jpg'
        },
        {
            name: 'PS图片编辑器是一个专业的在线ps照片处理软件',
            price: 199,
            poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1533127435,2841461459&fm=26&gp=0.jpg'
        },
        {
            name: 'Node.js是一个基于 Chrome V8 引擎的 JavaScript 运行环境。',
            price: 199,
            poster: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3738135465,2876300136&fm=26&gp=0.jpg'
        },
        {
            name: 'HTTP协议（超文本传输协议）',
            price: 199,
            poster: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2237470352,552559233&fm=26&gp=0.jpg'
        }
      ]
    },
    getters:{},
    mutations:{
      changeCourse(state,{index,name,price}){
        state.courseList[index].name = name;
        state.courseList[index].price = price;
  
      }
    },
    actions:{}
   }