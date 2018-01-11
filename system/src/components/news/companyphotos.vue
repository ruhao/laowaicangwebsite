<template>
	<div class="content">
		<Input v-model="fliter.title">
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
				<FormItem label="标题">
					<Input v-model="formValidate.content" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="时间">
					<Input v-model="formValidate.detaildate" placeholder="like 17-09"></Input>
				</FormItem>
				<div v-if="!(formValidate.zimgurl1&&formValidate.zimgurl2&&formValidate.zimgurl3&&formValidate.zimgurl4&&formValidate.zimgurl5)">
				<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
					<div style="padding: 20px 0">
						<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
						<p>点击或将文件拖拽到这里上传</p>
					</div>
				</Upload>
				</div>
				<FormItem>
					<div class="madelbox">
						<div class="madelbox1">
							<span v-if="formValidate.zimgurl1" class="control1" @click="del1">X</span>
							<img :src="formValidate.zimgurl1">
						</div>
						<div v-if="formValidate.zimgurl2" class="madelbox1">
							<span v-if="formValidate.zimgurl1" class="control1" @click="del2">X</span>
							<img :src="formValidate.zimgurl2">
						</div>
						<div v-if="formValidate.zimgurl3" class="madelbox1">
							<span v-if="formValidate.zimgurl1" class="control1" @click="del3">X</span>
							<img :src="formValidate.zimgurl3">
						</div>
						<div v-if="formValidate.zimgurl4" class="madelbox1">
							<span v-if="formValidate.zimgurl1" class="control1" @click="del4">X</span>
							<img :src="formValidate.zimgurl4">
						</div>
							<div v-if="formValidate.zimgurl5" class="madelbox1">
							<span v-if="formValidate.zimgurl1" class="control1" @click="del5">X</span>
							<img :src="formValidate.zimgurl5">
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
</template>
<script>
	import Common from '../common/hm.js'
	import Formimg from '../common/formimg.js'
	export default {
		mixins: [Common, Formimg],
		data() {
			return {
				apimodel: "news",
				type: "4",
				cateId: "5a4db8fd02847d17b42b0939",
				columns7: [{//建表格
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: '主题',
						key: 'content'
					},
					{
						title: '时间',
						key: 'detaildate'
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
					type: "4",
					title: "",
				},
				ruleValidate: {
					
				},
				formValidate: {//表格数据绑定
					content: "",
					detaildate: "",
					zimgurl1: "",
					zimgurl2: "",
					zimgurl3: "",
					zimgurl4: "",
					type:"",
				},
				ids: []
			}
		},
		methods: {
			//图片上传成功时粗发事件
			onSuccess(res, file) {
				if(!this.formValidate.zimgurl1) {
					this.formValidate.zimgurl1 = "http://localhost:3000/avatar-" + file.name
				} else if(!this.formValidate.zimgurl2){
					this.formValidate.zimgurl2 = "http://localhost:3000/avatar-" + file.name
				} else if(!this.formValidate.zimgurl3){
					this.formValidate.zimgurl3 = "http://localhost:3000/avatar-" + file.name
				} else if(!this.formValidate.zimgurl4){
					this.formValidate.zimgurl4 = "http://localhost:3000/avatar-" + file.name
				} else if(!this.formValidate.zimgurl5){
					this.formValidate.zimgurl5 = "http://localhost:3000/avatar-" + file.name
				}
			},
			del1() {
				this.formValidate.zimgurl1 = ""
			},
			del2() {
				this.formValidate.zimgurl2 = ""
			},
			del3() {
				this.formValidate.zimgurl3 = ""
			},
			del4() {
				this.formValidate.zimgurl4 = ""
			},
			del5() {
				this.formValidate.zimgurl5 = ""
			}
		},
		created() {
			this.getData()
		}
	}
</script>
<style scoped>
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