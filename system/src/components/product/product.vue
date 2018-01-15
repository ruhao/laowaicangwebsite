<template>
	<div class="product">
		<div class="product-left">
			<Tree :data="data1" @on-select-change="cidchance"></Tree>
		</div>
		<div class="product-right">
			<Input v-model="fliter.name">
			<Button slot="append" icon="ios-search" @click="search"></Button>
			<Button type="success" slot="append" style="width: 80px;margin-left: 10px;background: lightgreen;color: white;" @click="onAdd">添加信息</Button>
			<Button type="error" slot="append" style="width: 80px;margin-left: 10px;background: lightcoral;color: white;" @click='onDeletes'>删除选中</Button>
			</Input>

			<div class="content-body">
				<Table border :columns="columns7" :data="fliter.data6" @on-selection-change='onSelection'></Table>
			</div>
			<div class="content-foot">
				<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
			</div>
			<Modal v-model="modal6" title="留言详情" :loading="loading" @on-ok="asyncOK">
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
					<FormItem label="产品名称">
						<Input v-model="formValidate.name" placeholder="Enter your name"></Input>
					</FormItem>
					<FormItem label="产品产地">
						<Input v-model="formValidate.origin" placeholder="Enter your origin"></Input>
					</FormItem>
					<FormItem label="产品描述">
						<Input v-model="formValidate.describe" placeholder="Enter your describe"></Input>
					</FormItem>
					<FormItem label="产品原料">
						<Input v-model="formValidate.ingredient" placeholder="Enter your ingredient"></Input>
					</FormItem>
					<FormItem label="产品质量">
						<Input v-model="formValidate.weight" placeholder="Enter your weight"></Input>
					</FormItem>
					<FormItem label="保质期">
						<Input v-model="formValidate.expiration" placeholder="Enter your expiration"></Input>
					</FormItem>
					<FormItem label="储存环境">
						<Input v-model="formValidate.storaged" placeholder="Enter your storaged"></Input>
					</FormItem>
					<FormItem label="条形码">
						<Input v-model="formValidate.barcode" placeholder="Enter your barcode"></Input>
					</FormItem>
					<FormItem label="特点一">
						<Input v-model="formValidate.title" placeholder="Enter your title"></Input>
						<Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content"></Input>
					</FormItem>
					<FormItem label="特点二">
						<Input v-model="formValidate.title1" placeholder="Enter your title1"></Input>
						<Input v-model="formValidate.content1" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content1"></Input>
					</FormItem>
					<FormItem label="特点三">
						<Input v-model="formValidate.title2" placeholder="Enter your title2"></Input>
						<Input v-model="formValidate.content2" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your content2"></Input>
					</FormItem>
					<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
						<div style="padding: 20px 0">
							<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
							<p>点击或将文件拖拽到这里上传</p>
						</div>
					</Upload>
					<FormItem>
						<div class="madelbox">
							<div v-if="formValidate.imgurl" class="madelbox1">
								<span class="control1" @click="del1">X</span>
								<img :src="formValidate.imgurl">
							</div>
						</div>
					</FormItem>
					<FormItem>
						<div v-if="formValidate.type">
							<Button type="primary" @click="handleUpdate('formValidate')">修改</Button>
						</div>
						<div v-else>
							<Button type="primary" @click="handleSubmit('formValidate')">新增</Button>
						</div>
					</FormItem>
				</Form>
			</Modal>
		</div>
	</div>
</template>

<script>
	import Common from '../common/hm.js'
	import Formimg from '../common/formimg.js'
	export default {
		mixins: [Common, Formimg],
		data() {
			return {
				data1: [{
					title: 'parent 1',
					expand: true,
					id: "",
					type: "",
					children: []
				}],
				apimodel: 'products',
				columns7: [{
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: '产品名字',
						key: 'name'
					},
					{
						title: '产品产地',
						key: 'origin'
					},
					{
						title: '产品描述',
						key: 'describe'
					},
					{
						title: '产品质量',
						key: 'weight'
					}, {
						title: '保质期',
						key: 'expiration'
					},
					{
						title: '储存环境',
						key: 'storaged'
					},
					{
						title: '操作',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show(params.index)
										}
									}
								}, '查看'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									on: {
										click: () => {
											this.remove(params.index)
										}
									}
								}, '删除')
							]);
						}
					}
				],
				fliter: {
					data6: [],
					total: 0,
					limit: 12,
					page: 1,
					name: "",
					type: "",
					cateId: "",
				},
				ruleValidate: {

				},
				formValidate: {
					name: "",
					origin: "",
					describe: "",
					ingredient: "",
					weight: "",
					expiration: "",
					storaged: "",
					title: "",
					content: "",
					title1: "",
					content1: "",
					title2: "",
					content2: "",
					imgurl: "",
					barcode: "",
					type: "",
				},
			}
		},
		methods: {
			onSuccess(res, file) {
				if(this.formValidate.imgurl) {} else {
					this.formValidate.imgurl = "http://localhost:3000/avatar-" + file.name
				}
			},
			del1() {
				this.formValidate.imgurl = ""
			},
			cidchance(rows) {
				this.fliter.type = rows[0].type;
				this.fliter.cateId = rows[0].id;
				this.getcidData()
			},
			getcidData() {
				this.$http.post("http://localhost:3000/products/list", this.fliter).then(res => {
					console.log(res)
				})
			},
			getData1() {
				this.$http.get("http://localhost:3000/kind/data").then(res => {
					this.data1[0].children = [];
					this.data1[0].title = res.data[0].children[5].text;
					this.data1[0].id = res.data[0].children[5]._id;
					this.data1[0].type = res.data[0].children[5].type;
					if(res.data[0].children[5].children) {
						this.starttree(res.data[0].children[5].children, this.data1[0].children)
					}
				})
			},
			starttree(data, Node) {
				let ii = data.length
				for(let i = 0; i < ii; i++) {
					let obj = {
						title: data[i].text,
						expand: true,
						id: data[i]._id,
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
			this.getData1()
		}
	}
</script>

<style scoped>
	.product {
		width: 100%;
		height: 100%;
		display: flex;
	}
	
	.product-left {
		width: 250px;
		border-right: 1px #CCCCCC solid;
	}
	
	.product-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.content-body {
		flex: 1;
		margin-top: 20px;
	}
	
	.content-foot {
		height: 50px;
		text-align: center;
	}
	
	.message-date {
		min-height: 550px;
		display: flex;
		flex-direction: column;
		padding-bottom: 50px;
	}
	
	.message-date div:nth-of-type(1) {
		text-align: center;
		margin-top: 20px;
		height: 30px;
		font-size: 22px;
		font-weight: 600;
		text-shadow: 1px 1px 1px #999999;
	}
	
	.message-date div:nth-of-type(2) {
		text-align: left;
		text-indent: 2em;
		flex: 1;
		margin-top: 30px;
		color: black;
	}
	
	.bottom {
		width: 250px;
		margin-left: 300px;
		height: 20px;
		text-align: left;
		margin-top: 5px;
	}
	
	.madelbox {
		height: 80px;
		margin-top: 10px;
		display: flex;
		width: 400px;
	}
	
	.madelbox img {
		height: 100%;
	}
	
	.madelbox1 {
		width: 80px;
		margin-left: 10px;
		position: relative;
		overflow: hidden;
	}
	
	.control1 {
		position: absolute;
		right: 5px;
		top: -5px;
		cursor: pointer;
	}
	
	.control1:hover {
		color: red;
	}
</style>