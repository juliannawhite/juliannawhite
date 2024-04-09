window.onload = function () {
    
    const overviewChev = document.querySelector('#overviewChev');
    const teachingChev = document.querySelector('#teachingChev');
    const projectChev = document.querySelector('#projectChev');
    
    const anova = document.querySelector("#anova");
    
    overviewChev.onclick = function() {
        toggleSection(this, 'overview');
    };
    
    teachingChev.onclick = function() {
        toggleSection(this, 'teaching');
    };
    
    projectChev.onclick = function() {
        toggleSection(this, 'project');
    };
    
    function toggleSection(chevButton, section) {
        var secStr = section + "-content";
        var chevSection = document.querySelector("#" + secStr);
        if (chevButton.value == "on") {
            chevButton.value = "off";
            chevSection.style.display = "none";
            chevButton.innerHTML = '<i class="fa-solid fa-chevron-up">';
        } else {
            chevButton.value = "on";
            chevSection.style.display = "block";
            chevButton.innerHTML = '<i class="fa-solid fa-chevron-down">';
        }
    } 
    anova.onmouseover = function() {
        var image = document.getElementById('AnovaImage');
        image.src = 'ANovaHacks1.jpg';
    };

    anova.onmouseout = function() {
        var image = document.getElementById('AnovaImage');
        image.src = 'ANovaHacks2.jpg';
    };
}

