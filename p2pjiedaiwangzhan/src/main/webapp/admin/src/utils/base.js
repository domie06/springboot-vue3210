const base = {
    get() {
        return {
            url : "http://localhost:8080/p2pjiedaiwangzhan/",
            name: "p2pjiedaiwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/p2pjiedaiwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "P2P借贷网站"
        } 
    }
}
export default base
