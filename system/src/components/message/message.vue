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
			<div class="message-date">

				<div>{{this.theinfo.title}}</div>
				<div>{{this.theinfo.content}}</div>
				<div class="bottom">{{this.theinfo.name}}</div>
				<div class="bottom">{{this.theinfo.telephone}}</div>
				<div class="bottom">{{this.theinfo.date}}</div>

			</div>
		</Modal>
	</div>
</template>
<script>
	import Common from '../common/hm.js'
	export default {
		mixins: [Common],
		data() {
			return {
				columns7: [{
						title: '姓名',
						key: 'name',
						render: (h, params) => {
							return h('div', [
								h('Icon', {
									props: {
										type: 'person'
									}
								}),
								h('strong', params.row.name)
							]);
						}
					},
					{
						title: '主题',
						key: 'title'
					},
					{
						title: '电话',
						key: 'telephone'
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
								}, '查看')
							]);
						}
					}
				],
				fliter: {
					data6: [],
					total: 0,
					limit: 12,
					page: 1,
					name: ""
				},
				apimodel:'message'
			}
		},
		methods: {

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
</style>