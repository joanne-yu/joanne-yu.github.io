$(() => {
    $('#C公').on('click', () => {
        // 隨機產生一個1到52的數字
        let r = RandomInt(57, 62)
        $('a').attr("href", r+".html");
    })
})