//模块引入

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

const CompanyServer = resolve => {
	require.ensure(['./components/internet/companyserver.vue'], () => {
		resolve(require('./components/internet/companyserver.vue'))
	})
}

const Imarketing = resolve => {
	require.ensure(['./components/internet/marketing.vue'], () => {
		resolve(require('./components/internet/marketing.vue'))
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
const ProductList = resolve => {
	require.ensure(['./components/product/productlist.vue'], () => {
		resolve(require('./components/product/productlist.vue'))
	})
}
const ProductCid = resolve => {
	require.ensure(['./components/product/productcid.vue'], () => {
		resolve(require('./components/product/productcid.vue'))
	})
}
const ProductDetail = resolve => {
	require.ensure(['./components/product/productdetail.vue'], () => {
		resolve(require('./components/product/productdetail.vue'))
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
const AboutHonor = resolve => {
	require.ensure(['./components/about/honor.vue'], () => {
		resolve(require('./components/about/honor.vue'))
	})
}
const AboutCulture = resolve => {
	require.ensure(['./components/about/culture.vue'], () => {
		resolve(require('./components/about/culture.vue'))
	})
}
const AboutFramework = resolve => {
	require.ensure(['./components/about/framework.vue'], () => {
		resolve(require('./components/about/framework.vue'))
	})
}
const AboutFootprint = resolve => {
	require.ensure(['./components/about/footprint.vue'], () => {
		resolve(require('./components/about/footprint.vue'))
	})
}
const ServerDetail = resolve => {
	require.ensure(['./components/internet/severdetail.vue'], () => {
		resolve(require('./components/internet/severdetail.vue'))
	})
}

//路由配置   path为路径
//      components为引入的内容
//      children嵌套路由
//      name路由名字  可以在<router-link>直接跳转
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
		},
		children: [{
			path: "honor",
			components: {
				default: AboutHonor
			},
		}, {
			path: "",
			components: {
				default: AboutCulture
			}

		}, {
			path: "framework",
			components: {
				default: AboutFramework
			},
		}, {
			path: "footprint",
			components: {
				default: AboutFootprint
			}

		}]
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
		},
		children: [{
			path: "server",
			components: {
				default: CompanyServer,
			}
		}, {
			path: "/",
			components: {
				default: Imarketing,
			}
		}, {
			path: "severdetail/:content",
			name: "severdetail",
			components: {
				default: ServerDetail,
			}
		}]
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
			default: Hr
		},
		children: [{
			path: "strategy",
			components: {
				default: Strategy
			},
		}, {
			path: "train",
			components: {
				default: Train
			}

		}, {
			path: "advertises",
			components: {
				default: Advertises
			}
		}]
	},
	{
		path: '/product',
		components: {
			default: Product,
		},
		children: [{
			path: "/",
			components: {
				default: ProductList
			},
		}, {
			path: "productcid/:id",
			name: "productcid",
			components: {
				default: ProductCid
			},
		}, {
			path: "productdetail/:content",
			name: "productdetail",
			components: {
				default: ProductDetail
			}
		}]
	},
	{
		path: '/news',
		components: {
			default: News
		},
		children: [{
			path: "/",
			components: {
				default: CompanyNews
			}
		}, {
			path: "companyphotos",
			components: {
				default: CompanyPhotos
			}

		}, {
			path: "marketing",
			components: {
				default: Marketing
			}
		}, {
			path: "industrydynamics",
			components: {
				default: IndustryDynamics
			}
		}, {
			path: "photodetail/:content",
			name: "photodetail",
			components: {
				default: PhotoDetail
			}
		}]
	}
]