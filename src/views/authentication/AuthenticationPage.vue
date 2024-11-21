<template>
    <InputText v-model="user.username"></InputText>
    <InputText v-model="user.password"></InputText>
    <Button :label="label" @click="authenticate(user)"></Button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { InputText } from 'primevue';
import { Button } from 'primevue';
import { useUserService } from '@/composables/utilisateur/userService';
import type { User } from '@/models/User.model';

const { authenticate } = useUserService();
const user = ref<User>({ username: "", password: "" })
const label = "Connect";
</script>