$(document).ready(function(){
    // NOTE: 선택된 페이지에 맞춰 사진 보여주는 매개함수
    function showCompetition(inja){
        switch (inja){
            case 1:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("그린 메이커톤")
                $("#poster_leader").html("김영종")
                $("#poster_teammate").html("은영환")
                $("#poster_result").html("최우수상(완성도상)")
                let img1 = [
                    "./img/competition/1/1.jpg"
                ]
                for(let i = 0; i <= img1.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/1/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/1.jpg')"})
                break;
            case 2:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("2019 웰컴 투 메이커월드")
                $("#poster_leader").html("은영환")
                $("#poster_teammate").html("강산들, 김건우, 이정민")
                $("#poster_result").html("미래상")
                let img2 = [
                    "./img/competition/2/1.jpg",
                    "./img/competition/2/2.jpg",
                    "./img/competition/2/3.jpg",
                    "./img/competition/2/4.jpg"
                ]
                for(let i = 0; i <= img2.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/2/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/2.jpg')"})
                break;
            case 3:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("모두의 메이커학교")
                $("#poster_leader").html("은영환")
                $("#poster_teammate").html("강산들, 김건우")
                $("#poster_result").html("3등 (베스트 팀워크상)")
                let img3 = [
                    "./img/competition/3/1.jpg",
                    "./img/competition/3/2.jpg",
                    "./img/competition/3/3.jpg"
                ]
                for(let i = 0; i <= img3.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/3/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/3.jpg')"})
                break;
            case 4:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("IoT 메이커스 해커톤")
                $("#poster_leader").html("은영환")
                $("#poster_teammate").html("김영종, 강산들, 이규은")
                $("#poster_result").html("5등")
                let img4 = [
                    "./img/competition/4/1.jpg",
                    "./img/competition/4/2.jpg",
                    "./img/competition/4/3.jpg",
                    "./img/competition/4/4.jpg",
                    "./img/competition/4/5.jpg"
                ]
                for(let i = 0; i <= img4.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/4/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/4.jpg')"})
                break;
            case 5:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("명동 루프탑 캐릭터 메이커톤")
                $("#poster_leader").html("은영환")
                $("#poster_teammate").html("이규은, 이정훈, 강현채, 이수현, 이영석")
                $("#poster_result").html("1등")
                let img5 = [
                    "./img/competition/5/1.jpg",
                    "./img/competition/5/2.jpg",
                    "./img/competition/5/3.jpg",
                    "./img/competition/5/4.jpg",
                    "./img/competition/5/5.jpg"
                ]
                for(let i = 0; i <= img5.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/5/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/5.jpg')"})
                break;
            case 6:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("제5회 Creative Space G AI & IoT 메이커톤")
                $("#poster_leader").html("은영환")
                $("#poster_teammate").html("강산들, 강현채")
                $("#poster_result").html("2등")
                let img6 = [
                    "./img/competition/6/1.jpg",
                    "./img/competition/6/2.jpg",
                    "./img/competition/6/3.jpg",
                    "./img/competition/6/4.jpg",
                    "./img/competition/6/5.jpg"
                ]
                for(let i = 0; i <= img6.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/6/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/6.jpg')"})
                break;
            case 7:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("7")
                $("#poster_leader").html("")
                $("#poster_teammate").html("")
                $("#poster_result").html("")
                let img7 = [
                    "./img/competition/4/1.jpg",
                    "./img/competition/4/2.jpg",
                    "./img/competition/4/3.jpg",
                    "./img/competition/4/4.jpg",
                    "./img/competition/4/5.jpg"
                ]
                for(let i = 0; i <= img7.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/7/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/7.jpg')"})
                break;
            case 8:
                $(".photo").css({"background-image":  "none"})
                $("#poster_title").html("8")
                $("#poster_leader").html("")
                $("#poster_teammate").html("")
                $("#poster_result").html("")
                let img8 = [
                    "./img/competition/4/1.jpg",
                    "./img/competition/4/2.jpg",
                    "./img/competition/4/3.jpg",
                    "./img/competition/4/4.jpg",
                    "./img/competition/4/5.jpg"
                ]
                for(let i = 0; i <= img8.length; i++){
                    $("#photo"+i).css({"background-image":  "url('./img/competition/8/"+i+".jpg')"})
                }
                $("#project .iphoneScreen").css({"background-image":  "url('./img/competition/8.jpg')"})
                break;
        }
    }
    
    // NOTE: 이미지 보이기 9개 갤러리
    for(let i = 1; i<=9; i++){
        $("#photo"+i).click(function(){
            if($("#photo"+i).css("background-image") != "none"){
                $("#pop_photo").show();
                $("#pop_photo_img").css("background-image", $("#photo"+i).css("background-image"));
                $("#pop_photo").click(function(){
                    $(this).hide()
                })
            }
        })
    }

    // NOTE: 대회 열람 순서
    $(".project_number").click(function(){
        let pageCnt = parseInt($(this).html());
        if(pageCnt <= 1){
            $(".project_arrow:first-child").css({"opacity":".4"})
        }else{
            $(".project_arrow:first-child").css({"opacity":"1"})
        }
        $(".project_number").removeClass("n_c_50").addClass("n_a_50")
        $(this).removeClass("n_a_50").addClass("n_c_50")
        showCompetition(pageCnt)
    })

    // NOTE: 전 페이지로 이동
    $(".project_arrow:first-child").click(function(){
        let prevPageCnt = parseInt($('#project .n_c_50').html())-1;
        if(prevPageCnt <= 1){
            $(".project_arrow:first-child").css({"opacity":".4"})
        }else{
            $(".project_arrow:first-child").css({"opacity":"1"})
        }
        if(prevPageCnt == 0){
            return false
        }else if(prevPageCnt <= 4 && prevPageCnt >= 1){
            console.log("1~4")
            let movePageCnt = prevPageCnt + 1
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+movePageCnt+")").removeClass("n_a_50").addClass("n_c_50")
            if(prevPageCnt == 4){
                for(let y = 2; y <= 5; y++){
                    $("#project_h > div .project_number:nth-child("+y+")").text(y-1);
                    $(".project_number").removeClass("n_c_50").addClass("n_a_50")
                    $(".project_number:nth-child(5)").removeClass("n_a_50").addClass("n_c_50")
                }
            }
        }else if(prevPageCnt <= 8 && prevPageCnt >= 5){
            console.log("5~8")
            console.log(prevPageCnt)
            let movePageCnt = prevPageCnt + 1 - 4;
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+movePageCnt+")").removeClass("n_a_50").addClass("n_c_50")
        }
        showCompetition(prevPageCnt)
    })

    // NOTE: 다음 페이지로 이동
    $(".project_arrow:last-child").click(function(){
        let nextPageCnt = parseInt($('#project .n_c_50').html())+1;
        console.log(nextPageCnt)
        if(nextPageCnt == 0){
            return false
        }else if(nextPageCnt <= 4 && nextPageCnt >= 1){
            console.log("1~4")
            let movePageCnt = nextPageCnt + 1
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+movePageCnt+")").removeClass("n_a_50").addClass("n_c_50")
        }else if(nextPageCnt <= 8 && nextPageCnt >= 5){
            console.log("5~8")
            let movePageCnt = nextPageCnt + 1 - 4;
            if(nextPageCnt == 5){
                for(let y = 2; y <= 5; y++){
                    $("#project_h > div .project_number:nth-child("+y+")").text(y-1 +4);
                    $(".project_number").removeClass("n_c_50").addClass("n_a_50")
                    $(".project_number:nth-child(5)").removeClass("n_a_50").addClass("n_c_50")
                }
            }
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+movePageCnt+")").removeClass("n_a_50").addClass("n_c_50")
        }
        showCompetition(nextPageCnt)
    })
})