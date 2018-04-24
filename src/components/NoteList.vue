<template>
	<div class="note-list">
		<!-- <el-container>
			<el-container>
				<el-header>
					<el-input clearable type="text" v-model="title"></el-input>
				</el-header>
				<el-main>
					<el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" name="listContent" class="list-content" cols="30" rows="10" v-model="content"></el-input>
				</el-main>
			</el-container>
			<el-aside>
				<el-button v-on:click="addNewList">add new list</el-button>
			</el-aside>
		</el-container> -->
		<el-row>
			<el-col :span="5">
				<el-input clearable type="text" v-model="title" placeholder="title..."></el-input>
			</el-col>
			<el-col :span="18">
				<el-input name="listContent" class="list-content" cols="30" rows="10" v-model="content" placeholder="content..."></el-input>
			</el-col>
			<el-col :span="1">
				<el-button v-on:click="addNewList">add new list</el-button>
			</el-col>
		</el-row>
		
		
		<el-row class="list">
			<div v-for="(item,index) of lists" v-bind:key="item.listId">
				<el-col :span="9">
					<p>日期: {{ item.listDate }}</p>
				</el-col>
				<el-col :span="15">
					<p>便签标题: {{ item.listTitle }}</p>
				</el-col>
				<el-row>
					<p>{{ item.listContent }}</p>
				</el-row>
				<el-row>
					<el-button class="delete-note" v-on:click="deleteNote(index)">delete</el-button>
					<el-button class="edit-note" v-on:click="editNote(index)">edit</el-button>
				</el-row>
				
			</div>
		</el-row>
		
	
	</div>
</template>


<style>
	.list {
		padding: 10px;
		background-color: #B3C0D1;
		border-left: 5px solid #333;
		border-radius: 10px;
	}
</style>

<script>
	export default {
		name: 'NoteList',
		data () {
			return {
				title: '',
				content: '',
				lists: this.noteList, //当props数据当作数据输出，固在子组件初始化props数据
				// id: this.NoteList.noteSortId
			}
		},
		props:['noteList'],
		methods: {
			addNewList () {
				// console.log(this.noteList);
				if (!this.title || !this.content) {
					alert('便签内容不能为空');
					return;
				}
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let listdate = '' + year + '/' + month + '/' + day;  
				this.noteList.unshift({
					listId: "" + year + month + day + parseInt(Math.random()*100),
					listDate: listdate,
					listTitle: this.title,
					listContent: this.content
				});
				this.title = '';
				this.content = '';
				// this.$emit('showlist');
			},
			deleteNote (index) {
				// console.log(this);
				let back = confirm ('delete the note?');
				if (back) {
					this.noteList.splice(index,1);
					alert('deleted successfully');
					return;
				} else {
					alert('cancel');
					return;
				}

			},
			editNote (index) {
				// console.log(this.noteList[index]);
				this.title = this.noteList[index].listTitle;
				this.content = this.noteList[index].listContent;
				this.noteList.splice(index,1);
			}
		}

	}
</script>