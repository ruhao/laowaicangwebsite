const Index = resolve => {
	require.ensure(['./components/index/index.vue'], () => {
		resolve(require('./components/index/index.vue'))
	})
}
const About = resolve => {
	require.ensure(['./components/about/about.vue'], () => {
		resolve(require('./components/about/about.vue'))
	})
}
const Contact = resolve => {
	require.ensure(['./components/contact/contact.vue'], () => {
		resolve(require('./components/contact/contact.vue'))
	})
}
const Internet = resolve => {
	require.ensure(['./components/internet/internet.vue'], () => {
		resolve(require('./components/internet/internet.vue'))
	})
}
const Message = resolve => {
	require.ensure(['./components/message/message.vue'], () => {
		resolve(require('./components/message/message.vue'))
	})
}
const News = resolve => {
	require.ensure(['./components/news/news.vue'], () => {
		resolve(require('./components/news/news.vue'))
	})
}
const Product = resolve => {
	require.ensure(['./components/product/product.vue'], () => {
		resolve(require('./components/product/product.vue'))
	})
}
const Advertises = resolve => {
	require.ensure(['./components/hr/advertises.vue'], () => {
		resolve(require('./components/hr/advertises.vue'))
	})
}
const Hr = resolve => {
	require.ensure(['./components/hr/hr.vue'], () => {
		resolve(require('./components/hr/hr.vue'))
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
const CompanyNews = resolve => {
	require.ensure(['./components/news/companynews.vue'], () => {
		resolve(require('./components/news/companynews.vue'))
	})
}

const CompanyPhotos = resolve => {
	require.ensure(['./components/news/companyphotos.vue'], () => {
		resolve(require('./components/news/companyphotos.vue'))
	})
}

const Marketing = resolve => {
	require.ensure(['./components/news/marketing.vue'], () => {
		resolve(require('./components/news/marketing.vue'))
	})
}

const IndustryDynamics = resolve => {
	require.ensure(['./components/news/industrydynamics.vue'], () => {
		resolve(require('./components/news/industrydynamics.vue'))
	})
}


const PhotoDetail = resolve => {
	require.ensure(['./components/news/photodetail.vue'], () => {
		resolve(require('./components/news/photodetail.vue'))
	})
}
export const routes = [{
		path: '/',
		components: {
			default: Index,
		}
	},
	{
		path: '/about',
		components: {
			default: About,
		}
	},
	{
		path: '/contact',
		components: {
			default: Contact,
		}
	},
	{
		path: '/internet',
		components: {
			default: Internet,
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
		components: {
				default:Hr
		},
		children:[{
			path: "strategy",
			components: {
				default:Strategy
		},
		}, {
			path: "train",
			components: {
				default:Train
			}
			
		},{
			path: "advertises",
			components: {
				default:Advertises
			}
		}]
	},
	{
		path: '/product',
		components: {
			default: Product,
		},
	}, 
	{
		path: '/news',
		components: {
				default:News
		},
		children:[{
			path: "/",
			components: {
				default:CompanyNews
		}
		}, {
			path: "companyphotos",
			components: {
				default:CompanyPhotos
			}
			
		},{
			path: "marketing",
			components: {
				default:Marketing
			}
		},{
			path: "industrydynamics",
			components: {
				default:IndustryDynamics
			}
		},{
			path: "photodetail",
			components: {
				default:PhotoDetail
			}
		}]
	}
]