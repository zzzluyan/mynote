<template>
	<div id="note-sort">	
		<ul>
			<li v-for="sort of noteSorts" v-bind:key="sort.noteSortId">
				<!-- <p>{{ sort.noteSortName }}</p> -->
				<note-name class="noteName" v-bind:note-sort-name="sort.noteSortName"></note-name>
				<note-list class="noteList" v-bind:note-list="sort.noteList"></note-list>
				<hr>
			</li>
		</ul>
		<input type="text" v-model="noteTitle">
		<button v-on:click="addNewSort">add new sort title</button>
	</div>
</template>

<style>
	.noteName {
		float: left;
	} 
	.noteList {
		/*float: right;*/
	}
</style>



<script>
	import NoteList from './NoteList';
	import NoteName from './NoteName';
	import axios from 'axios';
	//这个是一个父组件
	export default {
		name: 'NoteSort',
		data () {
			return {
				noteSorts: [],
				noteTitle: '',
			}
		},
		components: {
			NoteList,
			NoteName
		},
		// prop:['noteList'],
		mounted () {
			let _this = this;
			let data;
			axios.get('../static/data/notedata.json')
				.then(function(res){
				// 为了确保json数据格式正确
				// 先将其转为字符串，再转为对象
				data = JSON.parse(JSON.stringify(res.data));
				_this.noteSorts = data.notedata;

				// for(let item of _this.noteSorts){
				// 	console.log(item.noteSortName);
				// }
			});
		},
		// watch: {
		// 	noteSorts (newVal,oldVal){		
		// 		let data = newVal.slice(newVal.length-1 ,newVal.length);
		// 		console.log(data);
		// 		// axios.post('../static/data/notedata.json',data)
		// 		// 	.then(function(res){
		// 		// 		console.log(res.status);
		// 		// 	});
		// 	}
		// },
		methods: {
			addNewSort () {
				if (!this.noteTitle) {
					alert('便签类名不能为空');
					return;
				}
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour = date.getHours();
				let min = date.getMinutes();
				let sec = date.getSeconds();
				let id= "" + year + month + day + hour + min + sec;
				// console.log(id);
				this.noteSorts.push({
					noteSortId: id,
					noteSortName: this.noteTitle,
				});
				this.noteTitle = '';
			}
		}
	}
</script>