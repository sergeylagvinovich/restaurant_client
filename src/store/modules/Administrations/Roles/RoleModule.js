import instance from "@/store/axios";

export default {
	namespaced: true,
	state:{
		//VueXState
        data:[],
		loading:true,
		
	},
	getters:{
		//VueXGetters
		getData(state){
			return state.data;
		},
		getLoading(state){
			return state.loading;
		},

	},
	mutations:{
		//VueXMutations
		setData(state,value){
			state.data = value;
		},
		setLoading(state,value){
			state.loading = value;
		},

	},
	actions:{
		//VueXActions
        fetch({state,commit}){
            state.loading = true;
            instance.get('/admin/roles').then((resp)=>{
                commit('setData',resp.data);
                state.loading = false;
            })
        }
	},
}