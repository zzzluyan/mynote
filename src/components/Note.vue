<template>
	<div id="note">
		<p id="note-title">{{ NoteTitle }}</p>
		<p id="note-date">{{ NoteDate }}</p>
		
		<!-- <div id="note-content">{{ NoteContent }}</div> -->
		<textarea name="note-content" id="edit-note-content" cols="30" rows="10" v-model="NoteContent">{{ NoteContent }}</textarea>
	</div>

</template>

<script>
	export default {
		name: 'Note',
		data () {
			return {
				NoteId: '1',
				NoteTitle: 'this is title',
				NoteDate: 'this is date',
				NoteContent: 'this is my first note'
			}
		},
		methods: {
			deleteNote () {
				alert('delete note button');
			},
			editNote () {
				alert('edit note button');
			}
		}
	}
</script>

<style>
	
</style>