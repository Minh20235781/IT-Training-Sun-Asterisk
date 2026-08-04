function initI18n() {
  // 1. Tạo bộ từ điển (Dictionary) cho dự án
  const dict = {
    vi: {
      "nav.home": "Trang chủ",
      "nav.about": "Về chúng tôi",
      "nav.project": "Dự án",
      "nav.career": "Cơ hội nghề nghiệp",
      "nav.env": "Môi trường làm việc",
      "nav.news": "Tin tức",
      "proj.title": "Dự án của chúng tôi",
      "proj.partner": "Đối tác",
      "proj.service": "Dịch vụ được hỗ<br>trợ",
      "proj.viewAll": "Xem tất cả dự án",
      "proj.detail": "Xem chi tiết",
      "proj.card1.company": "Công ty TNHH ZENKIGEN",
      "proj.card1.title": "Dự án HARUTAKA",
      "proj.card1.desc": "“HARUTAKA” cho phép các công ty và người tìm việc có thể phỏng vấn trên web hoặc trong video bất kể thời gian hay địa điểm nào.",
      "proj.card2.company": "SSK Corporation",
      "proj.card2.title": "Dự án SSK",
      "proj.card2.desc": "Hệ thống quản lý vận hành nội bộ giúp tối ưu quy trình doanh nghiệp một cách toàn diện.",
      "proj.card3.company": "Kurashicom Inc.",
      "proj.card3.title": "Dự án Kurashicom",
      "proj.card3.desc": "Nền tảng nội dung lifestyle kết nối thương hiệu với người dùng Nhật Bản, mang lại trải nghiệm tối ưu.",
      "service.title": "Lĩnh vực kinh doanh",
      "service.desc1": "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm <strong class=\"text-dark\">\"Awesome\"</strong> nhất cho end-user.",
      "service.desc2": "Với hai dòng dịch vụ là <strong class=\"text-dark\">\"Creative & Engineering\"</strong> và <strong class=\"text-dark\">\"Talent Platform\"</strong>, Sun* đã và đang từng bước cùng công nghệ tạo ra những giá trị tốt đẹp cho xã hội.",
      "service.badge": "Digital Creative Studio",
      "service.card1.title": "Creative<br />& Engineering",
      "service.card1.desc": "Đội ngũ nhân lực dồi dào chuyên về công nghệ, thiết kế và kinh doanh.",
      "service.card1.cta": "Tìm hiểu thêm",
      "service.card2.title": "Talent<br />Platform",
      "service.card2.desc": "Các giải pháp nguồn nhân lực hỗ trợ tăng trưởng kinh doanh bền vững.",
      "service.card2.cta": "Tìm hiểu thêm",
      "career.title": "Cơ hội nghề nghiệp",
      "career.subtitle": "Join us &amp; MAKE AWESOME THINGS THAT MATTER.",
      "career.desc1": "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị \"Awesome\".",
      "career.desc2": "Cùng trở thành một phần của Sun* ngay hôm nay.",
      "career.cta": "Gia nhập đội ngũ Sun*",
      "about.title": "Môi trường làm việc",
      "about.item1": "<strong class=\"text-dark\">#ActiveChallenge:</strong> Chủ động tạo ra công việc thử thách liên tục cho bản thân.",
      "about.item2": "<strong class=\"text-dark\">#ActiveLearn:</strong> Học tập trong một tổ chức có đầy đủ các thành tố: môi trường học tập, cơ hội học tập, năng lực học tập.",
      "about.item3": "<strong class=\"text-dark\">#ActiveJoy:</strong> Sống trong môi trường văn hóa hướng tới giá trị nhân văn, và hạnh phúc cho mọi người.",
      "about.cta": "Xem chi tiết",
      "news.title": "Văn hóa - Sự kiện",
      "news.badgeHot": "Tin nóng",
      "news.card1.title": "Nóng: Chính thức mở đăng ký TechUp #2 - Ứng dụng AI để cải tiến hiệu suất lập trình và tạo ra sản phẩm đột phá",
      "news.card1.desc": "Sau thành công vang dội của số đầu tiên vào năm 2023, TechUp - sự kiện công nghệ \"hosted by Sun*\" sẽ chính thức quay trở lại cùng phiên bản mới.",
      "news.card1.cta": "Xem chi tiết",
      "news.card2.title": "Dự án Insurance SaaS Development Support: Golang, VueJS trở thành \"chất xúc tác\" để Sunner vượt giới hạn",
      "news.card2.desc": "\"Đề bài càng hóc búa, càng hấp dẫn để xông pha\", \"Ngôn ngữ mới không phải rào cản, mà chính là cơ hội để chứng minh năng lực\".",
      "news.card2.cta": "Xem chi tiết",
      "news.card3.title": "6 tháng cùng chiến lược \"Toàn Sun* học tập và thực hành liên tục\", chúng ta đã có những kết quả như thế nào?",
      "news.card3.desc": "Để nuôi dưỡng và phát triển mạnh mẽ văn hóa học tập, từ đó trở thành \"Tổ chức học tập\" (Learning Organization), 6 tháng qua...",
      "news.card3.cta": "Xem chi tiết",
      "news.cta": "Xem nhiều tin hơn",
      "footer.who.title": "Chúng tôi là ai?",
      "footer.who.item1": "Tầm nhìn, sứ mệnh",
      "footer.who.item2": "Giá trị cốt lõi",
      "footer.who.item3": "Ý nghĩa tên Sun*",
      "footer.what.title": "Chúng tôi làm gì?",
      "footer.what.item1": "Creative & Engineering",
      "footer.what.item2": "Talent Platform",
      "footer.what.item3": "Dự án của chúng tôi",
      "footer.news.title": "Cập nhật tin tức",
      "footer.news.item1": "Văn hóa - Sự kiện",
      "footer.news.item2": "Tuyển dụng",
      "footer.news.item3": "Chính sách phúc lợi",
      "footer.contact.title": "Liên hệ",
      "footer.contact.phone": "SĐT: 84-24-3795-5417",
      "footer.contact.email": "Email: hr@sun-asterisk.com",
      "footer.office.title": "Văn phòng",
      "footer.office.item1": "T13 Keangnam Hanoi Landmark Tower, khu E6 khu ĐTM Cầu Giấy, Phường Yên Hòa, Thành phố Hà Nội, Việt Nam.",
      "footer.office.item2": "Tầng 4, 16 Lý Thường Kiệt, Phường Hải Châu, Thành phố Đà Nẵng, Việt Nam.",
      "footer.office.item3": "Tầng 9 và Tầng 10, L'Mak Long Tower, số 101-103 Nguyễn Cửu Vân, Phường Gia Định, Thành phố Hồ Chí Minh, Việt Nam.",
      "footer.office.item4": "Văn phòng Tokyo - Văn phòng Cebu - Văn phòng Phnom Penh",
      "footer.copyright": "@ 2021 Sun-asterisk. All rights reserved.",
      "footer.legal1": "Giấy chứng nhận ĐKDN: 0106045931 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 29/10/2012",
      "footer.legal2": "Giấy phép hoạt động DVVL: 03/2022 do Sở LĐTBXH TP Hà Nội cấp lần đầu ngày 10/01/2022",
      "footer.legal3": "Người đại diện theo pháp luật: KOBAYASHI TAIHEI - Tổng giám đốc"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.project": "Projects",
      "nav.career": "Careers",
      "nav.env": "Environment",
      "nav.news": "News",
      "proj.title": "Our Projects",
      "proj.partner": "Partners",
      "proj.service": "Supported<br>Services",
      "proj.viewAll": "View all projects",
      "proj.detail": "View details",
      "proj.card1.company": "ZENKIGEN Co., Ltd.",
      "proj.card1.title": "HARUTAKA Project",
      "proj.card1.desc": "HARUTAKA enables companies and job seekers to interview on the web or by video regardless of time or location.",
      "proj.card2.company": "SSK Corporation",
      "proj.card2.title": "SSK Project",
      "proj.card2.desc": "An internal operations management system that helps optimize business workflows comprehensively.",
      "proj.card3.company": "Kurashicom Inc.",
      "proj.card3.title": "Kurashicom Project",
      "proj.card3.desc": "A lifestyle content platform that connects brands with Japanese users and delivers an optimal experience.",
      "service.title": "Business Areas",
      "service.desc1": "As a Digital Creative Studio, Sun* always values product ownership and creative thinking in every project to deliver the most \"Awesome\" experiences for end users.",
      "service.desc2": "With two service lines, <strong class=\"text-dark\">\"Creative & Engineering\"</strong> and <strong class=\"text-dark\">\"Talent Platform\"</strong>, Sun* has been steadily creating meaningful value for society through technology.",
      "service.badge": "Digital Creative Studio",
      "service.card1.title": "Creative<br />& Engineering",
      "service.card1.desc": "A talented team specializing in technology, design, and business.",
      "service.card1.cta": "Learn more",
      "service.card2.title": "Talent<br />Platform",
      "service.card2.desc": "Human resource solutions that support sustainable business growth.",
      "service.card2.cta": "Learn more",
      "career.title": "Career Opportunities",
      "career.subtitle": "Join us &amp; MAKE AWESOME THINGS THAT MATTER.",
      "career.desc1": "Sun* is always looking for people who love challenges and want to create \"Awesome\" value.",
      "career.desc2": "Become a part of Sun* today.",
      "career.cta": "Join the Sun* team",
      "about.title": "Working Environment",
      "about.item1": "<strong class=\"text-dark\">#ActiveChallenge:</strong> Proactively create continuous challenges for yourself.",
      "about.item2": "<strong class=\"text-dark\">#ActiveLearn:</strong> Learn in an organization with all the essential elements: learning environment, learning opportunities, and learning capability.",
      "about.item3": "<strong class=\"text-dark\">#ActiveJoy:</strong> Live in a culture that values humanity and happiness for everyone.",
      "about.cta": "View details",
      "news.title": "Culture - Events",
      "news.badgeHot": "Hot News",
      "news.card1.title": "Breaking: Registration for TechUp #2 is now open - Applying AI to improve coding performance and create breakthrough products",
      "news.card1.desc": "After the huge success of the first edition in 2023, TechUp - the tech event \"hosted by Sun*\" will officially return with a new version.",
      "news.card1.cta": "View details",
      "news.card2.title": "Insurance SaaS Development Support project: Golang and VueJS become the \"catalyst\" for Sunner to break limits",
      "news.card2.desc": "\"The harder the challenge, the more exciting it is to push forward\", \"A new language is not a barrier, but an opportunity to prove our capability\".",
      "news.card2.cta": "View details",
      "news.card3.title": "Six months with the strategy of \"Sun* learning and practicing continuously\" - what results have we achieved?",
      "news.card3.desc": "To nurture and strengthen a learning culture and become a Learning Organization, the past six months have...",
      "news.card3.cta": "View details",
      "news.cta": "See more news",
      "footer.who.title": "Who we are?",
      "footer.who.item1": "Vision & Mission",
      "footer.who.item2": "Core Values",
      "footer.who.item3": "Meaning of the name Sun*",
      "footer.what.title": "What we do?",
      "footer.what.item1": "Creative & Engineering",
      "footer.what.item2": "Talent Platform",
      "footer.what.item3": "Our Projects",
      "footer.news.title": "Latest updates",
      "footer.news.item1": "Culture - Events",
      "footer.news.item2": "Recruitment",
      "footer.news.item3": "Benefits policy",
      "footer.contact.title": "Contact",
      "footer.contact.phone": "Phone: 84-24-3795-5417",
      "footer.contact.email": "Email: hr@sun-asterisk.com",
      "footer.office.title": "Offices",
      "footer.office.item1": "T13 Keangnam Hanoi Landmark Tower, E6 area, Cau Giay New Urban Area, Yen Hoa Ward, Hanoi, Vietnam.",
      "footer.office.item2": "4th Floor, 16 Ly Thuong Kiet, Hai Chau Ward, Da Nang City, Vietnam.",
      "footer.office.item3": "9th and 10th Floors, L'Mak Long Tower, 101-103 Nguyen Cuu Van, Gia Dinh Ward, Ho Chi Minh City, Vietnam.",
      "footer.office.item4": "Tokyo Office - Cebu Office - Phnom Penh Office",
      "footer.copyright": "@ 2021 Sun-asterisk. All rights reserved.",
      "footer.legal1": "Business registration certificate No. 0106045931 first issued by the Hanoi Department of Planning and Investment on 29/10/2012.",
      "footer.legal2": "Employment service license No. 03/2022 first issued by the Hanoi Department of Labour, Invalids and Social Affairs on 10/01/2022.",
      "footer.legal3": "Legal representative: KOBAYASHI TAIHEI - General Director"
    }
  };

  // 2. Hàm gán ngôn ngữ lên giao diện
  const setLanguage = (lang) => {
    localStorage.setItem("sun_lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang][key]) {
        el.innerHTML = dict[lang][key];
      }
    });

    document.querySelectorAll("[data-lang]").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.className = "text-[#D32027] border border-[#D32027] rounded px-2 py-1 font-semibold transition-colors";
      } else {
        btn.className = "text-gray-400 border border-transparent px-2 py-1 hover:text-gray-600 font-semibold transition-colors";
      }
    });
  };

  const currentLang = localStorage.getItem("sun_lang") || "vi";
  setLanguage(currentLang);

  document.querySelectorAll("[data-lang]").forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener("click", (e) => {
      e.preventDefault();
      setLanguage(newBtn.getAttribute("data-lang"));
    });
  });
}

document.addEventListener("componentsLoaded", () => {
  initI18n();
});