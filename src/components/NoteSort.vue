<template>
	<div id="note-sort">
		<input type="text" v-model="noteTitle" >
		<button v-on:click="addNewSort">add new sort title</button>	
		<ul>
			<li v-for="sort of noteSorts" v-bind:key="sort.noteSortId" v-bind:id="sort.noteSortId" v-on:click="showNote">
				{{ sort.noteSortName }}
			</li>
		</ul>
	</div>
</template>

<style>
	#note-sort > ul {
		list-style-type: none;
	}
</style>



<script>
	import NoteName from './NoteName';
	export default {
		name: 'NoteSort',
		data () {
			return {
				noteTitle: '',
			}
		},
		props: ['noteSorts'],
		methods: {
			addNewSort () {
				if ( !this.noteTitle ) {
					alert('not null!');
					return;
				}
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth();
				let day = date.getDate();
				let hour = date.getHours();
				let min = date.getMinutes();
				let sec = date.getSeconds();
				let id = "" + year + month + day + hour + min + sec;
				this.noteSorts.push({
					noteSortId: id,
					noteSortName: this.noteTitle,
				}); 
				this.noteTitle = '';
			},
			showNote (e) {
				// console.log(this);
				console.log(e.target.id);
			}
		}
	}
</script>