import instance from "@/store/axios";
export default {
	namespaced: true,
	state:{
		//VueXState
        loading:null,
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
			instance.get("/users").then((resp)=>{
				console.log(resp.data);
			})
        }
	},
}
//...mapGetters({
	//'getLoading':'userModule/getLoading',
	//'getData':'userModule/getData',
	//}),
//...mapMutations({
	//'setLoading':'userModule/setLoading',
	//'setData':'userModule/setData',
	//}),