import { defineStore } from "pinia";
import http from "./http";
import { Response } from '@/types';


export const useExperimentStore = defineStore('experiment', {
    state() {
      return {
        // account: {} as Account,
        permissions: [] as string[],
        role: '',
        logged: true,
      };
    },
    actions: {
        async getExperiment(id:number) {
            return http
              .request<any, Response<any>>(`/experiment/${id}`, 'GET')
              .then((res) => {
                console.log(res.data)
                return res.data;
              })
          }
    }
  });