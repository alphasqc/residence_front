<template>
    <div class="personshow">
        <div class="left-box">
            <div class="person-card">
                <div class="person-data">
                    <div class="person-img">
                        {{ userList.userName }}
                    </div>
                    <div class="userdata">
                        <div class="username">
                            {{ userList.userName }}
                        </div>
                        <div class="useremail">
                            {{ userList.userEmail }}
                        </div>
                    </div>
                </div>
                <el-button type="primary" @click="jumpSetting" v-show="myself">
                    个人设置
                </el-button>
            </div>
            <div class="person-box">
                <nav class="navbox">
                    <template v-for="item in personList" :key="item">
                        <router-link :to="item.index" v-show="item.show">{{ item.title }}</router-link>
                    </template>
                </nav>
                <div class="listbox">
                    <router-view>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

// 用户数据获取
const userList = ref('')

axios.request({
    method: 'post',
    url: '/api/user/find',
    data: {
        userID: JSON.parse(localStorage.getItem('userID'))
    }
}).then((res) => {
    userList.value = res.data.data[0];
})

const router = useRouter();
const jumpSetting = () => {
    router.push('/personsetting')    
}

const personList = [
    {
        index: '/note',
        title: '笔记',
        show: false
    },
    {
        index: '/writer',
        title: '发表',
        show: true
    },
    {
        index: '/star',
        title: '收藏',
        show: true
    },
    {
        index: '/like',
        title: '点赞',
        show: true
    },
]

// 判断用户
const myself = ref(false);
if (JSON.parse(localStorage.getItem('userInfo')).userID == JSON.parse(localStorage.getItem('userID'))) {
    myself.value = true;
    personList[0].show = true;
}
</script>

<style scoped>
@import '@style/user.css';
</style>
