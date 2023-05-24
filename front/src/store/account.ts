import { defineStore } from 'pinia';
import http from './http';
import { Response } from '@/types';
import { useMenuStore } from './menu';

export interface Profile {
  account: Account;
  permissions: string[];
  role: string;
}
export interface Account {
  name: string;
  age: number;
  avatar: string;
  gender: string;
  email: string;
}

export type TokenResult = {
  token: string;
  expires: number;
};
export const useAccountStore = defineStore('account', {
  state() {
    return {
      account: {} as Account,
      permissions: [] as string[],
      role: '',
      logged: true,
    };
  },
  actions: {
    async login(username: string, password: string) {
      return http
        .request<TokenResult, Response<TokenResult>>('/login', 'post_json', { username, password, 'school':'同济大学' })
        .then(async (response) => {
          // console.log(response)
          if (response.code === 0) {
            this.logged = true;
            // console.log(response)
            http.setAuthorization(`Bearer ${response.data.token}`, new Date(response.data.expires));
            
            await useMenuStore().getMenuList();
            return response;
          } else if (response.code===1){
            // console.log(response)
            return response;
          }
          else{
            return Promise.reject(response.message)
          }
        });
    },
    async logout() {
      return new Promise<boolean>((resolve) => {
        http.removeAuthorization();
        this.logged = false;
        resolve(true);
      });
    },
    async activate(username:string,password:string,code:number) {
      return http
      .request<any,Response <any>>('/activate', 'post_json', { username, password, code })
      .then(async (response) => {
        // console.log(response)
        return response
      });
    },
    async profile() {
      return http.request<Account, Response<Profile>>('/account', 'get').then((response) => {
        if (response.code === 0) {
          const { account, permissions, role } = response.data;
          this.account = account;
          this.permissions = permissions;
          this.role = role;
          return response.data;
        } else {
          return Promise.reject(response);
        }
      });
    },
    setLogged(logged: boolean) {
      this.logged = logged;
    },
  },
});
