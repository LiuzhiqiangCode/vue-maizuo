export default {
    state: {
        filmList: []// 影片列表数据
    },
    getters: {
        // 当前影片的数量
        filmCount(state) {
            return state.filmList.length
        }
    },
    mutations: {
        setFilmList(state,payload){
            state.filmList = payload
        }
    },
    actions: {
        getFilmList(context,payload) {
            setTimeout(()=> {
                let result = [
                    { filmId: 1, filmName: '中国机长'},
                    { filmId: 2, filmName: '我和我的祖国'}
                ]
                context.commit('setFilmList',result)
            },5000)
        }
    }
}