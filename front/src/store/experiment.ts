import { defineStore } from "pinia";
import http from "./http";
import { Response } from '@/types';

export const useExperimentStore = defineStore('experiment', {
    actions: {
        async getExperiment(id:number) {
            return http
              .request<any, Response<any>>(`/experiment/${id}`, 'GET')
              .then((res) => {
                console.log(res)
                return res.data;
              })
          },
        async getExperimentList() {
            return http
              .request<any, Response<any>>(`/menu/student_experiment`, 'GET')
              .then((res) => {
                console.log(res.data)
                return res.data;
              })
          },
    }
  });