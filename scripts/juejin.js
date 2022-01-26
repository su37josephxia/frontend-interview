const fs = require('fs')
const readline = require('readline');

// 去除slidev中的markdown
(async () => {
    const out = []
    const input = fs.createReadStream('../day/26/README.md')
    const rl = readline.createInterface({
        input: input,
        crlfDelay: Infinity
    });
    for await (let line of rl ) {
        // console.log(line.match(/---/),'l:',line)

        // 标题自动降级
        if(line.match(/#+ /)){
            line = '#'+ line
        }

        // 去除分隔符和样式标记
        const ary = [
            /^---/,
            /^theme:/,
            /^background:/,
            /^layout:/,
            /^url:/
        ]

        if(ary.every(reg => line.match(reg) === null) ) {
            out.push(line)
        }else {
            // console.log(line)
        }
    }
    fs.writeFileSync('output.md',out.join('\n'))
        
})()