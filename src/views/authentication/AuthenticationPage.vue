<template>
    <InputText v-model="user.username"></InputText>
    <InputText v-model="user.password"></InputText>
    <Button :label="label" @click="getToken()"></Button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { InputText } from 'primevue';
import { Button } from 'primevue';
import { useUserService } from '@/composables/utilisateur/userService';
import { useUserConnecteService } from '@/composables/utilisateur/userConnecteService';
import type { User } from '@/model/User.model';

const { authenticate } = useUserService();
const { userConnecte } = useUserConnecteService();

const user = ref<User>({ username: "", password: "" });
const label = "Connect";

async function getToken() {
    userConnecte.value = await authenticate(user.value);
}
</script>