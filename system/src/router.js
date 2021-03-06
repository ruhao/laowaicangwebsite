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

const News = resolve => {
	require.ensure(['./components/news/news.vue'], () => {
		resolve(require('./components/news/news.vue'))
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
const InternetSever =resolve => {
	require.ensure(['./components/internet/internetserver.vue'], () => {
		resolve(require('./components/internet/internetserver.vue'))
	})
}
const About = resolve => {
	require.ensure(['./components/about/about.vue'], () => {
		resolve(require('./components/about/about.vue'))
	})
}
const AboutHonor = resolve => {
	require.ensure(['./components/about/abouthonor.vue'], () => {
		resolve(require('./components/about/abouthonor.vue'))
	})
}
const AboutCulture = resolve => {
	require.ensure(['./components/about/aboutculture.vue'], () => {
		resolve(require('./components/about/aboutculture.vue'))
	})
}
const Product = resolve => {
	require.ensure(['./components/product/product.vue'], () => {
		resolve(require('./components/product/product.vue'))
	})
}
export const routes = [{
		path: '/',
		components: {
			default: Index,
		}
	},{
		path: '/product',
		components: {
			default: Product,
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
		path: '/internet',
		components: {
			default: InternetSever,
		}
	},{
		path: '/about',
		components: {
			default: About
		},
		children: [{
			path: "abouthonor",
			components: {
				default: AboutHonor
			},
		}, {
			path: "aboutculture",
			components: {
				default: AboutCulture
			}

		}]
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
	}, {
		path: '/news',
		components: {
			default: News
		},
		children: [{
			path: "companynews",
			components: {
				default: CompanyNews
			}
		}, {
			path: "industrydynamics",
			components: {
				default: IndustryDynamics
			}
		}, {
			path: "marketing",
			components: {
				default: Marketing
			}
		}, {
			path: "companyphotos",
			components: {
				default: CompanyPhotos
			}
		}]
	}

]