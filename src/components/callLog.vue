<template>
    <div>
        <h3>通话记录</h3>
        <div class="device-info">
            <ul>
                <li v-for="(callLog,index) in callLogs" :key="index">
                    <table>
                        <tr>
                            <td>电话号码</td>
                            <td class="call-number">{{callLog.number}}</td>
                        </tr>
                        <tr>
                            <td>通话时间</td>
                            <td class="call-time">{{(new Date(callLog.date)).toLocaleString()}}</td>
                        </tr>
                        <tr>
                            <td>通话时长</td>
                            <td class="call-duration">{{callLog.duration + 's'}}</td>
                        </tr>
                        <tr>
                            <td>通话类型</td>
                            <td class="call-type">{{callTypes[callLog.type - 1]}}</td>
                        </tr>
                        <tr>
                            <td>姓名</td>
                            <td class="call-name">{{callLog.name || '佚名'}}</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "callLog",
    data() {
        return {
            callLogs: [],
            callTypes: ['呼入','呼出','未接通'],
        };
    },
    methods: {
        displayCalllog: function() {
            var _displayCalllog = function() {
                window.plugins.callLog.getCallLog(
                    [],
                    function(data) {
                        this.callLogs = data;
                    },
                    function() {
                        alert("获取通话记录失败！");
                    }
                );
            };

            window.plugins.callLog.hasReadPermission(
                _displayCalllog,
                // 若没有权限则请求
                function() {
                    window.plugins.callLog.requestReadPermission(
                        _displayCalllog,
                        function() {
                            alert("无法获得访问通话记录的权限！");
                        }
                    );
                }
            );
        }
    },
    created () {
        this.displayCalllog();
    }
};
</script>

<style>
table {
    margin-bottom: 10px;
}
</style>
