export default {
	methods: {
		changepage(value, index) {
			this.fliter.page = value
			this.getPage(index)
			this.getData()
		},
		prev() {
			if(this.li7 >= 7) {
				if(this.fliter.page > 1) {
					this.fliter.page = this.fliter.page - 1
					let index;
					console.log(this.fliter.page)
					if(this.fliter.page <= 3) {
						index = this.fliter.page;
						this.getPage(index);
					} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {
						index = 5;
						this.getPage(index);
					} else if(this.fliter.page >= this.li7 - 2) {
						index = 7 - (this.li7 - this.fliter.page);
						this.getPage(index);
					}
				} else {
					this.fliter.page = 1;
				}
				this.getData()
			} else {
				if(this.fliter.page <=1) {
					this.fliter.page = 1
					let index = 1
					this.getPage(index);
				} else {
					this.fliter.page = this.fliter.page - 1
					let index = this.fliter.page
					this.getPage(index);
				}
				console.log(this.fliter.page)
				this.getData()
			}
		},
		next() {
			if(this.li7 >= 7) {
				if(this.fliter.page < this.li7) {
					this.fliter.page = this.fliter.page + 1
					let index;
					if(this.fliter.page <= 3) {
						index = this.fliter.page
						this.getPage(index);
					} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {
						index = 5;
						this.getPage(index)
					} else if(this.fliter.page >= this.li7 - 2) {
						index = 7 - (this.li7 - this.fliter.page);
						this.getPage(index)
					}
				} else {
					this.fliter.page = this.li7
				}
				this.getData()
			} else {
				if(this.fliter.page >= this.li7) {
					this.fliter.page = this.li7
					let index = this.li7
					this.getPage(index);
				} else {
					this.fliter.page = this.fliter.page + 1
					let index = this.fliter.page
					this.getPage(index);
				}
				this.getData()
			}
		},
		getPage(index) {
			if(this.li7 >= 7) {
				let ii = document.getElementsByClassName("li").length
				if(this.fliter.page <= 3) {
					this.li2 = 2
					this.li3 = 3
					this.li4 = 4
					this.li5 = 5
					this.li6 = "..."
					for(let i = 0; i < ii; i++) {
						document.getElementsByClassName("li")[i].id = ""
					}
					document.getElementsByClassName("li")[index - 1].id = "active"
				} else if(this.fliter.page > 3 && this.fliter.page < this.li7 - 2) {

					this.li2 = "..."
					this.li3 = this.fliter.page - 1
					this.li4 = this.fliter.page
					this.li5 = this.fliter.page + 1
					this.li6 = "..."
					if(this.fliter.page > 4) {
						for(let i = 0; i < ii; i++) {
							document.getElementsByClassName("li")[i].id = ""
						}
						document.getElementsByClassName("li")[3].id = "active"
					} else if(this.fliter.page == 3) {

						for(let i = 0; i < ii; i++) {
							document.getElementsByClassName("li")[i].id = ""
						}
						document.getElementsByClassName("li")[index - 1].id = "active"
					}

				} else if(this.fliter.page >= this.li7 - 2) {
					this.li2 = "..."
					this.li3 = this.li7 - 4
					this.li4 = this.li7 - 3
					this.li5 = this.li7 - 2
					this.li6 = this.li7 - 1
					for(let i = 0; i < ii; i++) {
						document.getElementsByClassName("li")[i].id = ""
					}
					document.getElementsByClassName("li")[index - 1].id = "active"
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
			this.$http.post('http://localhost:3000/news/list', this.fliter).then(res => {
				
				this.fliter.data6 = res.data.rows
				console.log(res.data)
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