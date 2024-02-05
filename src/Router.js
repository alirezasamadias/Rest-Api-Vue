import { createRouter, createWebHistory } from 'vue-router';
// Components
import Home from './Pages/Home.vue';
import Users from './Pages/Users.vue';
import UserIndex from './Components/User-Index.vue';
import UserPage from './Components/User-Page.vue';
import EditUser from './Components/Edit-User.vue';
import Post from './Pages/Post.vue';
import PostIndex from './Components/Post-Index.vue';
import PostPage from './Components/Post-Page.vue';
import EditPost from './Components/Edit-Post.vue';
import CreatePost from './Components/Create-Post.vue';

const routes = [
    { path: '/' , name: 'home' , component: Home },

    { path: '/users' , name: 'users' , component: Users , children: [
        { path: '' , name: 'user-index' , component: UserIndex },
        { path: ':id' , name: 'user-page' , component: UserPage }, 
        { path: '/edit-user/:id' , name: 'edit-user' , component: EditUser }
    ]},

    { path: '/posts' , name: 'posts' , component: Post , children: [
        { path: '' , name: 'post-index' , component: PostIndex },
        { path: ':id' , name: 'post-page' , component: PostPage }, 
        { path: '/edit-post/:id' , name: 'edit-post' , component: EditPost },
        { path: '/create-post' , name: 'create-post' , component: CreatePost },  
    ]}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;