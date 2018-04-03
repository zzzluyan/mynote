<template>
	<div id="note">
		<div class="sort">
			<note-sort v-bind:note-sorts="noteSorts"></note-sort>
		</div>
		
		
		<div v-for="item of noteLists" class="list" v-bind:key="item.noteSortId">
			<note-list v-bind:note-list="item.noteList" v-if="item.noteSortId"></note-list>
		</div>
	</div>

</template>


<style>
/*	#note{
		float: left;
	}*/
	.sort {
		float: left;
	}
	.list {
		clear: both;
		float: right;
		width: 30%;
	}
</style>


<script>
	import NoteList from './NoteList';
	import NoteSort from './NoteSort';
	import axios from 'axios';

	export default {
		name: 'Note',
		data () {
			return {
				noteSorts: [],
				noteLists: []
			}
		},
		components: {
			NoteSort,
			NoteList
		},
		watch: {
			noteSorts (newval) {
				if( this.noteSorts.length === 0 ) return;
				console.log(this.noteSorts.length);
				console.log(newval);
				this.noteLists.push({
					noteSortId: newval.noteSortId,
					noteList: []
				});
				console.log(newval);
			}
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
						noteSortId: item.noteSortId,
						noteList: item.noteList
					});
				}
				// console.log(_this.noteLists);
			});
		}
	}
</script>

