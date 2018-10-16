<template>
    <div>
        <router-link to="/camera"><h3>相机与相册</h3></router-link>
        <router-link to='/dial'><h3>拨打电话</h3></router-link>
        <router-link to='/calllog'><h3>通话记录(android)</h3></router-link>
        <router-link to='/device'><h3>设备信息</h3></router-link>
        <router-link to='/network'><h3>网络信息</h3></router-link>
        <router-link to='/notify'><h3>通知推送</h3></router-link>
    </div> 
</template>

<script>
export default {
    name: 'mainPage',
}
</script>

<style scoped>

</style>
