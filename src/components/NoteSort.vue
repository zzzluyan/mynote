<template>
	<div id="note-sort">
		<input type="text" v-model="noteTitle" >
		<button v-on:click="addNewSort">add new sort title</button>	
		<ul>
			<li class="isShow" v-for="sort of noteSorts" v-bind:key="sort.noteSortId" v-bind:id="sort.noteSortId" v-on:click="showNote" >
				{{ sort.noteSortName }}
			</li>
		</ul>
	</div>
</template>

<style>
	#note-sort > ul {
		list-style-type: none;
	}
	.isShow:hover {
		color: pink;
	}
</style>



<script>
	import NoteName from './NoteName';
	export default {
		name: 'NoteSort',
		data () {
			return {
				noteTitle: '',
				Show: true
			}
		},
		props: ['noteSorts'],
		methods: {
			addNewSort () {
				if ( !this.noteTitle ) {
					alert('not null!');
					return;
				}
				//增加便签分类类表
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
				//列表名增加后，触发notelist增加事件，为新便签开拓新数组空间
				this.$emit('addNewList',id);
			},
			showNote (e) {
				this.$emit('showList',e.target.id);
				// console.log(e);
				// e.target.className = 'isShow';
			}
		}
	}
</script>