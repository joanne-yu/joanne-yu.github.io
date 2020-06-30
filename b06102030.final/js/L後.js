$(() => {
    $('#L後').on('click', () => {
        // 隨機產生一個1到52的數字
        let r = RandomInt(32, 37)
        $('a').attr("href", r+".html");
    })
})