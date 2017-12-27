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
const Kind = resolve =>{
	require.ensure(['./components/kind/kind.vue'],()=>{
		resolve(require('./components/kind/kind.vue'))
	})
}
const Message = resolve =>{
	require.ensure(['./components/message/message.vue'],()=>{
		resolve(require('./components/message/message.vue'))
	})
}
export const routes = [{
    path: '/',
    components: {
        default: Index,
    }
},
{
    path: '/upload',
    components: {
        default: Upload,
    }
},
{
    path: '/kind',
    components: {
        default: Kind,
    }
},
{
    path: '/message',
    components: {
        default: Message,
    }
},


]