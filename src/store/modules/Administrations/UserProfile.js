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
		addRole(state,value){
			let role = {
				"id": null,
				"role": null,
				"canInsert": false,
				"canUpdate": false,
				"canDelete": false,
				"canView": false
			}
			state.data.userRoles.unshift(role);
		},
		deleteRole(state,index){
			state.data.userRoles.splice(index,1);
		},
		setLoading(state,value){
			state.loading = value;
		},
		setData(state,value){
			state.data = value;
		},

	},
	actions:{
		//VueXActions
        fetch({state,commit,dispatch}){
			var url = router.currentRoute.value.path;
			state.loading = true;
			instance.get(url).then((resp)=>{
				dispatch('RoleModule/fetch', {}, { root: true })
				commit("setData",resp.data);
				state.loading = false;
			})
        },
		save({state,commit,dispatch}){
			var url = router.currentRoute.value.path;
			var method =  router.currentRoute.value.meta.method;
			var subString =  router.currentRoute.value.meta.subString
			url = url.replace(subString,"");
			state.loading = true;
			instance({
				url,
				method,
				data:state.data
			}).then((resp)=>{
				if(method==="POST"){
					state.loading = false;
					commit('setData',resp.data)
					router.push({name:"UserEdit",params:{id:resp.data.id}})
				}else {
					commit('setData',resp.data)
					state.loading = false;
				}
			})
		},
	},
}
