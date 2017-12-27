<template>
		<div class="content">
			<div class="content-body">
				<Table border :columns="columns7" :data="fliter.data6"></Table>
			</div>
			<div class="content-foot"> 
				<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
			</div>
		<Modal v-model="modal6" title="留言详情" :loading="loading" @on-ok="asyncOK">
			<div class="message-date">
				<h3>{{this.theinfo.title}}</h3>
				<p>{{this.theinfo.content}}</p>
				<p>{{this.theinfo.name}}</p>
				<p>{{this.theinfo.telephone}}</p>
				<p>{{this.theinfo.date}}</p>
			</div>
		</Modal>
	</div>
</template>
<script>
	import moment from 'moment'
	export default {
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
								}, 'View'),
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
								}, 'Delete')
							]);
						}
					}
				],
				fliter: {
					data6: [],
					total:0,
					limit:10,
					page:1,
				},
				modal6: false,
				loading: true,
				theinfo:{}
			}
		},
		methods: {
			show(index) {
				this.modal6 = true
				this.theinfo=this.fliter.data6[index]
			},
			asyncOK() {
				setTimeout(() => {
					this.modal6 = false;
				}, 1000);
			},
			remove(index) {
				this.fliter.data6.splice(index, 1);
			},
			getData() {
				this.$http.post("http://localhost:3000/message/list",this.fliter).then(res => {
					let ii=res.data.rows.length
					for(let i=0;i<ii;i++){
						res.data.rows[i].date=moment(res.data.rows[i].date).format("YYYY年MM月DD日HH时mm分ss秒")
					}
					this.fliter.data6 = res.data.rows
					this.fliter.total=res.data.total
				})
			},
			changePage(page){
				this.fliter.page=page
				this.getData()
			}
		},
		created() {
			this.getData()
		}

	}
</script>
<style scoped>
	.content{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.content-body{
		flex: 1;
	}
	.content-foot{
		height: 50px;
		text-align: center;
	}
	.message-date{
		min-height: 600px;
	}
	.message-date h3{
		text-align: center;
		margin-top: 20px;
	}
	p{
		text-align: right;
	}
	p:nth-of-type(1){
		text-indent: 2em;
	}
</style>