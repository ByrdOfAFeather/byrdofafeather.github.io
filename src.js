let resume_clicked = false;
let gold_personal_standard = null;

// https://stackoverflow.com/a/13819253/8448827
let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

document.addEventListener("DOMContentLoaded", function(){
    gold_personal_standard = $("#personal-bio").clone()
    document.getElementById("experience-box").addEventListener("click", () => {
        document.getElementById("experience").scrollIntoView({"behavior": "smooth"})
    });
    document.getElementById("resume-box").addEventListener("click", () => {
        if (!resume_clicked) {
            if (isMobile.any()) {
                var link = document.createElement('a');
                link.href = "resume_redacted.pdf";
                link.download = 'resume_matthew_byrd.pdf';
                link.dispatchEvent(new MouseEvent('click'));
                return;
            }
            /*
            $("#resume-box").css("background-color", "#d7d5d5")
            let personal_info = $("#personal-bio");
            let personal_info_copy = personal_info.clone();
            personal_info_copy.attr("id", "personal-bio-hidden");
            personal_info_copy.css("visibility", "hidden");
            $(personal_info.parents().first()).append(personal_info_copy);
            let height = personal_info_copy.height();
            let width =  personal_info_copy.width();
            personal_info_copy.empty();
            personal_info.slideUp(500, () => {
                showResume(height, width);
            })
            resume_clicked = true;
            */
            window.open("resume_redacted.pdf")

        } else {
            $("#resume-box").css("background-color", "white")
            $("#personal-bio-hidden").slideUp(500, () => {
                $("#personal-bio").slideDown(500);
                $("#personal-bio-hidden").remove();
            });
            resume_clicked = false;
        }

    });
    document.getElementById("projects-box").addEventListener("click", () => {
        window.location.href="projects.html"
    });

    document.getElementById("pred-diff-pub").addEventListener("click", () => {
        window.location.href="https://aclanthology.org/2022.acl-short.15/"
    });
    document.getElementById("2d-3d-pub").addEventListener("click", () => {
        window.location.href="https://sicb.org/abstracts/2d-and-3d-video-digitizing-with-a-web-browser/"
    });
});

function showResume(height, width) {

    let setup = $("#personal-bio-hidden").append(
        $(`<embed src=\"resume_redacted.pdf\" width=\"${width}px\" height=\"${height}px\" style="height:${height}px"/>\n`)
    );
    $("#personal-bio-hidden").css("visibility", "visible");
}