import instance from "@/store/axios";

export default {
	namespaced: true,
	state:{
		//VueXState
        loading:true,
		data:null,
		
	},
	getters:{
		//VueXGetters
		getLoading(state){
			return state.loading;
		},
		getData(state){
			return state.data;
		},

	},
	mutations:{
		//VueXMutations
		setLoading(state,value){
			state.loading = value;
		},
		setData(state,value){
			state.data = value;
		},

	},
	actions:{
		//VueXActions
        fetchUsers({state,commit}){
            state.loading = true;
            instance.get("/users").then((resp)=>{
                commit('setData',resp.data);
                state.loading = false;
            })
        }
	},
}