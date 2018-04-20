<template>
	<div id="note">
		<el-row>
			<el-col :span="6" :offset="2">	
				<div class="sort">
					<note-sort v-bind:note-sorts="noteSorts" v-on:addNewList="addNoteList" v-on:showList="showMyList"></note-sort>
				</div>
			</el-col>
			<el-col :span="12" :offset="1">	
				<div v-for="item of noteLists" class="list" v-bind:key="item.noteSortId">
					<note-list v-bind:note-list="item.noteList" v-if="showId==item.noteSortId" ></note-list>
				</div>
			</el-col>
		</el-row>
	</div>

</template>


<style>

</style>


<script>
	import NoteList from './NoteList'
	import NoteSort from './NoteSort'
	import axios from 'axios'

	export default {
		name: 'Note',
		data () {
			return {
				noteSorts: [],
				noteLists: [],
				showId: '201802003298',
				// isShow: 0
			}
		},
		components: {
			NoteSort,
			NoteList
		},
		mounted () {
			let _this = this;
			let data;
			axios.get('../static/data/notedata.json')
			.then(function(res){
				data = JSON.parse(JSON.stringify(res.data));
				for( let item of data.notedata ){
					_this.noteSorts.push({
						noteSortId: item.noteSortId,
						noteSortName: item.noteSortName
					});
					_this.noteLists.push({
						noteSortId: item.noteSortId,//便于后期映射的ID对应
						noteList: item.noteList
					});
				}
				// console.log(_this.noteLists);
			});
		},
		methods: {
			//通过NoteSort自子组件触发事件调用，用于生成新便签类名的列表数组
			addNoteList (id) {
				this.noteLists.push({
					noteSortId: id,
					noteList: []
				});
			},
			showMyList (id) {
				// alert(id);
				this.showId = id;
			}
		}
	}
</script>

