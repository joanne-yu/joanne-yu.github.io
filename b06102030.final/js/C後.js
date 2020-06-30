$(() => {
    $('#C後').on('click', () => {
        // 隨機產生一個1到52的數字
        let r = RandomInt(69, 74)
        $('a').attr("href", r+".html");
    })
})