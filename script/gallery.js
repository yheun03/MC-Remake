$(document).ready(function(){
    // NOTE: 선택된 페이지에 맞춰 사진 보여주는 매개함수
    function showPhoto(inja){
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
                $("#poster").css({"background-image":  "url('./img/competition/1.jpg')"})
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
                $("#poster").css({"background-image":  "url('./img/competition/2.jpg')"})
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
                $("#poster").css({"background-image":  "url('./img/competition/3.jpg')"})
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
                $("#poster").css({"background-image":  "url('./img/competition/4.jpg')"})
                break;
            // case "3":
            //     url = "./img/competition/first.jpg";
            //     alert(i)
            //     $("#poster").css({"background-image": url})
            //     break;
        }
    }

    // NOTE: 대회 열람 순서
    for(let i = 1; i<=9; i++){
        $(".project_number:nth-child("+i+")").click(function(){
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(this).removeClass("n_a_50").addClass("n_c_50")
            showPhoto(i-1)
        })
    }

    // NOTE: PHOTO 갤러리
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

    // NOTE: 전 페이지로 이동
    $(".project_arrow:first-child").click(function(){
        let pagecnt1 = parseInt($('#project .n_c_50').html());
        if(pagecnt1 != 1){
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+pagecnt1+")").removeClass("n_a_50").addClass("n_c_50")
            showPhoto(pagecnt1 - 1)
        }
    })

    // NOTE: 다음 페이지로 이동
    $(".project_arrow:last-child").click(function(){
        let pagecnt2 = parseInt($('#project .n_c_50').html())+ 2;
        if(pagecnt2 <= $(".project_number").length+1){
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(".project_number:nth-child("+pagecnt2+")").removeClass("n_a_50").addClass("n_c_50")
            showPhoto(pagecnt2 - 1)
        }
    })


})