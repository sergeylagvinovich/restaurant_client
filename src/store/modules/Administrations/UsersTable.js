import instance from "@/store/axios";
import router from "@/router";

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
			var url = router.currentRoute.value.path;
            instance.get(url).then((resp)=>{
                commit('setData',resp.data);
                state.loading = false;
            })
        },
		deleteUser({state,commit,dispatch},id){
			var url = router.currentRoute.value.path;
			url+=`/${id}`;
			instance({
				url,
				method:"DELETE",
			}).then((resp)=>{
				dispatch("fetchUsers");
			})
		}
	},
}