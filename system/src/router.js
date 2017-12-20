const Index = resolve =>{
	require.ensure(['./components/index/index.vue'],()=>{
		resolve(require('./components/index/index.vue'))
	})
}
const Upload = resolve =>{
	require.ensure(['./components/upload/upload.vue'],()=>{
		resolve(require('./components/upload/upload.vue'))
	})
}
export const routes = [{
    path: '/',
    components: {
        default: Index,
    },
},
{
    path: '/upload',
    components: {
        default: Upload,
    },
},

]