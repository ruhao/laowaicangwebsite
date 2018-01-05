<template>
	<div class="content">
		<Input v-model="fliter.edpattern">
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
				<FormItem label="培训方式" prop="edpattern">
					<Input v-model="formValidate.edpattern" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="选该方式的理由" prop="edpattern">
					<Input v-model="formValidate.edcontent" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your num"></Input>
				</FormItem>
				<FormItem label="培训内容" prop="edpattern">
					<Input v-model="formValidate.edreson" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your education"></Input>
				</FormItem>
				<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
					<div style="padding: 20px 0">
						<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
						<p>点击或将文件拖拽到这里上传</p>
					</div>
				</Upload>
				<FormItem>
					<div class="madelbox">
						<div v-if="formValidate.edimgurl" class="madelbox1">
							<span class="control1" @click="del1">X</span>
							<img :src="formValidate.edimgurl">
						</div>
						<div v-if="formValidate.edimgurl1" class="madelbox1">
							<span class="control1" @click="del2">X</span>
							<img :src="formValidate.edimgurl1">
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
				apimodel: 'hr',
				type: "2",
				cateId: "5a447f65039f0501acc5cd54",
				columns7: [{
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: '培训方式',
						key: 'edpattern'
					},
					{
						title: '发布时间',
						key: 'date'
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
					type: "2",
					title: "",
					edpattern: "",
				},
				ruleValidate: {
					edpattern: [{
						required: true,
						message: 'The name cannot be empty',
						trigger: 'blur'
					}]
				},
				formValidate: {
					edpattern: "",
					edcontent: "",
					edreson: "",
					edimgurl: "",
					edimgurl1: ""
				},
				ids: []
			}
		},
		methods: {
			onSuccess(res, file) {
				if(this.formValidate.edimgurl) {
					this.formValidate.edimgurl1 = "http://localhost:3000/avatar-" + file.name
				} else {
					this.formValidate.edimgurl = "http://localhost:3000/avatar-" + file.name
				}
			},
			del1() {
				this.formValidate.edimgurl = ""
			},
			del2() {
				this.formValidate.edimgurl1 = ""
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
		right: 15px;
		top: 0;
		cursor: pointer;
	}
	
	.control1:hover {
		color: red;
	}
</style>