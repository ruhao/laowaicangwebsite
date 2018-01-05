import moment from 'moment'
export default {
	data() {
		return {
			modal6: false,
			loading: true,
		}
	},
	methods: {
		show(index) {
			this.modal6 = true
			Object.assign(this.$data.formValidate, this.fliter.data6[index])
		},
		asyncOK() {
			this.modal6 = false;
		},
		getData() {
			this.$http.post(`http://localhost:3000/${this.apimodel}/list`, this.fliter).then(res => {
				let ii = res.data.rows.length
				for(let i = 0; i < ii; i++) {
					res.data.rows[i].date = moment(res.data.rows[i].date).format("YYYY年MM月DD日HH时mm分ss秒")
				}
				console.log(this.apimodel)
				this.fliter.data6 = res.data.rows
				this.fliter.total = res.data.total
			})
		},
		changePage(page) {
			this.fliter.page = page
			this.getData()
		},
		search() {
			this.getData()
		},
		remove(index) {
			this.$Modal.confirm({
				title: '确认删除数据吗',
				content: '删除后这些数据将无法找回',
				loading: true,
				onOk: () => {
					setTimeout(() => {
						this.$http.delete(`http://localhost:3000/${this.apimodel}/data/` + this.fliter.data6[index]._id).then(res => {
							this.fliter.data6.splice(index, 1);
							this.getData()
						})
						this.$Modal.remove();
					}, 500);
				}
			})
		},
		onAdd() {
			this.modal6 = true,
			Object.assign(this.$data.formValidate, this.$options.data().formValidate)
		},
		handleSubmit() {
				console.log(this.formValidate)
				this.formValidate.type=this.type
				this.formValidate.cateId=this.cateId
				this.formValidate.date=new Date()
				this.$http.post(`http://localhost:3000/${this.apimodel}/data`, this.formValidate).then(res => {
					this.getData()
					this.modal6 = false;
					this.formValidate.type="";
				})

		}
	}
}