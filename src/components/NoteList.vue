<template>
	<div id="note-list">
		<input type="text" v-model="title">
		<textarea name="listContent" id="list-content" cols="30" rows="10" v-model="content"></textarea>
		<button v-on:click="addNewList">add new list</button>
		<ul>
			<li v-for="(list,index) in noteList" v-bind:key="list.listId">
				<p>{{ list.listDate }}</p>
				<p>{{ list.listTitle }}</p>
				<p>{{ list.listContent }}</p>
				<button id="delete-note" v-on:click="deleteNote(index)">delete</button>
				<button id="edit-note" v-on:click="editNote(index)">edit</button>
			</li>
		</ul>
	</div>
</template>

<style>
	#note-list {
		/*float: right;*/
	}
</style>



<script>
	export default {
		name: 'NoteList',
		data () {
			return {
				title: '',
				content: ''
			}
		},
		props:['noteList'],
		// mounted (){
			
		// },
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
				this.noteList.push({
					listId: this.length,
					listDate: listdate,
					listTitle: this.title,
					listContent: this.content
				});
				this.title = '';
				this.content = '';
			},
			deleteNote (index) {
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