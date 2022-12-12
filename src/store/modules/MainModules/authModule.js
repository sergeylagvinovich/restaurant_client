import instance from "@/store/axios";
import router from "@/router";
import axios from "axios";
export default {
	namespaced: true,
	state:{
		//VueXState
        userData: {
            email:null,
            password:null,
            userName:null,
        },
        signUp:true,
        loading:false,
	},
	getters:{
		//VueXGetters
		getSignUp(state){
			return state.signUp;
		},
		getUserData(state){
			return state.userData;
		},
        getLoading(state){
			return state.loading;
		},

	},
	mutations:{
		//VueXMutations
		setSignUp(state,value){
			state.signUp = value;
		},
		setUserData(state,value){
			state.userData = value;
		},
		setLoading(state,value){
			state.loading = value;
		},

	},
	actions:{
		//VueXActions
        registerUser({commit,state,dispatch}){
            instance.post("auth/register",state.userData).then((resp)=>{
                router.push({name:"HomePage"})
            }).catch((err)=>{

            })
        },
        logIn({commit,state,dispatch}){
            instance.post("auth/signin",state.userData).then((resp)=>{
                router.push({name:"HomePage"})
            }).catch((err)=>{

            })
        },
		logOut({commit,state,dispatch}){
			let logout = axios.create({
				withCredentials: true,
				baseURL: 'http://localhost:8080/logout',
				timeout: 100000,
				headers: {
					'Content-Type': 'application/json',
					"Accept":"*/*",
				}
			})
			logout.get("").then((resp)=>{
				router.push({name:"LogInPage"})
			}).catch((err)=>{

			}).finally(()=>{
					router.push({name:"LogInPage"})
				}
			)
		}
	},
}

//...mapGetters({
	//'getLogIn':'authModule/getLogIn',
	//}),
//...mapMutations({
	//'setLogIn':'authModule/setLogIn',
	//}),