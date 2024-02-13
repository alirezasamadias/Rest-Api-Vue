<template>
    <section class="card">
        <span class="card-id">{{props.cardId}}</span>

        <slot name="cardTitle"></slot>
        
        <slot name="cardBody"></slot>

        <slot name="cardBtn"></slot>
    </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["cardId"]);
</script>

<style>
.card {
    width: 100%;
    padding: 30px;
    background-color: #9f9f9f91;
    backdrop-filter: blur(80px) saturate(1.4);
    border-radius: 20px;
    text-align: left;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 15px;
    position: relative;
}

.card-id {
    width: 40px;
    height: 40px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-title {
    padding-right: 40px;
}

.card-body {
    margin-bottom: 30px;
}

.card-list {
    padding: 10px 6%;
}

.card-list-item {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}

.card-btn {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.card-btn .btn {
    width: 35%;
}

/* Responsive */
@media (max-width:600px) {
    .card-id {
        transform: scale(0.85);
    }
}
</style>