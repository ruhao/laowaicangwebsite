<template>
	<div class="content">
		<Input v-model="fliter.name">
		<Button slot="append" icon="ios-search" @click="search"></Button>
		</Input>
		<div class="content-body">
			<Table border :columns="columns7" :data="fliter.data6"></Table>
		</div>
		<div class="content-foot">
			<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
		</div>
		<Modal v-model="modal6" title="留言详情" :loading="loading" @on-ok="asyncOK">
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
				<FormItem label="人才类型" prop="title">
					<Input v-model="formValidate.title" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="数量" prop="title">
					<Input v-model="formValidate.num" placeholder="Enter your num"></Input>
				</FormItem>
				<FormItem label="学历要求" prop="title">
					<Input v-model="formValidate.education" placeholder="Enter your education"></Input>
				</FormItem>
				<FormItem label="年龄要求" prop="title">
					<Input v-model="formValidate.age" placeholder="Enter your age"></Input>
				</FormItem>
				<FormItem label="薪资" prop="title">
					<Input v-model="formValidate.pay" placeholder="Enter your pay"></Input>
				</FormItem>
				<FormItem label="语言要求" prop="title">
					<Input v-model="formValidate.language" placeholder="Enter your language"></Input>
				</FormItem>
				<FormItem label="性别" prop="title">
					<Input v-model="formValidate.sex" placeholder="Enter your sex"></Input>
				</FormItem>
				<FormItem label="联系电话" prop="telephone">
					<Input v-model="formValidate.telephone" placeholder="Enter your telephone"></Input>
				</FormItem>
				<FormItem label="工作地址" prop="city">
					<Select v-model="formValidate.site" placeholder="Select your site">
						<Option value="杭州">杭州</Option>
					</Select>
				</FormItem>
				<FormItem label="详细要求" prop="detail">
					<Input v-model="formValidate.detail" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
					<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>
<script>
	import Common from '../common/hm.js'
	export default {
		mixins: [Common],
		data() {
			return {
				apimodel: 'hr',
				columns7: [{
						title: '职位',
						key: 'title'
					}, {
						title: '数量',
						key: 'num'
					}, {
						title: '工作地址',
						key: 'site'
					}, {
						title: '联系人电话',
						key: 'telephone'
					},
					{
						title: '发布时间',
						key: 'date'
					},
					{
						title: 'Action',
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
					cateid:"5a447f5b039f0501acc5cd53"
				},
				formValidate: {
					title: '',
					num: '',
					site: '',
					education: '',
					detail: [],
					date: '',
					age: '',
					pay: '',
					language: '',
					telephone: '',
					sex: ''
				},
				ruleValidate: {
					title: [{
						required: true,
						message: 'The name cannot be empty',
						trigger: 'blur'
					}],
					site: [{
						required: true,
						message: 'Please select the city',
						trigger: 'change'
					}],
					detail: [{
							required: true,
							message: 'Please enter a personal introduction',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 15,
							message: 'Introduce no less than 15 words',
							trigger: 'blur'
						}
					],
					telephone: [{
							required: true,
							message: 'Please enter a personal introduction',
							trigger: 'blur'
						},
						{
							validator:this.validateMobile,
							trigger: 'blur'
						}]
				}
			}
		},
		methods: {
			handleSubmit() {
				console.log(this.formValidate)
			},
			validateMobile(rule, value, callback) {
				let reg = /^1[3|5|7|8]\d{9}$/
				if(reg.test(value)) {
					callback();
				} else {
					callback(new Error('Please enter the correct phone number'));
				}
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			}
		},
		created() {
			this.cateid=this.$route.params.id
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
</style>