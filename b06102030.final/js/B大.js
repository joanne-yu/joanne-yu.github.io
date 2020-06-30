$(() => {
    $('#B大').on('click', () => {
        // 隨機產生一個1到52的數字
        let r = RandomInt(7, 12)
        $('a').attr("href", r+".html");
    })
})