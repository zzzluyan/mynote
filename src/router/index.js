import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Note from '@/components/Note';
import NoteSort from '@/components/NoteSort';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      components: {
      	note: Note,
      	notesort: NoteSort
      }
    }
  ]
})
