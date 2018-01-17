export default {
	methods: {
		changepage(value, index) {
			//通过改变page来改变数据的第几页
			this.fliter.page = value
			this.getPage(index)
			this.getData()
		},
		prev() {
			if(this.li7 >= 7) {//如果分页数大于7
				if(this.fliter.page > 1) {
					this.fliter.page = this.fliter.page - 1//向前一页
					let index;
					if(this.fliter.page <= 3) {//如果小于3页就不需要经验样式变化
						index = this.fliter.page;
						this.getPage(index);
					} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {//当到中间部分时前后的不显示部分用。。。代替
						index = 5;
						this.getPage(index);
					} else if(this.fliter.page >= this.li7 - 2) {//分页在后三个的时候和前三一样
						index = 7 - (this.li7 - this.fliter.page);
						this.getPage(index);
					}
				} else {
					this.fliter.page = 1;
				}
				this.getData()
			} else {//总页数小于七 ，有多少就显示多少
				if(this.fliter.page <=1) {
					this.fliter.page = 1
					let index = 1
					this.getPage(index);
				} else {
					this.fliter.page = this.fliter.page - 1
					let index = this.fliter.page
					this.getPage(index);
				}
				this.getData()
			}
		},
		next() {
			if(this.li7 >= 7) {//如果分页数大于7
				if(this.fliter.page < this.li7) {
					this.fliter.page = this.fliter.page + 1//向后一页
					let index;
					if(this.fliter.page <= 3) {//如果小于3页就不需要经验样式变化
						index = this.fliter.page
						this.getPage(index);
					} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {//当到中间部分时前后的不显示部分用。。。代替
						index = 5;
						this.getPage(index)
					} else if(this.fliter.page >= this.li7 - 2) {//分页在后三个的时候和前三一样
						index = 7 - (this.li7 - this.fliter.page);
						this.getPage(index)
					}
				} else {
					this.fliter.page = this.li7
				}
				this.getData()
			} else {//总页数小于七 ，有多少就显示多少
				if(this.fliter.page >= this.li7) {
					this.fliter.page = this.li7
					let index = this.li7
					this.getPage(index);
				} else {
					this.fliter.page = this.fliter.page + 1
					let index = this.fliter.page
					this.getPage(index);//调用分页
				}
				this.getData()
			}
		},
		getPage(index) {
			if(this.li7 >= 7) {//如果分页数大于7
				let ii = document.getElementsByClassName("li").length
				if(this.fliter.page <= 3) {//通过选中分页是前三页，则视图层如下
					this.li2 = 2//通过改变数据来操作视图层
					this.li3 = 3
					this.li4 = 4
					this.li5 = 5
					this.li6 = "..."
					for(let i = 0; i < ii; i++) {
						document.getElementsByClassName("li")[i].id = ""
					}
					document.getElementsByClassName("li")[index - 1].id = "active"
				} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {//如果选中的视图层是中间部分
					this.li2 = "..."
					this.li3 = this.fliter.page - 1
					this.li4 = this.fliter.page
					this.li5 = this.fliter.page + 1
					this.li6 = "..."
					if(this.fliter.page > 4) {//通过传值来给予和清空id
						for(let i = 0; i < ii; i++) {
							document.getElementsByClassName("li")[i].id = ""
						}
						document.getElementsByClassName("li")[3].id = "active"//大于四的由于会有视图层的变化，所以id停留在中间的固定位置
					} else if(this.fliter.page == 3) {

						for(let i = 0; i < ii; i++) {
							document.getElementsByClassName("li")[i].id = ""
						}
						document.getElementsByClassName("li")[index - 1].id = "active"//页数等于三说明是向前翻，小于三时，试图不在变化，固定id不需固定在中间，放在当前页面即可
					}

				} else if(this.fliter.page >= this.li7 - 2) {//第N页为后三页的时候
					this.li2 = "..."
					this.li3 = this.li7 - 4
					this.li4 = this.li7 - 3
					this.li5 = this.li7 - 2
					this.li6 = this.li7 - 1
					for(let i = 0; i < ii; i++) {
						document.getElementsByClassName("li")[i].id = ""
					}
					document.getElementsByClassName("li")[index - 1].id = "active"//id给在相应的页面数上
				}
			} else {
				let ii = document.getElementsByClassName("li").length
				for(let i = 0; i < ii; i++) {
					document.getElementsByClassName("li")[i].id = ""
				}
				document.getElementsByClassName("li")[index - 1].id = "active"
			}
		},
		getData() {
			this.$http.post(`http://localhost:3000/${this.apimodel}/list`, this.fliter).then(res => {//获取数据
				let ii = res.data.rows.length
				for(let i = 0;i<ii;i++){
					res.data.rows[i].num = i
				}
				this.fliter.data6 = res.data.rows
				this.li7 = res.data.pages
				if(this.li7 < 7) {
					for(let i = 1; i < this.li7; i++) {
						this.pagenum.push(i)
					}
				}
				
			})
		}
	},
}