const Index = resolve =>{
	require.ensure(['./components/index/index.vue'],()=>{
		resolve(require('./components/index/index.vue'))
	})
}
export const routes = [{
    path: '/index',
    components: {
        default: Index,
    },
}]