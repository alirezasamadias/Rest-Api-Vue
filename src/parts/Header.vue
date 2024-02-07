<template>
    <nav class="navbar">
        <ul class="menu container">
            <li class="menu-item">
                <router-link active-class="active" :to="{name:'home'}" class="menu-item-link btn-primary">home</router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'user-index'}" class="menu-item-link btn-primary">users</router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'post-index'}" class="menu-item-link btn-primary">posts</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>
.menu {
    column-gap: 5%;
    text-transform: capitalize;
}

.menu-item-link {
    min-width: 80px;
    min-height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
}

.active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    box-shadow: var(--shadow-primary);
}

/* Responsive */
@media (max-width: 768px) {
    .menu-item-link {
        transform: scale(0.85);
    }
}
</style>