const Index = resolve => {
	require.ensure(['./components/index/index.vue'], () => {
		resolve(require('./components/index/index.vue'))
	})
}
const Upload = resolve => {
	require.ensure(['./components/upload/upload.vue'], () => {
		resolve(require('./components/upload/upload.vue'))
	})
}
const Kind = resolve => {
	require.ensure(['./components/kind/kind.vue'], () => {
		resolve(require('./components/kind/kind.vue'))
	})
}
const Message = resolve => {
	require.ensure(['./components/message/message.vue'], () => {
		resolve(require('./components/message/message.vue'))
	})
}
const Advertises = resolve => {
	require.ensure(['./components/hr/advertises.vue'], () => {
		resolve(require('./components/hr/advertises.vue'))
	})
}
const Train = resolve => {
	require.ensure(['./components/hr/train.vue'], () => {
		resolve(require('./components/hr/train.vue'))
	})
}
const Strategy = resolve => {
	require.ensure(['./components/hr/strategy.vue'], () => {
		resolve(require('./components/hr/strategy.vue'))
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
	{
		path: '/hr',
		children:[{
			path: "/strategy ",
			components: {
				Strategy
			}
		}, {
			path: "/train ",
			components: {
				Train
			}
		}, {
			path: "/advertises  ",
			components: {
				Advertises
			}
		}]
	},

]