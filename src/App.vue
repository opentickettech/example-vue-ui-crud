<template>
  <div>
    <OtDataGrid :pagination="userList" :columns="columns">
      <template #list-header>
        <OtListHeader
          :pagination="userList"
          searchable
          search-key="name"
          search-placeholder="Placeholder"
          title="Title"
        >
          <template #filters>
            <OtFilters
              :pagination="userList"
            >
            </OtFilters>
          </template>
        </OtListHeader>
      </template>
    </OtDataGrid>
  </div>
</template>
<script setup lang="ts">
import axios, {type AxiosInstance} from "axios";
import {ExampleClient} from "@/crud/exampleClient.ts";
import {type PaginationOptions} from "@openticket/lib-crud";
import {type Ref, ref} from "vue";
import type {OtDataGridColumn} from "@openticket/vue-ui";

const options: PaginationOptions = {
  perPage: 10,
};

const columns: Ref<OtDataGridColumn[]> = ref([{
    key: [ '$data', 'name' ],
    label: "Name",
    type: 'string',
  },
  {
    key: [ '$data', 'guid' ],
    type: "string",
    label: "Guid",
  },
  {
    key: [ '$data', 'email' ],
    type: 'email',
    label: "string",
  },
]);

const http: AxiosInstance = axios.create();

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    const token = 'YOUR-BEARER-TOKEN';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const client = new ExampleClient(http);

const userList = ref(client.users.list(options));

( async () => {
  await userList.value.loadPage(1);
})()

</script>

<style scoped>
</style>
