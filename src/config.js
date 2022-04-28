const config = {
    // 联调环境
    dev: {
        websiteDomain: '',
    },
    // 测试环境
    qa: {
        websiteDomain: '',
    },
    // 灰度环境
    stg: {
        websiteDomain: '',
    },
    // 生产环境
    prod: {
        websiteDomain: '',
    },
};
export default config[process.env.BUILD_ENV || 'dev'];
