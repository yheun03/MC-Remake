$(document).ready(function(){
    // NOTE: 대회 열람 순서
    for(let i = 1; i<=9; i++){
        let url = "";
        $(".project_number:nth-child("+i+")").click(function(){
            $(".project_number").removeClass("n_c_50").addClass("n_a_50")
            $(this).removeClass("n_a_50").addClass("n_c_50")
            // $(this)

            switch (i-1){
                case 1:
                    let img1 = [
                        "./img/competition/1/1.jpg"
                    ]
                    $("#poster_title").html("그린 메이커톤")
                    $("#poster_leader").html("김영종")
                    $("#poster_teammate").html("은영환")
                    $("#poster_result").html("최우수상(완성도상)")
                    $("#poster").css({"background-image":  "url('./img/competition/1.jpg')"})
                    $(".photo").css({"background-image":  "none"})
                    for(let i = 0; i <= img1.length; i++){
                        $("#photo"+i).css({"background-image":  "url('./img/competition/1/"+i+".jpg')"})
                    }
                    break;
                case 2:
                    let img2 = [
                        "./img/competition/2/1.jpg",
                        "./img/competition/2/2.jpg",
                        "./img/competition/2/3.jpg",
                        "./img/competition/2/4.jpg"
                    ]
                    $("#poster_title").html("2019 웰컴 투 메이커월드")
                    $("#poster_leader").html("은영환")
                    $("#poster_teammate").html("강산들, 김건우, 이정민")
                    $("#poster_result").html("미래상")
                    $("#poster").css({"background-image":  "url('./img/competition/2.jpg')"})
                    $(".photo").css({"background-image":  "none"})
                    for(let i = 0; i <= img2.length; i++){
                        $("#photo"+i).css({"background-image":  "url('./img/competition/2/"+i+".jpg')"})
                    }
                    break;
                case 3:
                    let img3 = [
                        "./img/competition/3/1.jpg",
                        "./img/competition/3/2.jpg",
                        "./img/competition/3/3.jpg"
                    ]
                    $("#poster_title").html("모두의 메이커학교")
                    $("#poster_leader").html("은영환")
                    $("#poster_teammate").html("강산들, 김건우")
                    $("#poster_result").html("3등 (베스트 팀워크상)")
                    $("#poster").css({"background-image":  "url('./img/competition/3.jpg')"})
                    $(".photo").css({"background-image":  "none"})
                    for(let i = 0; i <= img3.length; i++){
                        $("#photo"+i).css({"background-image":  "url('./img/competition/3/"+i+".jpg')"})
                    }
                    break;
                case 4:
                    let img4 = [
                        "./img/competition/4/1.jpg",
                        "./img/competition/4/2.jpg",
                        "./img/competition/4/3.jpg",
                        "./img/competition/4/4.jpg",
                        "./img/competition/4/5.jpg"
                    ]
                    $("#poster_title").html("IoT 메이커스 해커톤")
                    $("#poster_leader").html("은영환")
                    $("#poster_teammate").html("김영종, 강산들, 이규은")
                    $("#poster_result").html("5등")
                    $("#poster").css({"background-image":  "url('./img/competition/4.jpg')"})
                    $(".photo").css({"background-image":  "none"})
                    for(let i = 0; i <= img4.length; i++){
                        $("#photo"+i).css({"background-image":  "url('./img/competition/4/"+i+".jpg')"})
                    }
                    break;
                // case "3":
                //     url = "./img/competition/first.jpg";
                //     alert(i)
                //     $("#poster").css({"background-image": url})
                //     break;
            }
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
})