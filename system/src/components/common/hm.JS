	import moment from 'moment'
	export default {
	        data(){
	          return{
	            modal6: false,
				loading: true,
				theinfo: {},}
	        },
			methods: {
			show(index) {
				this.modal6 = true
				this.theinfo = this.fliter.data6[index]
			},
			asyncOK() {
				this.modal6 = false;
			},
			getData() {
				this.$http.post("http://localhost:3000/message/list", this.fliter).then(res => {
					let ii = res.data.rows.length
					for(let i = 0; i < ii; i++) {
						res.data.rows[i].date = moment(res.data.rows[i].date).format("YYYY年MM月DD日HH时mm分ss秒")
					}
					this.fliter.data6 = res.data.rows
					this.fliter.total = res.data.total
				})
			},
			changePage(page) {
				this.fliter.page = page
				this.getData()
			},
			search(){
				this.getData()
			}
		}
	}
