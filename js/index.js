document.addEventListener("DOMContentLoaded", () => {

    const clearElement = (el) => {
        if (el) el.replaceChildren();
    };

    // Hero Section
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        clearElement(heroSection);

        const heroImage = document.createElement("div");
        heroImage.className = "hero-image";
        heroImage.style.backgroundImage = `url('${hero.image}')`;

        // Hero Header
        const heroHeader = document.createElement("div");
        heroHeader.className = "hero-header";

        const logoCube = document.createElement("div");
        logoCube.className = "logo-cube";
        const logoImg = document.createElement("img");
        logoImg.src = hero.logoIcon || "assets/cube 1.png";
        logoImg.alt = "Cube logo";
        logoCube.appendChild(logoImg);

        const userPill = document.createElement("div");
        userPill.className = "user-pill";

        const chevron = document.createElement("span");
        chevron.className = "chevron";
        chevron.textContent = "˅";

        const userAvatar = document.createElement("div");
        userAvatar.className = "user-avatar";
        const userImg = document.createElement("img");
        userImg.src = hero.userIcon || "assets/XMLID 119.png";
        userImg.alt = "User";
        userAvatar.appendChild(userImg);

        userPill.append(chevron, userAvatar);
        heroHeader.append(logoCube, userPill);

        // Hero Card
        const heroCard = document.createElement("div");
        heroCard.className = "hero-card";

        const h1 = document.createElement("h1");
        h1.textContent = hero.headline;

        const p = document.createElement("p");
        p.textContent = hero.copy;

        const btnHero = document.createElement("button");
        btnHero.className = "btn-hero";

        const btnImg = document.createElement("img");
        btnImg.src = hero.icon;
        btnImg.alt = "Globe icon";

        btnHero.append(btnImg, " Explore");
        heroCard.append(h1, p, btnHero);

        heroImage.append(heroHeader, heroCard);
        heroSection.appendChild(heroImage);
    }

    // Services
    const servicesSection = document.querySelector(".services");
    if (servicesSection) {
        clearElement(servicesSection);

        services.forEach(service => {
            const article = document.createElement("article");
            article.className = "service-card";

            const img = document.createElement("img");
            img.src = service.illustration;
            img.alt = service.headline;

            const h3 = document.createElement("h3");
            h3.textContent = service.headline;

            const p = document.createElement("p");
            p.textContent = service.text;

            const a = document.createElement("a");
            a.href = "#";
            a.textContent = service.linktext;

            article.append(img, h3, p, a);
            servicesSection.appendChild(article);
        });
    }

    // Facilities
    const facilitiesSection = document.querySelector(".facilities");
    if (facilitiesSection) {
        clearElement(facilitiesSection);

        const h2 = document.createElement("h2");
        h2.textContent = facilities.headline;

        const grid = document.createElement("div");
        grid.className = "facilities-grid";

        facilities.options.forEach(option => {
            const card = document.createElement("div");
            card.className = "facility-card";

            const img = document.createElement("img");
            img.src = option.icon;
            img.alt = option.headline;

            const h4 = document.createElement("h4");
            h4.textContent = option.headline;

            const p = document.createElement("p");
            p.textContent = option.text;

            const a = document.createElement("a");
            a.href = "#";
            a.textContent = "Show me more";

            card.append(img, h4, p, a);
            grid.appendChild(card);
        });

        facilitiesSection.append(h2, grid);
    }

    // Sites Section
    const sitesSection = document.querySelector(".sites");
    if (sitesSection) {
        clearElement(sitesSection);

        const sitesHeader = document.createElement("div");
        sitesHeader.className = "sites-header";

        const h2 = document.createElement("h2");
        h2.textContent = sites.headline;

        const p = document.createElement("p");
        p.textContent = sites.text;

        const button = document.createElement("button");
        button.className = "btn-sites";

        const btnImg = document.createElement("img");
        btnImg.src = sites.btnicon;
        btnImg.alt = "Arrow icon";

        button.append(btnImg, " Start");
        sitesHeader.append(h2, p, button);

        const sitesGrid = document.createElement("div");
        sitesGrid.className = "sites-grid";

        sites.places.forEach(place => {
            const card = document.createElement("div");
            card.className = "site-card";

            const siteImg = document.createElement("div");
            siteImg.className = "site-img";
            siteImg.style.backgroundImage = `url('${place.img}')`;

            const siteInfo = document.createElement("div");
            siteInfo.className = "site-info";

            const h3 = document.createElement("h3");
            h3.textContent = place.name;

            const cityP = document.createElement("p");
            cityP.textContent = place.city;

            const a = document.createElement("a");
            a.href = "#";
            a.textContent = "View the Site";

            siteInfo.append(h3, cityP, a);
            card.append(siteImg, siteInfo);
            sitesGrid.appendChild(card);
        });

        sitesSection.append(sitesHeader, sitesGrid);
    }

    // Advantages Section
    const advantagesSection = document.querySelector(".advantages");
    if (advantagesSection) {
        clearElement(advantagesSection);

        const h2 = document.createElement("h2");
        h2.textContent = "Our Advantages";

        const grid = document.createElement("div");
        grid.className = "advantages-grid";

        advantages.forEach(adv => {
            const card = document.createElement("div");
            card.className = "advantage-card";

            const img = document.createElement("img");
            img.src = adv.icon;
            img.alt = adv.headline;

            const h4 = document.createElement("h4");
            h4.textContent = adv.headline;

            const p = document.createElement("p");
            p.textContent = adv.text;

            card.append(img, h4, p);
            grid.appendChild(card);
        });

        advantagesSection.append(h2, grid);
    }

    // Footer Section
    const footerSection = document.querySelector(".footer");
    if (footerSection) {
        clearElement(footerSection);

        // Footer Top
        const footerTop = document.createElement("div");
        footerTop.className = "footer-top";

        const footerBrand = document.createElement("div");
        footerBrand.className = "footer-brand";

        const brandH2 = document.createElement("h2");
        brandH2.textContent = footer.text;

        const brandTagline = document.createElement("p");
        brandTagline.className = "tagline";
        brandTagline.textContent = footer.copy;

        footerBrand.append(brandH2, brandTagline);

        const footerLinks = document.createElement("div");
        footerLinks.className = "footer-links";

        footer.links.forEach(group => {
            const column = document.createElement("div");
            column.className = "footer-column";

            const h4 = document.createElement("h4");
            h4.textContent = group.title;

            const ul = document.createElement("ul");
            group.links.forEach(linkText => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = linkText;
                li.appendChild(a);
                ul.appendChild(li);
            });

            column.append(h4, ul);
            footerLinks.appendChild(column);
        });

        footerTop.append(footerBrand, footerLinks);

        // Footer Bottom
        const footerBottom = document.createElement("div");
        footerBottom.className = "footer-bottom";

        const copyright = document.createElement("p");
        copyright.className = "copyright";
        copyright.textContent = "EazyCamper. All rights reserved.";

        const footerLegal = document.createElement("ul");
        footerLegal.className = "footer-legal";

        const legalLinks = ["About", "Site Map", "Terms", "Privacy Policy", "Teams"];
        legalLinks.forEach(itemText => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = itemText;
            li.appendChild(a);
            footerLegal.appendChild(li);
        });

        footerBottom.append(copyright, footerLegal);
        footerSection.append(footerTop, footerBottom);
    }
});