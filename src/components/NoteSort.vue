<template>
	<div id="note-sort">
		<el-row>
			<el-col :span="12">
				<el-input clearable type="text" v-model="noteTitle" ></el-input>
			</el-col>
			<el-col :span="12">
				<el-button v-on:click="addNewSort">add new sort title</el-button>
			</el-col>
		</el-row>
		
		<el-col>
			<ul>
				<li v-for="(sort,index) of noteSorts" v-bind:key="sort.noteSortId" v-bind:id="sort.noteSortId" v-bind:class="showIndex==index?'isShow':''" v-on:click="showNote(index,$event)" >
					{{ sort.noteSortName }}
				</li>
			</ul>
		</el-col>	
		
	</div>
</template>

<style>
	ul {
		list-style-type: none;
	}
	.isShow {
		color: pink;
	}
</style>



<script>
	import NoteName from './NoteName'
	export default {
		name: 'NoteSort',
		data () {
			return {
				noteTitle: '',
				showIndex: 0
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
			showNote (index,e) {
				// console.log(arguments);
				this.$emit('showList',e.target.id);
				this.showIndex = index;
			}
		}
	}
</script>