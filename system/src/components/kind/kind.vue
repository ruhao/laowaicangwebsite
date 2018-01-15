<template>
	<div>
		<Tree :data="data5" :render="renderContent"></Tree>
		<Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
			<Form :model="formItem" :label-width="80">
				<FormItem label="分类名称">
					<Input v-model="formItem.text" placeholder="Enter something..."></Input>
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				modal1: false,
				sure: "",
				formItem: {
					text: '',
					parentId: "",
				},
				kinddata: "",
				data5: [{
					text: '',
					id: '',
					expand: true,
					parentId: "",
					render: (h, {
						root,
						node,
						data
					}) => {
						return h('span', {
							style: {
								display: 'inline-block',
								width: '100%'
							}
						}, [
							h('span', [
								h('Icon', {
									props: {
										type: 'ios-folder-outline'
									},
									style: {
										marginRight: '8px'
									}
								}),
								h('span', data.text)
							]),
							h('span', {
								style: {
									display: 'inline-block',
									float: 'right',
									marginRight: '52px'
								}
							}, [
								h('Button', {
									props: Object.assign({}, this.buttonProps, {
										icon: 'ios-plus-empty',
										type: 'primary'
									}),
									style: {
										width: '52px'
									},
									on: {
										click: () => {
											this.append(data)
										}
									}
								})
							])
						]);
					},
					children: []
				}],
				buttonProps: {
					type: 'ghost',
					size: 'small',
				}
			}
		},
		methods: {
			renderContent(h, {
				root,
				node,
				data
			}) {
				return h('span', {
					style: {
						display: 'inline-block',
						width: '100%'
					}
				}, [
					h('span', [
						h('Icon', {
							props: {
								type: 'ios-paper-outline'
							},
							style: {
								marginRight: '8px'
							}
						}),
						h('span', data.text)
					]),
					h('span', {
						style: {
							display: 'inline-block',
							float: 'right',
							marginRight: '32px'
						}
					}, [
						h('Button', {
							props: Object.assign({}, this.buttonProps, {
								icon: 'ios-plus-empty'
							}),
							style: {
								marginRight: '8px'
							},
							on: {
								click: () => {
									this.append(data)
								}
							}
						}),
						h('Button', {
							props: Object.assign({}, this.buttonProps, {
								icon: 'ios-minus-empty'
							}),
							style: {
								marginRight: '8px'
							},
							on: {
								click: () => {
									this.remove(root, node, data)
								}
							}
						}),
						h('Button', {
							props: Object.assign({}, this.buttonProps, {
								icon: 'gear-a'
							}),
							on: {
								click: () => {
									this.update(root, node, data)
								}
							}
						})
					])
				]);
			},
			append(data) {
				this.modal1 = true,
					Object.assign(this.$data.formItem, this.$options.data().formItem)
				this.formItem.parentId = data.id
				this.sure = "sure"
			},
			remove(root, node, data) {
				this.$Modal.confirm({
					title: '确认删除数据吗',
					content: '删除后这些数据将无法找回',
					loading: true,
					onOk: () => {
						setTimeout(() => {
							this.$http.delete("http://localhost:3000/kind/data/" + data.id).then(res => {
								this.getData()
								this.$Message.info('Clicked ok');
							})
							this.$Modal.remove();
						}, 500);
					}
				})

			},
			update(root, node, data) {
				this.modal1 = true,
					Object.assign(this.$data.formItem, data)
				this.sure = ""
			},
			ok() {

				if(this.sure) {
					this.$http.post("http://localhost:3000/kind/data", this.formItem).then(res => {
						this.getData()
						this.$Message.info('Clicked ok');
					})
				} else {
					console.log(this.formItem)
					this.$http.put("http://localhost:3000/kind/data/" + this.formItem.id, this.formItem).then(res => {
						console.log(this.formItem)
						console.log(2)
						this.getData()
						this.$Message.info('Clicked ok');
					})
				}

			},
			cancel() {
				this.$Message.info('Clicked cancel');
			},
			getData() {
				this.$http.get("http://localhost:3000/kind/data").then(res => {
					this.data5[0].children = [];
					this.kinddata = res.data[0]
					this.data5[0].text = this.kinddata.text
					console.log(this.kinddata)
					this.data5[0].parentId = this.kinddata.parentId
					if(this.kinddata.children) {
						this.starttree(this.kinddata.children, this.data5[0].children)
					}
				})
			},
			starttree(data, Node) {
				let ii = data.length
				for(let i = 0; i < ii; i++) {
					let obj = {
						text: data[i].text,
						expand: true,
						id: data[i]._id,
						parentId: data[i].parentId,
						children: [],
					}
					Node.push(obj)
					if(data[i].children) {
						this.starttree(data[i].children, Node[i].children)
					}
				}
			}
		},
		created() {

			this.getData()
		}
	}
</script>