<template>
	<div class="note-list">
		<input type="text" v-model="title">
		<textarea name="listContent" class="list-content" cols="30" rows="10" v-model="content"></textarea>
		
		<button v-on:click="addNewList">add new list</button>
		<div v-for="(item,index) of lists" v-bind:key="item.listId">
			<p>{{ item.listDate }}</p>
			<p>{{ item.listTitle }}</p>
			<p>{{ item.listContent }}</p>
			<button class="delete-note" v-on:click="deleteNote(index)">delete</button>
			<button class="edit-note" v-on:click="editNote(index)">edit</button>
		</div>
	
	</div>
</template>

<style>
	
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