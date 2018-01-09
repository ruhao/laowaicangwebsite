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
					<Input v-model="formValidate.title" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="年月">
					<Input v-model="formValidate.year" placeholder="like 17-09"></Input>
				</FormItem>
				<FormItem label="具体几号">
					<Input v-model="formValidate.day" placeholder="like 07"></Input>
				</FormItem>
				<FormItem label="具体内容">
					<Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your education"></Input>
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
</template>
<script>
	import Common from '../common/hm.js'
	import Formimg from '../common/formimg.js'
	export default {
		mixins: [Common, Formimg],
		data() {
			return {
				apimodel: "news",
				type: "1",
				cateId: "5a4db8e602847d17b42b0937",
				columns7: [{//建表格
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: '主题',
						key: 'title'
					},
					{
						title: '年月',
						key: 'year'
					}, {
						title: '具体日期',
						key: 'day'
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
					type: "1",
					title: "",
				},
				ruleValidate: {
					
				},
				formValidate: {//表格数据绑定
					title: "",
					content: "",
					year: "",
					imgurl: "",
					day: "",
					type:"",
				},
				ids: []
			}
		},
		methods: {
			//图片上传成功时粗发事件
			onSuccess(res, file) {
				if(this.formValidate.imgurl) {
				} else {
					this.formValidate.imgurl = "http://localhost:3000/avatar-" + file.name
				}
			},
			del1() {
				this.formValidate.imgurl = ""
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
		width: 142px;
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