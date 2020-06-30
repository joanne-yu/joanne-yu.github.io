$(() => {
    $('#L公').on('click', () => {
        // 隨機產生一個1到52的數字
        let r = RandomInt(19, 25)
        $('a').attr("href", r+".html");
    })
})