import moment from 'moment'
export default {
	data() {
		return {
			modal6: false,//弹框默认关闭
			loading: true,
		}
	},
	methods: {
		show(index) {
			this.modal6 = true
			Object.assign(this.$data.formValidate, this.fliter.data6[index])//进行数据的结合，赋值
		},
		asyncOK() {
			this.modal6 = false;
		},
		getData() {
			this.$http.post(`http://localhost:3000/${this.apimodel}/list`, this.fliter).then(res => {
				
				let ii = res.data.rows.length
				for(let i = 0; i < ii; i++) {
					res.data.rows[i].date = moment(res.data.rows[i].date).format("YYYY年MM月DD日HH时mm分ss秒")//用moment来改变时间
				}
				this.fliter.data6 = res.data.rows//数据整合赋值
				this.fliter.total = res.data.total
			})
		},
		changePage(page) {
			this.fliter.page = page//通过改变数据中的page来进行数据库交互
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
							//通过传入的id来删除需要删除的内容
							this.fliter.data6.splice(index, 1);
							this.getData()
						})
						this.$Modal.remove();
					}, 500);
				}
			})
		},
		onAdd() {
			this.modal6 = true,//打开对话框
			Object.assign(this.$data.formValidate, this.$options.data().formValidate)//进行数据新的结合，吧原来的空数据赋值到当前表格
		},
		handleSubmit() {
				console.log(this.formValidate)
				this.formValidate.type=this.type
				this.formValidate.cateId=this.cateId
				this.formValidate.date=new Date()
				//把cateID,type分类，时间更新等附加上去
				this.$http.post(`http://localhost:3000/${this.apimodel}/data`, this.formValidate).then(res => {
					this.getData()
					this.modal6 = false;
					this.formValidate.type="";
				})

		}
	}
}