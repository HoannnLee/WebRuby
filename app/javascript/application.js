// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"


function showCurrentDate() {
    console.log("Updating date...");
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    
    const currentDate = `${day}/${month}/${year}`;
    document.querySelector(".currentDate").innerHTML = currentDate;
}

function showCurrentTime() {
    console.log("Updating time...");
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.querySelector(".currentTime").innerHTML = currentTime;
}

// Hiển thị ngày và giờ ngay lập tức khi tải trang
document.addEventListener('DOMContentLoaded', (event) => {
    showCurrentDate();
    showCurrentTime();

    // Cập nhật ngày mỗi 24 giờ (86400000ms)
    setInterval(showCurrentDate, 86400000);

    // Cập nhật giờ mỗi giây (1000ms)
    setInterval(showCurrentTime, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
        const menulink = document.querySelectorAll(".navigation-item");
        const currentUrl = window.location.pathname;

        menulink.forEach(link => {
            const linkUrl = link.querySelector("a").getAttribute("href");
            // So sánh URL hiện tại với URL của liên kết, đảm bảo so sánh chính xác
            if (currentUrl.endsWith(linkUrl)) {
                link.classList.add("active");
            }

            link.addEventListener("click", function(e) {
                menulink.forEach(item => {
                    item.classList.remove("active");
                });
                link.classList.add("active");
                
            });
        });
    });


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    const tabs = $$(".Tabs");
    const panes = $$(".content-tabs");
    
    const tabActive = $(".content-tabs.activeTabs");
    
    console.log(tabs,panes,tabActive);
    tabs.forEach((tab, index) => {
      const pane = panes[index];
    
      tab.onclick = function () {
        $(".Tabs.activeTabs").classList.remove("activeTabs");
        $(".content-tabs.activeTabs").classList.remove("activeTabs");
    
    
        this.classList.add("activeTabs");
        pane.classList.add("activeTabs");
      };
    });