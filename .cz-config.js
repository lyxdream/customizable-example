'use strict'

module.exports = {
    types: [
        { value: 'WIP', name: '🚧  WIP: 开发中' },
        { value: 'feat', name: '✨  feat: 一个新特性' },
        { value: 'improvement', name: '➕  improvement: 对现有特性的提升' },
        { value: 'fix', name: '🐛  fix:修复Bug' },
        {
            value: 'refactor',
            name: '🛠  refactor:代码重构，注意和特性、重构区分开',
        },
        { value: 'docs', name: '📚  docs: 变更文档' },
        { value: 'test', name: '🏁  test: 修改或添加测试文件' },
        { value: 'config', name: '📝  config:  修改或添加配置文件' },
        {
            value: 'style',
            name: '💅  style: 修改格式，不影响功能，例如空格、代码格式等',
        },
        { value: 'perf', name: '📈  perf:性能提升' },
        { value: 'ci', name: '🔧  ci:修改ci相关配置、脚本等' },
        { value: 'revert', name: '⏪  revert:回退版本' },
        {
            value: 'chore',
            name:
                '🗯  chore: 杂务，不属于以上类型，例如run build、引入或更新软件包等',
        },
    ],
    // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],
    // allowTicketNumber: false,
    // isTicketNumberRequired: false,
    // ticketNumberPrefix: 'TICKET-',
    // ticketNumberRegExp: '\\d{1,5}',
    messages: {
        type: '选择一种你的提交类型:',
        scope: '选择修改涉及范围 (可选):',
        // used if allowCustomScopes is true
        customScope: '请输入本次改动的范围（如：功能、模块等）:',
        subject: '简短说明:\n',
        body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
        breaking: '非兼容性，破坏性变化说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '确定提交说明?',
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'], // 仅在feat、fix时填写破坏性更改
    subjectLimit: 100, // limit subject length
    breaklineChar: '|', // 设置body和footer中的换行符
}

// module.exports = {
//     types: [
//         { value: '特性', name: '特性:  一个新的特性' },
//         { value: '修复', name: '修复: 修复一个Bug' },
//         { value: '文档', name: '文档:变更的只有文档' },
//         { value: '格式', name: '格式: 空格, 分号等格式修复' },
//         { value: '重构', name: '重构: 代码重构，注意和特性、修复区分开' },
//         { value: '性能', name: '性能: 提升性能' },
//         { value: '测试', name: '测试: 添加一个测试' },
//         { value: '工具', name: '工具: 开发工具变动(构建、脚手架工具等)' },
//         { value: '回滚', name: '回滚:  代码回退' },
//     ],
//     scopes: [
//         { name: '模块1' },
//         { name: '模块2' },
//         { name: '模块3' },
//         { name: '模块4' },
//     ],
//     // it needs to match the value for field type. Eg.: 'fix'
//     /*
//   scopeOverrides: {
//     fix: [
//       {name: 'merge'},
//       {name: 'style'},
//       {name: 'e2eTest'},
//       {name: 'unitTest'}
//     ]
//   },
//   */
//     // override the messages, defaults are as follows
//     messages: {
//         type: '选择一种你的提交类型:',
//         scope: '选择一个scope (可选):',
//         customScope: 'Denote the SCOPE of this change:',
//         subject: '短说明:\n',
//         body: '长说明，使用"|"换行(可选)：\n',
//         breaking: '非兼容性说明 (可选):\n',
//         footer: '关联关闭的issue，例如：#31, #34(可选):\n',
//         confirmCommit: '确定提交说明?',
//     },

//     allowCustomScopes: true,
//     allowBreakingChanges: ['特性', '修复'],

//     // limit subject length
//     subjectLimit: 100,
// }